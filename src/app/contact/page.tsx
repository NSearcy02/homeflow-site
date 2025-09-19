"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <div className="text-center space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900"
            >
              Let&apos;s Get You Started
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto"
            >
              Book a call and see how Encore can work for your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200/40 p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Start Your Free Trial</h2>
              <p className="text-slate-600">
                Fill out the form below and we&apos;ll get back to you within 24 hours to set up your Encore system.
              </p>
            </div>

            {/* GHL Form Embed */}
            <div className="mt-8">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/VZeLp5jYY9CI2ZRNdxkx"
                style={{width:"100%",height:"100%",border:"none",borderRadius:"8px"}}
                id="inline-VZeLp5jYY9CI2ZRNdxkx"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="HomeFlow Encore Contact Form"
                data-height="600"
                data-layout-iframe-id="inline-VZeLp5jYY9CI2ZRNdxkx"
                data-form-id="VZeLp5jYY9CI2ZRNdxkx"
                title="HomeFlow Encore Contact Form"
                className="w-full h-[600px] rounded-lg"
              />
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 pt-8 border-t border-slate-200"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">Free 60-Day Trial</h3>
                  <p className="text-sm text-slate-600">No risk, no commitment</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">24-Hour Response</h3>
                  <p className="text-sm text-slate-600">Quick setup guaranteed</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">Fully Managed</h3>
                  <p className="text-sm text-slate-600">We handle everything</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about getting started with Encore.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900 mb-2">How long does setup take?</h3>
              <p className="text-slate-600 text-sm">
                Most businesses are up and running within 30 minutes. We handle all the technical setup for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900 mb-2">What if I don&apos;t have a POS system?</h3>
              <p className="text-slate-600 text-sm">
                No problem! Encore works with a simple QR code system. No expensive equipment or integrations needed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900 mb-2">Can I customize the reminder messages?</h3>
              <p className="text-slate-600 text-sm">
                Absolutely! We&apos;ll work with you to create personalized messages that match your brand voice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900 mb-2">What happens after the trial?</h3>
              <p className="text-slate-600 text-sm">
                If you love Encore (and we&apos;re confident you will), we&apos;ll discuss a simple monthly plan to keep it running.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GHL Form Script */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
