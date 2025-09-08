"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-20 md:pb-18">
        <div className="rounded-3xl bg-gradient-to-b from-slate-50 to-white ring-1 ring-black/5 p-8 md:p-12">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Logo */}
            <div className="mb-5 flex justify-center md:justify-start">
              <div className="h-14 w-14 rounded-2xl bg-white ring-1 ring-black/5 p-2">
                <Image
                  src="/brand/homeflow-mark.svg"
                  alt="HomeFlow logo"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Eyebrow */}
            <div className="text-[12px] font-semibold tracking-wide uppercase text-slate-500">
              Systems Under One Roof
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mt-2">
              All your customer-winning systems under one roof.
            </h1>

            {/* Subline */}
            <p className="mt-5 max-w-2xl text-lg md:text-xl leading-[1.6] text-slate-600">
              We help coffee shops, cafes, and juice bars run loyalty, messaging, websites, and analytics in one place—so customers keep coming back on repeat.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40"
              >
                Book a Demo
              </a>
              <a
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10"
              >
                See How It Works
              </a>
            </div>

            {/* Trust Chips */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="rounded-full border border-slate-200 bg-white text-slate-700 text-[12px] px-3 py-1">
                Missed call text back
              </span>
              <span className="rounded-full border border-slate-200 bg-white text-slate-700 text-[12px] px-3 py-1">
                Loyalty + VIP
              </span>
              <span className="rounded-full border border-slate-200 bg-white text-slate-700 text-[12px] px-3 py-1">
                Automated SMS + Email
              </span>
              <span className="rounded-full border border-slate-200 bg-white text-slate-700 text-[12px] px-3 py-1">
                Real-time analytics
              </span>
              <span className="rounded-full border border-slate-200 bg-white text-slate-700 text-[12px] px-3 py-1">
                Fast, branded websites
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
