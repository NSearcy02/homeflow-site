"use client";

import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import confetti from "canvas-confetti";

function LoyaltyTrialContent() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasDetectedSubmission, setHasDetectedSubmission] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Check for thank-you page redirect
  useEffect(() => {
    const checkForThankYouPage = () => {
      if (window.location.href.includes('/thank-you') || 
          window.location.href.includes('thank') ||
          window.location.href.includes('success')) {
        setHasDetectedSubmission(true);
      }
    };

    checkForThankYouPage();
  }, []);

  // Check iframe content for submission indicators
  const handleIframeLoad = () => {
    try {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentDocument) {
        const iframeContent = iframe.contentDocument.body.innerText.toLowerCase();
        if (iframeContent.includes('thank you') || 
            iframeContent.includes('success') ||
            iframeContent.includes('submitted') ||
            iframeContent.includes('received')) {
          setHasDetectedSubmission(true);
        }
      }
    } catch {
      // Cross-origin restrictions - this is expected
    }
  };

  // Listen for postMessage events from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Check if message is from GHL or HomeFlow domains
      if (event.origin.includes('leadconnectorhq.com') || 
          event.origin.includes('homeflowsystems.com')) {
        const message = event.data;
        if (typeof message === 'string') {
          const lowerMessage = message.toLowerCase();
          if (lowerMessage.includes('submitted') || 
              lowerMessage.includes('success') ||
              lowerMessage.includes('thank you')) {
            setHasDetectedSubmission(true);
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Periodic check for iframe content changes
  useEffect(() => {
    if (hasDetectedSubmission) return;

    const checkIframeContent = () => {
      try {
        const iframe = iframeRef.current;
        if (iframe && iframe.contentDocument) {
          const iframeContent = iframe.contentDocument.body.innerText.toLowerCase();
          if (iframeContent.includes('thank you') || 
              iframeContent.includes('success') ||
              iframeContent.includes('submitted') ||
              iframeContent.includes('received')) {
            setHasDetectedSubmission(true);
          }
        }
      } catch {
        // Cross-origin restrictions - this is expected
      }
    };

    const contentCheckInterval = setInterval(checkIframeContent, 2000);
    return () => clearInterval(contentCheckInterval);
  }, [hasDetectedSubmission]);

  // Check for iframe src changes (some forms redirect to thank you pages)
  useEffect(() => {
    if (hasDetectedSubmission) return;

    const checkIframeSrc = () => {
      const iframe = iframeRef.current;
      if (iframe) {
        const currentSrc = iframe.src;
        if (currentSrc.includes('thank-you') || 
            currentSrc.includes('thank') ||
            currentSrc.includes('success') ||
            currentSrc.includes('submitted')) {
          setHasDetectedSubmission(true);
        }
      }
    };

    const srcCheckInterval = setInterval(checkIframeSrc, 2000);
    return () => clearInterval(srcCheckInterval);
  }, [hasDetectedSubmission]);

  // Check for ?submitted=true query parameter
  useEffect(() => {
    const submitted = searchParams.get('submitted');
    if (submitted === 'true') {
      setShowModal(true);
      
      // Fire confetti burst
      const fireConfetti = () => {
        const count = 200;
        const defaults = {
          origin: { y: 0.7 }
        };

        function fire(particleRatio: number, opts: confetti.Options) {
          confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
          });
        }

        fire(0.25, {
          spread: 26,
          startVelocity: 55,
        });
        fire(0.2, {
          spread: 60,
        });
        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 45,
        });
      };

      // Fire confetti after a short delay
      setTimeout(fireConfetti, 300);
    }
  }, [searchParams]);

  // Handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
    // Remove the submitted query parameter
    router.replace('/loyalty-trial');
  };

  // Handle body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Turn One-Timers Into Lifers{" "}
            <span className="text-slate-900">(On the House)</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Kick off a 60-day Loyalty Club — free setup, fully managed. Turn your best customers into VIPs who come back again and again.
          </p>

          <p className="text-sm text-slate-500 italic">
            No spam. No pressure. Just more people coming back for more.
          </p>

        </motion.div>


        {/* Form Section - Hide when form is submitted */}
        {!hasDetectedSubmission && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="mt-10">
              <iframe
                ref={iframeRef}
                src="https://api.leadconnectorhq.com/widget/form/VZeLp5jYY9CI2ZRNdxkx"
                style={{width:"100%",height:"100%",border:"none",borderRadius:"3px"}}
                id="inline-VZeLp5jYY9CI2ZRNdxkx"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="HomeFlow Loyalty Trial Form"
                data-height="901"
                data-layout-iframe-id="inline-VZeLp5jYY9CI2ZRNdxkx"
                data-form-id="VZeLp5jYY9CI2ZRNdxkx"
                title="HomeFlow Loyalty Trial Form"
                onLoad={handleIframeLoad}
              />
            </div>
          </motion.div>
        )}

        {/* Custom Thank You Section - Show when form is submitted */}
        {hasDetectedSubmission && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="mt-10 p-8 bg-white rounded-xl shadow-lg border border-slate-200/40 text-center">
              <div className="mx-auto mb-6 inline-flex items-center justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">You&apos;re All Set! 🎉</h2>
              <p className="text-slate-700 mb-4">
                Thanks for signing up for the HomeFlow Loyalty Trial. We&apos;ll be in touch within 24 hours to get your loyalty program up and running.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Free setup",
                  "60-day trial", 
                  "Fully managed",
                  "VIP customer experience",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-md bg-slate-100 text-slate-600 text-xs px-3 py-1.5 font-medium"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        
        {/* GHL Form Script */}
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="afterInteractive"
        />

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              What happens next?
            </h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p>✅ We&apos;ll reach out within 24 hours to learn about your business</p>
              <p>✅ Set up your custom loyalty program (takes about 30 minutes)</p>
              <p>✅ Launch your VIP club and start turning customers into regulars</p>
              <p>✅ We handle all the technical stuff — you just focus on your customers</p>
            </div>
          </div>
          
          <p className="text-sm text-slate-500">
            Questions? We&apos;re here to help make your customers fall in love with coming back.
          </p>
        </motion.div>
      </div>

      {/* Full-Screen Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated Green Checkmark */}
              <div className="mx-auto mb-6 inline-flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.2,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ 
                      delay: 0.4,
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                    className="w-10 h-10 text-green-600"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </motion.div>
              </div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="text-3xl font-bold text-slate-900 mb-4"
              >
                You&apos;re in.
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="text-slate-700 mb-8 leading-relaxed"
              >
                We&apos;ll text or email you soon to set up your Loyalty Club.
              </motion.p>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCloseModal}
                className="w-full px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors duration-200"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

export default function LoyaltyTrialClient() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </main>
    }>
      <LoyaltyTrialContent />
    </Suspense>
  );
}
