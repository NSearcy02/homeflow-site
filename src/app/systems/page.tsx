"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SystemsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/encore");
  }, [router]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900 mx-auto mb-4"></div>
        <p className="text-slate-600">Redirecting to Encore...</p>
      </div>
    </div>
  );
}