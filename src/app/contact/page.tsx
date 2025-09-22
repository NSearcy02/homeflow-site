"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  return (
    <main className="h-screen w-screen relative overflow-hidden bg-white">
      {/* Full Page Form */}
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/VZeLp5jYY9CI2ZRNdxkx"
        style={{width:"100%",height:"100%",border:"none"}}
        id="inline-VZeLp5jYY9CI2ZRNdxkx"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="HomeFlow Encore Contact Form"
        data-height="100vh"
        data-layout-iframe-id="inline-VZeLp5jYY9CI2ZRNdxkx"
        data-form-id="VZeLp5jYY9CI2ZRNdxkx"
        title="HomeFlow Encore Contact Form"
        className="w-full h-full"
      />
    </main>
  );
}
