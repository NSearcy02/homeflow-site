"use client";

import { motion } from "framer-motion";

type FeatureBlockProps = {
  icon?: React.ReactNode;
  eyebrow: string;
  headline: string;
  pain: string;
  solution: string;
  transformation: string;
  bullets?: string[];
};

export default function FeatureBlock({
  icon,
  eyebrow,
  headline,
  pain,
  solution,
  transformation,
  bullets,
}: FeatureBlockProps) {
  return (
    <motion.div
      className="group relative rounded-2xl border border-black/5 bg-gradient-to-tr from-white to-slate-50 shadow-sm hover:shadow-xl transition-all duration-300 p-6 md:p-7 transform-gpu group-hover:translate-y-[-2px]"
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
      
      <p className="text-[15px] leading-[1.6] text-slate-600 mt-3">
        {pain} {solution}
      </p>
      
      <div className="border-t border-slate-100 mt-4 pt-4">
        <div className="space-y-2">
          <div className="text-[14px] leading-[1.6] text-slate-700">
            <span className="inline-flex items-center rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-1 mr-2">
              Pain
            </span>
            {pain}
          </div>
          
          <div className="text-[14px] leading-[1.6] text-slate-700">
            <span className="inline-flex items-center rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-1 mr-2">
              Solution
            </span>
            {solution}
          </div>
          
          <div className="text-[14px] leading-[1.6] text-slate-700">
            <span className="inline-flex items-center rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-1 mr-2">
              Transformation
            </span>
            {transformation}
          </div>
        </div>
      </div>
      
      {bullets && bullets.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {bullets.map((bullet, index) => (
            <span
              key={index}
              className="rounded-full border border-slate-200 bg-white text-slate-700 text-[12px] px-3 py-1"
            >
              {bullet}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
