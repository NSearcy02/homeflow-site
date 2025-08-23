"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi2";
import { useRef } from "react";

export default function Home() {
  const featureRef = useRef(null);
  const isInView = useInView(featureRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-gradient-to-b from-white to-blue-50 px-6 sm:px-12 md:px-20 py-16 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold leading-tight text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Automations that bring customers back again—and again.
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We help coffee shops, cafes, and juice bars modernize with websites, loyalty programs, and customer automations.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href="#" 
            className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Get Started Free
          </a>
          <a 
            href="/how-it-works" 
            className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors duration-200"
          >
            See How It Works
          </a>
        </motion.div>
      </motion.section>

      {/* Feature List */}
      <motion.section 
        ref={featureRef}
        className="space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          What we provide
        </motion.h2>
        <motion.ul 
          className="space-y-3 text-gray-700 text-left max-w-2xl mx-auto"
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
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-8 text-center text-sm text-gray-500 border-t border-gray-200 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        © {new Date().getFullYear()} HomeFlow Systems. All rights reserved.
      </motion.footer>
    </main>
  );
}
