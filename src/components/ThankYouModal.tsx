"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiCheckCircle } from "react-icons/hi";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  headline?: string;
  subtext?: string;
  autoCloseDelay?: number;
}

export default function ThankYouModal({
  isOpen,
  onClose,
  headline = "Thank You!",
  subtext = "We'll be in touch soon.",
  autoCloseDelay = 3000,
}: ThankYouModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Auto-close after specified delay
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for fade out animation
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, autoCloseDelay]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Dark translucent backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 0.5 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              scale: isVisible ? 1 : 0.9, 
              y: isVisible ? 0 : 20 
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 text-center"
          >
            {/* Green checkmark icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
              className="mb-6"
            >
              <HiCheckCircle className="mx-auto text-green-500 size-16" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-2xl font-bold text-slate-900 mb-3"
            >
              {headline}
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="text-slate-600 leading-relaxed"
            >
              {subtext}
            </motion.p>

            {/* Progress bar for auto-close */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isVisible ? 1 : 0 }}
              transition={{ duration: autoCloseDelay / 1000, ease: "linear" }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-b-2xl origin-left"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
