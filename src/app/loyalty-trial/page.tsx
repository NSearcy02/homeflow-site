"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoyaltyTrialPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Hero Section */}
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

          {/* Eyebrow */}
          <div className="text-xs font-medium tracking-wide uppercase text-slate-500">
            Free 60-Day Trial
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
            Turn One-Timers Into Lifers{" "}
            <span className="text-slate-600">(On the House)</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto"
          >
            Kick off a 60-day Loyalty Club — free setup, fully managed. Turn your best customers into VIPs who come back again and again.
          </motion.p>

          {/* Witty Trust Message */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-sm text-slate-500 italic"
          >
            No spam. No pressure. Just more people coming back for more.
          </motion.p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg border border-slate-200/40 p-6 sm:p-8">
            <iframe
              src="https://your-ghl-form-link-here.com"
              frameBorder="0"
              className="w-full h-[600px] rounded-lg shadow-sm"
              title="Loyalty Trial Signup Form"
            />
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="text-center space-y-4"
        >
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
          
          <p className="text-sm text-slate-500">
            Questions? We&apos;re here to help make your customers fall in love with coming back.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
