"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 shadow-lg bg-background border-b border-slate-200/30">
      <Link href="/" className="flex items-center space-x-2">
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
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-slate-700">
        <Link href="/" className="hover:text-slate-900 transition-colors font-medium">
          Home
        </Link>
        <Link href="/encore" className="hover:text-slate-900 transition-colors font-medium">
          Encore
        </Link>
        <Link href="/contact" className="hover:text-slate-900 transition-colors font-medium">
          Contact
        </Link>
      </nav>
      
      {/* Desktop CTA Button */}
      <Button className="hidden md:block ml-6" asChild>
        <Link href="/contact">Get Started</Link>
      </Button>
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-slate-200/30 shadow-lg md:hidden z-50">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/encore" 
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Encore
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-3 border-t border-slate-200/30">
              <Button className="w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
