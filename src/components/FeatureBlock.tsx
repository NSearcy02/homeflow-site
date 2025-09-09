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
      className="rounded-2xl border border-stone-200/50 bg-gradient-to-tr from-stone-50 to-stone-100 shadow-sm hover:shadow-lg transform-gpu hover:-translate-y-1 transition p-6 md:p-7"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {icon && (
        <div className="h-10 w-10 rounded-xl bg-slate-100 ring-1 ring-black/5 flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      
      <div className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase">
        {eyebrow}
      </div>
      
      <h3 className="text-[22px] md:text-[24px] font-semibold leading-[1.2] text-slate-900 mt-1">
        {headline}
      </h3>
      
      <p className="mt-3 text-[15px] leading-[1.6] text-slate-600">
        {subline}
      </p>
      
      {chips && chips.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((chip, index) => (
            <span
              key={index}
              className="rounded-full border border-slate-200 bg-white text-slate-700 text-[12px] px-3 py-1"
            >
              {chip}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
