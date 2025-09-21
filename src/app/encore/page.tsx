"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Customer Journey Storyboard Component
function CustomerJourneyStoryboard() {
  const [currentPanel, setCurrentPanel] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const panels = [
    {
      id: 1,
      title: "Customer Forgets to Return",
      description: "A loyal customer visits your business but then forgets to come back. Days turn into weeks, and they slip away silently.",
      icon: "😔",
      color: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      bgColor: "bg-red-50"
    },
    {
      id: 2,
      title: "Encore Sends a Reminder",
      description: "Encore detects the absence and automatically sends a friendly, personalized reminder to bring them back.",
      icon: "📱",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      title: "Customer Returns Happily",
      description: "The customer receives the reminder, remembers your business, and returns to make another purchase.",
      icon: "😊",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      bgColor: "bg-green-50"
    },
    {
      id: 4,
      title: "Revenue Grows Steadily",
      description: "With Encore working continuously, your customer retention improves and revenue grows month after month.",
      icon: "📈",
      color: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-800",
      bgColor: "bg-emerald-50"
    }
  ];

  const nextPanel = () => {
    setCurrentPanel((prev) => (prev + 1) % panels.length);
  };

  const prevPanel = () => {
    setCurrentPanel((prev) => (prev - 1 + panels.length) % panels.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Customer Journey Storyboard</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how Encore transforms the customer experience from forgotten to flourishing.
          </p>
        </motion.div>

        {/* Desktop Storyboard */}
        <div className="hidden md:block" ref={containerRef}>
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevPanel}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all duration-200"
              aria-label="Previous panel"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextPanel}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all duration-200"
              aria-label="Next panel"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Panel Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentPanel * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {panels.map((panel, index) => (
                  <div key={panel.id} className="w-full flex-shrink-0 px-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className={`relative bg-gradient-to-br ${panel.color} rounded-3xl p-8 border-2 ${panel.borderColor} shadow-xl`}
                    >
                      {/* Panel Number */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-slate-200 flex items-center justify-center">
                        <span className="text-lg font-bold text-slate-700">{panel.id}</span>
                      </div>

                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.1, type: "spring" }}
                        className="text-6xl mb-6 text-center"
                      >
                        {panel.icon}
                      </motion.div>

                      {/* Content */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        className={`text-2xl font-bold ${panel.textColor} mb-4 text-center`}
                      >
                        {panel.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                        className={`text-lg ${panel.textColor} text-center leading-relaxed`}
                      >
                        {panel.description}
                      </motion.p>

                      {/* Special Effect for Final Panel */}
                      {panel.id === 4 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 1, delay: 1.5 }}
                          className="absolute inset-0 pointer-events-none"
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-300 rounded-full blur-xl"
                          />
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Panel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {panels.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPanel(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentPanel ? 'bg-slate-900' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to panel ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Storyboard */}
        <div className="md:hidden" ref={containerRef}>
          <div className="space-y-6">
            {panels.map((panel, index) => (
              <motion.div
                key={panel.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`bg-gradient-to-br ${panel.color} rounded-2xl p-6 border-2 ${panel.borderColor} shadow-lg`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{panel.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${panel.textColor} mb-2`}>
                      {panel.title}
                    </h3>
                    <p className={`${panel.textColor} leading-relaxed`}>
                      {panel.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EncorePage() {
  return (
    <main className="bg-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.08, 0.04, 0.08], 
              scale: [0.8, 1.1, 0.9, 1.0],
              x: [0, 20, -15, 0],
              y: [0, -15, 10, 0]
            }}
            transition={{ 
              duration: 8, 
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-slate-200/30 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.06, 0.03, 0.06], 
              scale: [0.8, 1.2, 0.8, 1.1],
              x: [0, -25, 15, 0],
              y: [0, 20, -8, 0]
            }}
            transition={{ 
              duration: 10, 
              delay: 0.8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-slate-300/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <div className="text-center space-y-8">
            {/* Encore Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="inline-block"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1
                }}
                transition={{ 
                  delay: 0.6, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                className="relative"
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-wider">
                  {["E", "N", "C", "O", "R", "E"].map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ 
                        opacity: 0,
                        scale: 0.5,
                        y: 20
                      }}
                      animate={{ 
                        opacity: 1,
                        scale: 1,
                        y: 0
                      }}
                      transition={{ 
                        delay: 0.8 + (index * 0.1),
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className="inline-block"
                    >
                      <motion.span
                        animate={{
                          textShadow: [
                            "0 0 0px rgba(0,0,0,0)",
                            "0 0 15px rgba(0,0,0,0.2)",
                            "0 0 0px rgba(0,0,0,0)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          delay: 1.4 + (index * 0.1),
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: 3
                        }}
                      >
                        {letter}
                      </motion.span>
                    </motion.span>
                  ))}
                </h2>
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0
              }}
              transition={{ 
                duration: 0.8, 
                delay: 1.2
              }}
              className="text-xl md:text-2xl font-medium leading-relaxed text-slate-600 max-w-3xl mx-auto"
            >
              Encore is the second act that keeps customers returning
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto"
            >
              Set it up once. Watch customers return. Never lose revenue to forgotten customers again.
            </motion.p>

          </div>
        </div>
      </section>

            {/* 3-Step Process */}
            <section className="py-16 sm:py-20 bg-sky-100 relative overflow-hidden">
              <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
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
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  {/* Step 1: Set Up Once */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, type: "spring", stiffness: 300 }
                    }}
                     className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200/40 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative mb-8">
                      <motion.div
                        className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.6,
                          type: "spring",
                          stiffness: 200,
                          damping: 20
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgb(241 245 249)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.svg
                          className="w-12 h-12 text-slate-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.8 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </motion.svg>
                      </motion.div>
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.0,
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                      >
                        1
                      </motion.div>
                    </div>
                    <motion.h3
                      className="text-xl font-semibold text-slate-900 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      Set Up Once
                    </motion.h3>
                    <motion.p
                      className="text-slate-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                    >
                      One QR code. One setup. Done forever. Your customers check in. We handle the rest.
                    </motion.p>
                  </motion.div>

                  {/* Step 2: Runs Automatically */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.6,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, type: "spring", stiffness: 300 }
                    }}
                     className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200/40 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative mb-8">
                      <motion.div
                        className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.8,
                          type: "spring",
                          stiffness: 200,
                          damping: 20
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgb(241 245 249)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.svg
                          className="w-12 h-12 text-slate-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 1.0 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </motion.svg>
                      </motion.div>
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.2,
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                      >
                        2
                      </motion.div>
                    </div>
                    <motion.h3
                      className="text-xl font-semibold text-slate-900 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                    >
                      Runs Automatically
                    </motion.h3>
                    <motion.p
                      className="text-slate-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                    >
                      We track every visit. We know when they&apos;re gone too long. We bring them back. You do nothing.
                    </motion.p>
                  </motion.div>

                  {/* Step 3: See It All in Real Time */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.8,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, type: "spring", stiffness: 300 }
                    }}
                     className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200/40 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative mb-8">
                      <motion.div
                        className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 1.0,
                          type: "spring",
                          stiffness: 200,
                          damping: 20
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgb(241 245 249)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.svg
                          className="w-12 h-12 text-slate-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 1.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </motion.svg>
                      </motion.div>
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.4,
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                      >
                        3
                      </motion.div>
                    </div>
                    <motion.h3
                      className="text-xl font-semibold text-slate-900 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                    >
                      See It All in Real Time
                    </motion.h3>
                    <motion.p
                      className="text-slate-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8, duration: 0.5 }}
                    >
                      Watch your customers return. See your revenue grow. Know exactly how Encore is working for you.
                    </motion.p>
                  </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Journey Storyboard */}
      <CustomerJourneyStoryboard />

            {/* Benefits Section */}
            <section className="py-16 sm:py-20 relative overflow-hidden">
              <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Encore Advantage</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Why smart business owners choose Encore to protect their revenue.
                  </p>
                </motion.div>

                {/* Stats Row */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                     className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200/40 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">100%</div>
                    <div className="text-slate-600 text-sm">We handle everything</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                     className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200/40 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">24hrs</div>
                    <div className="text-slate-600 text-sm">From signup to working</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                     className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200/40 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">$0</div>
                    <div className="text-slate-600 text-sm">Extra equipment required</div>
                  </motion.div>
                </div>

                {/* Feature Highlights */}
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Set & Forget Automation</h3>
                        <p className="text-slate-600">Set it up once. Never think about it again. Encore works 24/7 to bring customers back.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Revenue Protection</h3>
                        <p className="text-slate-600">Stop losing customers to silence. Encore brings them back before they&apos;re gone forever.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Relationship Building</h3>
                        <p className="text-slate-600">Show customers you remember them. Show them you want them back. Build loyalty that lasts.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Zero Setup Hassle</h3>
                        <p className="text-slate-600">Works with any business. Have a POS? Great. Don&apos;t have one? Even better. Just results.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Lightning Fast Setup</h3>
                        <p className="text-slate-600">24 hours. That&apos;s it. We do everything. You start seeing customers return.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Real-Time Insights</h3>
                        <p className="text-slate-600">See customers returning. Watch revenue growing. Know Encore is working.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
             <section className="relative py-16 sm:py-20 bg-sky-100">
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
                        className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-8 py-4 text-lg font-medium hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        Start Your Free 60-Day Trial
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-4 text-lg font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>
    </main>
  );
}
