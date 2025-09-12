import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900">
            All your customer-winning systems under one roof.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto">
            We give local businesses the tools to run loyalty programs, messaging, websites, and analytics — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#demo"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition-all duration-200"
            >
              Book a Demo
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
