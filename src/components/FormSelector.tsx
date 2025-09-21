"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MultiStepForm from "./MultiStepForm";

export default function FormSelector() {
  const [formType, setFormType] = useState<'multistep' | 'ghl'>('multistep');

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Form Type Selector */}
      <div className="mb-8">
        <div className="flex bg-slate-100 rounded-lg p-1">
          <motion.button
            onClick={() => setFormType('multistep')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              formType === 'multistep'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Multi-Step Form
          </motion.button>
          <motion.button
            onClick={() => setFormType('ghl')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              formType === 'ghl'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Original GHL Form
          </motion.button>
        </div>
      </div>

      {/* Form Content */}
      <motion.div
        key={formType}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {formType === 'multistep' ? (
          <MultiStepForm />
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/40">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Start Your Free Trial</h3>
              <p className="text-slate-600">Fill out the form below to get started with Encore.</p>
            </div>
            
            {/* Original GHL Form */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/VZeLp5jYY9CI2ZRNdxkx"
              style={{width:"100%",height:"100%",border:"none",borderRadius:"8px"}}
              id="inline-VZeLp5jYY9CI2ZRNdxkx"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="HomeFlow Encore Contact Form"
              data-height="600"
              data-layout-iframe-id="inline-VZeLp5jYY9CI2ZRNdxkx"
              data-form-id="VZeLp5jYY9CI2ZRNdxkx"
              title="HomeFlow Encore Contact Form"
              className="w-full h-[600px] rounded-lg"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}
