"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";

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
            <span className="text-slate-900">(On the House)</span>
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
          <div className="mt-10 rounded-xl shadow-md">
            <iframe
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
            />
          </div>
        </motion.div>
        
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
