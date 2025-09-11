"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center md:text-left"
        >
            {/* Logo */}
            <div className="mx-auto md:mx-0 mb-4 sm:mb-5 inline-flex items-center justify-center">
              <Image
                src="/logo-homeflow.png"
                alt="HomeFlow logo"
                width={40}
                height={40}
                className="sm:w-12 sm:h-12 mix-blend-multiply"
                priority
              />
            </div>

            {/* Eyebrow */}
            <div className="text-xs font-medium tracking-wide uppercase text-slate-500 mb-3">
              Systems Under One Roof
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-6">
              All your customer-winning systems under one roof.
            </h1>

            {/* Subheadline with fade-in animation */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8 max-w-2xl"
            >
              We give local businesses the tools to run loyalty programs, messaging, websites, and analytics — all under one roof.
            </motion.p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/#demo"
                aria-label="Book a Demo"
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40 transition-all duration-200"
              >
                Book a Demo
              </Link>
              <Link
                href="/how-it-works"
                aria-label="See How It Works"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition-all duration-200"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust Chips */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {[
                "Missed call text back",
                "Loyalty + VIP",
                "Automated SMS + Email",
                "Real-time analytics",
                "Fast, branded websites",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-md bg-slate-100 text-slate-600 text-xs px-3 py-1.5 font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  );
}
