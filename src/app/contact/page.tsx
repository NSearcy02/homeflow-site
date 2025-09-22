"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen relative overflow-hidden bg-sky-50 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2">
          <div className="text-center space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900"
            >
              Start Your Free Trial
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto"
            >
              Fill out the form below. We&apos;ll set up Encore for you. Watch customers return.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Full Page Form */}
      <section className="relative bg-white">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/VZeLp5jYY9CI2ZRNdxkx"
          style={{width:"100%",height:"calc(100vh - 100px)",border:"none"}}
          id="inline-VZeLp5jYY9CI2ZRNdxkx"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="HomeFlow Encore Contact Form"
          data-height="calc(100vh - 100px)"
          data-layout-iframe-id="inline-VZeLp5jYY9CI2ZRNdxkx"
          data-form-id="VZeLp5jYY9CI2ZRNdxkx"
          title="HomeFlow Encore Contact Form"
          className="w-full"
        />
      </section>

      {/* FAQ Section */}
      <section className="relative py-2 bg-sky-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-4"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-1">Frequently Asked Questions</h2>
            <p className="text-sm text-slate-600">
              Everything you need to know about Encore.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
                     className="bg-white rounded-lg p-3 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900 mb-1 text-sm">How long does setup take?</h3>
              <p className="text-slate-600 text-xs">
                30 minutes. That&apos;s it. We do everything. You start seeing results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
                     className="bg-white rounded-lg p-3 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900 mb-1 text-sm">What if I don&apos;t have a POS system?</h3>
              <p className="text-slate-600 text-xs">
                Perfect. Encore works with one QR code. No expensive equipment. No complex systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
                     className="bg-white rounded-lg p-3 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900 mb-1 text-sm">Can I customize the reminder messages?</h3>
              <p className="text-slate-600 text-xs">
                Yes. We create messages that sound like you. Your voice. Your brand. Your customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
                     className="bg-white rounded-lg p-3 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900 mb-1 text-sm">What happens after the trial?</h3>
              <p className="text-slate-600 text-xs">
                You keep Encore. You keep your customers. We keep it simple. One monthly fee. That&apos;s it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
