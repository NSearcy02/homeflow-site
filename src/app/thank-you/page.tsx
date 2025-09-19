"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-sky-50">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <div className="text-center space-y-8">
            {/* Success Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
            >
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900"
            >
              You&apos;re In. We&apos;ll Set Up Encore.
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto"
            >
              We&apos;ll contact you within 24 hours. Your customers start returning. Your revenue stays protected.
            </motion.p>

            {/* What Happens Next */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/40 max-w-2xl mx-auto"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-6">What Happens Next</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-slate-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">We Contact You</h3>
                    <p className="text-slate-600 text-sm">Within 24 hours. We set up your free 60-day trial.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-slate-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Encore Goes Live</h3>
                    <p className="text-slate-600 text-sm">One QR code. Your customers start checking in.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-slate-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Customers Return</h3>
                    <p className="text-slate-600 text-sm">Encore tracks visits. Sends reminders. Brings them back.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <Link
                href="/encore"
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition-all duration-200"
              >
                Learn More About Encore
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200"
              >
                Back to Home
              </Link>
            </motion.div>

            {/* Trust Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-8"
            >
              <p className="text-sm text-slate-500">
                Questions? Email us at <a href="mailto:hello@homeflowsystems.com" className="text-slate-700 hover:text-slate-900 underline">hello@homeflowsystems.com</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
