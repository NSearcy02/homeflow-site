"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
          : 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-slate-200/30'
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-lg p-1">
          <Image
            src="/logo-homeflow.png"
            alt="HomeFlow logo"
            width={40}
            height={40}
            className="sm:w-12 sm:h-12 mix-blend-multiply"
            priority
          />
          <span className="text-lg sm:text-xl font-semibold text-slate-900">HomeFlow Systems</span>
        </Link>
      </motion.div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-slate-700" role="navigation" aria-label="Main navigation">
        <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
          <Link 
            href="/" 
            className="relative hover:text-slate-900 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-lg px-2 py-1"
          >
            Home
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
          <Link 
            href="/encore" 
            className="relative hover:text-slate-900 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-lg px-2 py-1"
          >
            Encore
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
          <Link 
            href="/contact" 
            className="relative hover:text-slate-900 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-lg px-2 py-1"
          >
            Contact
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </motion.div>
      </nav>
      
      {/* Desktop CTA Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block ml-6"
      >
        <Button asChild>
          <Link href="/contact">Get Started</Link>
        </Button>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </motion.svg>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200/30 shadow-lg md:hidden z-50"
          >
            <nav className="flex flex-col px-4 py-4 space-y-3" role="navigation" aria-label="Mobile navigation">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/"
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-lg px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/encore"
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-lg px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Encore
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded-lg px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
              <motion.div 
                className="pt-3 border-t border-slate-200/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
