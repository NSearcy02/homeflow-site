"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ConfettiBurst from "@/components/ConfettiBurst";

export default function ThankYouClient() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-sky-50 pt-20">
      <ConfettiBurst />
      
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
              Welcome to Encore. More repeat customers start here.
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto"
            >
              Thanks for submitting your details. We&apos;ll reach out shortly to schedule a call.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/encore"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-8 py-4 text-base font-medium hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  Learn More About Encore
                </Link>
              </motion.div>
            </motion.div>

            {/* What Happens Next Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/40 max-w-3xl mx-auto mt-12"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-8 text-center">What happens next</h2>
              
              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                
                <div className="space-y-8">
                  {/* Step 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="flex items-start gap-4 relative"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.4, type: "spring" }}
                      className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                    >
                      <span className="text-white text-sm font-bold">1</span>
                    </motion.div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-semibold text-slate-900 mb-1">We review your info</h3>
                      <p className="text-slate-600 text-sm">We confirm your settings and reminder schedule.</p>
                    </div>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="flex items-start gap-4 relative"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.8, type: "spring" }}
                      className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                    >
                      <span className="text-white text-sm font-bold">2</span>
                    </motion.div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-semibold text-slate-900 mb-1">24-hour setup</h3>
                      <p className="text-slate-600 text-sm">We activate your check-in and tracking system.</p>
                    </div>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.0 }}
                    className="flex items-start gap-4 relative"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 2.2, type: "spring" }}
                      className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                    >
                      <span className="text-white text-sm font-bold">3</span>
                    </motion.div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-semibold text-slate-900 mb-1">You see returning customers</h3>
                      <p className="text-slate-600 text-sm">You get a dashboard you can check any time.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Micro Proof Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-8"
            >
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Works with or without a POS</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Fast setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Real-time metrics</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
