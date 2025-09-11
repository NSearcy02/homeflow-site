"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-stone-50 ring-1 ring-slate-200/30 shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center md:text-left px-6 md:px-12 pt-12 md:pt-16 pb-12"
          >
            {/* Logo */}
            <div className="mx-auto md:mx-0 mb-5 inline-flex items-center justify-center">
              <Image
                src="/logo-homeflow.png"
                alt="HomeFlow logo"
                width={48}
                height={48}
                priority
              />
            </div>

            {/* Eyebrow */}
            <div className="text-[12px] font-semibold tracking-wide uppercase text-slate-600">
              Systems Under One Roof
            </div>

            {/* Headline */}
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              All your customer-winning systems under one roof.
            </h1>

            {/* Subline */}
            <p className="mt-5 max-w-2xl text-lg md:text-xl leading-[1.6] text-slate-700">
              We help coffee shops, cafes, and juice bars run loyalty, messaging, websites, and analytics in one place, so customers keep coming back on repeat.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/#demo"
                aria-label="Book a Demo"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Book a Demo
              </Link>
              <Link
                href="/how-it-works"
                aria-label="See How It Works"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 shadow-md hover:shadow-lg transition-all duration-200"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Missed call text back",
                "Loyalty + VIP",
                "Automated SMS + Email",
                "Real-time analytics",
                "Fast, branded websites",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200 bg-white/80 text-slate-700 text-[12px] px-3 py-1 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
