"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface StoryboardPanel {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
}

interface CustomerJourneyStoryboardProps {
  className?: string;
}

export default function CustomerJourneyStoryboard({ className = "" }: CustomerJourneyStoryboardProps) {
  const [currentPanel, setCurrentPanel] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const panels: StoryboardPanel[] = [
    {
      id: 1,
      title: "Quiet churn is expensive",
      description: "Great customers slip away—not because they're unhappy, but because life gets busy.",
      icon: "😔",
      color: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      bgColor: "bg-red-50"
    },
    {
      id: 2,
      title: "Encore notices the gap",
      description: "Encore sends a friendly nudge that sounds like you. Timed perfectly. Personal. Never pushy.",
      icon: "📱",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      title: "They come back",
      description: "They buy again. It feels like loyalty—because it is.",
      icon: "😊",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      bgColor: "bg-green-50"
    },
    {
      id: 4,
      title: "Scale across your base",
      description: "More repeat visits. Predictable revenue. Less stress—automatically.",
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

  const goToPanel = (index: number) => {
    setCurrentPanel(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevPanel();
      } else if (e.key === 'ArrowRight') {
        nextPanel();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }
  }, [prevPanel, nextPanel]);

  // Mouse wheel horizontal scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current && containerRef.current.contains(e.target as Node)) {
        e.preventDefault();
        if (e.deltaY > 0) {
          nextPanel();
        } else {
          prevPanel();
        }
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [nextPanel, prevPanel]);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextPanel();
    } else if (isRightSwipe) {
      prevPanel();
    }
  };

  return (
    <section className={`py-16 sm:py-20 bg-white relative overflow-hidden ${className}`}>
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
            <motion.button
              onClick={prevPanel}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              aria-label="Previous panel"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={nextPanel}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              aria-label="Next panel"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

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
                      role="img"
                      aria-roledescription="slide"
                      aria-label={`Panel ${panel.id} of ${panels.length}: ${panel.title}`}
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
            <div className="flex justify-center mt-8 space-x-2" role="tablist" aria-label="Storyboard navigation">
              {panels.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToPanel(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 ${
                    index === currentPanel ? 'bg-slate-900' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to panel ${index + 1}`}
                  role="tab"
                  aria-selected={index === currentPanel}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            {/* Screen Reader Status */}
            <div className="sr-only" aria-live="polite" aria-atomic="true">
              Panel {currentPanel + 1} of {panels.length}: {panels[currentPanel].title}
            </div>
          </div>
        </div>

        {/* Mobile Storyboard */}
        <div 
          className="md:hidden" 
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="space-y-6">
            {panels.map((panel, index) => (
              <motion.div
                key={panel.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`bg-gradient-to-br ${panel.color} rounded-2xl p-6 border-2 ${panel.borderColor} shadow-lg`}
                role="img"
                aria-roledescription="slide"
                aria-label={`Panel ${panel.id} of ${panels.length}: ${panel.title}`}
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
