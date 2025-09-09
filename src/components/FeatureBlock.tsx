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
      className="rounded-2xl border border-amber-200/40 bg-gradient-to-tr from-amber-50 to-orange-50 shadow-lg hover:shadow-xl transform-gpu hover:-translate-y-2 transition-all duration-300 p-6 md:p-7"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {icon && (
        <div className="h-10 w-10 rounded-xl bg-white/80 ring-1 ring-amber-200/40 flex items-center justify-center mb-4 shadow-md">
          {icon}
        </div>
      )}
      
      <div className="text-[11px] font-semibold tracking-wide text-amber-600 uppercase">
        {eyebrow}
      </div>
      
      <h3 className="text-[22px] md:text-[24px] font-semibold leading-[1.2] text-amber-900 mt-1">
        {headline}
      </h3>
      
      <p className="mt-3 text-[15px] leading-[1.6] text-amber-800">
        {subline}
      </p>
      
      {chips && chips.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((chip, index) => (
            <span
              key={index}
              className="rounded-full border border-amber-200 bg-white/80 text-amber-700 text-[12px] px-3 py-1 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {chip}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
