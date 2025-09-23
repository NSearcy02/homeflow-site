"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CustomerJourneyStoryboard from "@/components/CustomerJourneyStoryboard";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-50px" });

  return (
    <main className="min-h-screen relative overflow-hidden bg-sky-50 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeroInView ? { 
              opacity: [0, 0.1, 0.05, 0.1], 
              scale: [0.8, 1.2, 0.9, 1.1],
              x: [0, 50, -30, 20],
              y: [0, -30, 20, -10]
            } : {}}
            transition={{ 
              duration: 8, 
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeroInView ? { 
              opacity: [0, 0.08, 0.04, 0.08], 
              scale: [0.8, 1.3, 0.8, 1.2],
              x: [0, -40, 25, -15],
              y: [0, 25, -15, 20]
            } : {}}
            transition={{ 
              duration: 10, 
              delay: 0.8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-sky-200/30 to-cyan-200/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <div className="text-center space-y-6">
            {/* Encore Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block"
            >
              <span className="text-2xl md:text-3xl font-bold text-slate-600 tracking-wide">
                Encore
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900"
            >
              Your Customers. Returning. Automatically.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/encore"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  See How Encore Works
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  Start Free Trial
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Encore Loop: Customers Never Slip Away</h2>
            
            {/* Circular Loop Visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto mb-8"
            >
              <div className="relative w-80 h-80 mx-auto mb-6">
                {/* Circular Container */}
                <div className="absolute inset-0 rounded-full border-2 border-slate-200"></div>
                
                {/* Customer Visits - Top */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isBenefitsInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Customer Visits</span>
                </motion.div>

                {/* Stops Coming - Right */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isBenefitsInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Stops Coming</span>
                </motion.div>

                {/* Encore Reminds - Bottom */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isBenefitsInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Encore Reminds</span>
                </motion.div>

                {/* Customer Returns - Left */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isBenefitsInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute -left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Customer Returns</span>
                </motion.div>

                {/* Curved Arrows */}
                <motion.svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 320 320"
                  initial={{ opacity: 0 }}
                  animate={isBenefitsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  {/* Arrow 1: Customer Visits → Stops Coming */}
                  <motion.path
                    d="M 160 20 Q 240 80 280 160"
                    stroke="rgb(148 163 184)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isBenefitsInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 1.6 }}
                  />
                  <motion.polygon
                    points="275,155 285,160 275,165"
                    fill="rgb(148 163 184)"
                    initial={{ opacity: 0 }}
                    animate={isBenefitsInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 2.6 }}
                  />

                  {/* Arrow 2: Stops Coming → Encore Reminds */}
                  <motion.path
                    d="M 300 160 Q 240 240 160 280"
                    stroke="rgb(148 163 184)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isBenefitsInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 1.8 }}
                  />
                  <motion.polygon
                    points="155,275 160,285 165,275"
                    fill="rgb(148 163 184)"
                    initial={{ opacity: 0 }}
                    animate={isBenefitsInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 2.8 }}
                  />

                  {/* Arrow 3: Encore Reminds → Customer Returns */}
                  <motion.path
                    d="M 160 300 Q 80 240 20 160"
                    stroke="rgb(148 163 184)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isBenefitsInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 2.0 }}
                  />
                  <motion.polygon
                    points="25,165 15,160 25,155"
                    fill="rgb(148 163 184)"
                    initial={{ opacity: 0 }}
                    animate={isBenefitsInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 3.0 }}
                  />

                  {/* Arrow 4: Customer Returns → Customer Visits */}
                  <motion.path
                    d="M 20 160 Q 80 80 160 20"
                    stroke="rgb(148 163 184)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isBenefitsInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 2.2 }}
                  />
                  <motion.polygon
                    points="165,25 160,15 155,25"
                    fill="rgb(148 163 184)"
                    initial={{ opacity: 0 }}
                    animate={isBenefitsInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 3.2 }}
                  />
                </motion.svg>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={isBenefitsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 2.4 }}
                className="text-lg text-slate-600 max-w-2xl mx-auto text-center"
              >
                The cycle repeats continuously. Your customers never slip away.
              </motion.p>
            </motion.div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, type: "spring", stiffness: 300 } }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200/40 hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, backgroundColor: "rgb(241 245 249)", transition: { duration: 0.2 } }}
              >
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Never Lose a Customer Again</h3>
              <p className="text-slate-600">When customers stop coming, Encore knows. We reach out automatically. They come back. Your revenue stays protected.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, type: "spring", stiffness: 300 } }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200/40 hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, backgroundColor: "rgb(241 245 249)", transition: { duration: 0.2 } }}
              >
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Works While You Sleep</h3>
              <p className="text-slate-600">No manual work. No remembering. Encore tracks every visit and sends the right message at the right time. Every time.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.8, type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, type: "spring", stiffness: 300 } }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200/40 hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, backgroundColor: "rgb(241 245 249)", transition: { duration: 0.2 } }}
              >
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Setup in Minutes</h3>
              <p className="text-slate-600">One QR code. That&apos;s it. No expensive equipment. No complex systems. Your customers check in. Encore does the rest.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Journey Storyboard */}
      <CustomerJourneyStoryboard />

      {/* How Encore Works Timeline */}
      <section className="relative py-16 sm:py-20 bg-sky-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Encore Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three steps. Set it up. Watch it work. Never lose a customer again.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-300 -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
                className="text-center relative"
              >
                <motion.div
                  className="w-20 h-20 bg-white rounded-full shadow-lg border-4 border-slate-200 flex items-center justify-center mx-auto mb-6 relative z-10"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Set Up Once</h3>
                <p className="text-slate-600">One QR code. One setup. Done forever. Your customers check in. We handle the rest.</p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.6, type: "spring" }}
                className="text-center relative"
              >
                <motion.div
                  className="w-20 h-20 bg-white rounded-full shadow-lg border-4 border-slate-200 flex items-center justify-center mx-auto mb-6 relative z-10"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Runs Automatically</h3>
                <p className="text-slate-600">We track every visit. We know when they&apos;re gone too long. We bring them back. You do nothing.</p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.8, type: "spring" }}
                className="text-center relative"
              >
                <motion.div
                  className="w-20 h-20 bg-white rounded-full shadow-lg border-4 border-slate-200 flex items-center justify-center mx-auto mb-6 relative z-10"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">See It All in Real Time</h3>
                <p className="text-slate-600">Watch your customers return. See your revenue grow. Know exactly how Encore is working for you.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900">Ready to Never Lose a Customer Again?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Start your free 60-day trial. See customers return. Keep the ones you love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-8 py-4 text-lg font-medium hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  Start Your Free 60-Day Trial
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/encore"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-4 text-lg font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  Learn More
                </Link>
              </motion.div>
    </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/contact"
            className="block w-full bg-slate-900 text-white text-center py-4 px-6 rounded-lg font-medium shadow-lg hover:bg-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            Start Free Trial
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
