"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Success Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center space-y-6 mb-12"
        >
          {/* Logo */}
          <div className="mx-auto mb-6 inline-flex items-center justify-center">
            <Image
              src="/logo-homeflow.png"
              alt="HomeFlow logo"
              width={48}
              height={48}
              className="mix-blend-multiply"
              priority
            />
          </div>

          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
            You&apos;re All Set! 🎉
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto"
          >
            Your 60-day Loyalty Club trial is officially underway. We&apos;ll be in touch within 24 hours to get everything set up and running.
          </motion.p>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-lg border border-slate-200/40 p-6 sm:p-8 text-left"
          >
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              What happens next?
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-slate-600">1</span>
                </div>
                <p className="text-slate-600">
                  <strong>Within 24 hours:</strong> We&apos;ll reach out to schedule your setup call and learn about your business.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-slate-600">2</span>
                </div>
                <p className="text-slate-600">
                  <strong>Week 1:</strong> We&apos;ll build your custom loyalty program and integrate it with your existing systems.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-slate-600">3</span>
                </div>
                <p className="text-slate-600">
                  <strong>Week 2:</strong> Launch your loyalty program and start turning one-timers into lifers.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl font-semibold text-slate-900">
            While you wait...
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Check out how we&apos;ve helped other coffee shops, cafes, and juice bars turn their customers into regulars.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/proof"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40 transition-all duration-200"
            >
              See Success Stories
            </Link>
            <Link
              href="/systems"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition-all duration-200"
            >
              Explore Our Systems
            </Link>
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap gap-2 justify-center mb-4">
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
          
          <p className="text-sm text-slate-500">
            Questions? We&apos;re here to help make your customers fall in love with coming back.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
