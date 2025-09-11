"use client";

import { motion } from "framer-motion";

type FeatureBlockProps = {
  eyebrow: string;
  headline: string;
  subline: string;
  chips?: string[];
  icon?: React.ReactNode;
};

export default function FeatureBlock({
  eyebrow,
  headline,
  subline,
  chips,
  icon,
}: FeatureBlockProps) {
  return (
    <motion.div
      className="rounded-xl sm:rounded-2xl border border-slate-200/40 bg-background shadow-lg hover:shadow-xl transform-gpu hover:-translate-y-2 transition-all duration-300 p-4 sm:p-6 md:p-7"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {icon && (
        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-white/80 ring-1 ring-slate-200/40 flex items-center justify-center mb-3 sm:mb-4 shadow-md">
          {icon}
        </div>
      )}
      
      <div className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-slate-600 uppercase">
        {eyebrow}
      </div>
      
      <h3 className="text-lg sm:text-[22px] md:text-[24px] font-semibold leading-[1.2] text-slate-900 mt-1">
        {headline}
      </h3>
      
      <p className="mt-2 sm:mt-3 text-sm sm:text-[15px] leading-[1.6] text-slate-700">
        {subline}
      </p>
      
      {chips && chips.length > 0 && (
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {chips.map((chip, index) => (
            <span
              key={index}
              className="rounded-full border border-slate-200 bg-white/80 text-slate-700 text-[10px] sm:text-[12px] px-2 sm:px-3 py-1 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {chip}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
