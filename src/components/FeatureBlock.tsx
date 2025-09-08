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
      className="p-6 md:p-7 rounded-2xl ring-1 ring-black/5 shadow-sm hover:shadow-md transition bg-gradient-to-tr from-gray-50 to-white"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {icon && <div className="mb-4">{icon}</div>}
      
      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
        {eyebrow}
      </div>
      
      <h3 className="text-xl md:text-2xl font-semibold leading-[1.2] text-gray-900 mb-6">
        {headline}
      </h3>
      
      <div className="space-y-4 mb-6">
        <div>
          <div className="text-sm font-medium text-red-600 mb-1">Pain</div>
          <p className="text-gray-600 text-sm">{pain}</p>
        </div>
        
        <div>
          <div className="text-sm font-medium text-blue-600 mb-1">Solution</div>
          <p className="text-gray-600 text-sm">{solution}</p>
        </div>
        
        <div>
          <div className="text-sm font-medium text-green-600 mb-1">Transformation</div>
          <p className="text-gray-600 text-sm">{transformation}</p>
        </div>
      </div>
      
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-green-500 text-xs mt-1">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
