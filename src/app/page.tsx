"use client";

import { motion, useInView } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi2";
import { useRef } from "react";
import Hero from "@/components/Hero";

export default function Home() {
  const featureRef = useRef(null);
  const isInView = useInView(featureRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Feature List */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div 
            ref={featureRef}
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h2
              className="text-3xl font-bold text-center text-slate-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              What we provide
            </motion.h2>
            <motion.ul
              className="space-y-3 text-slate-700 text-left max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                "SMS and email automation campaigns",
                "Customer loyalty and rewards programs",
                "Real-time analytics dashboards",
                "Mobile-responsive websites",
                "Online ordering and payment systems",
                "Social media integration and marketing"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + index * 0.1
                  }}
                >
                  <li className="flex items-center gap-3">
                    <HiCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                </motion.div>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="py-8 text-center text-sm text-slate-500 border-t border-slate-200 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        © {new Date().getFullYear()} HomeFlow Systems. All rights reserved.
      </motion.footer>
    </main>
  );
}
