import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Automations that fill your shop with regulars
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We help coffee shops, cafes, and juice bars modernize with websites, loyalty programs, and customer automations.
          </p>
          <div className="flex justify-center gap-4 pt-6">
            <a 
              href="#" 
              className="px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition"
            >
              Get Started Free
            </a>
            <a 
              href="/how-it-works" 
              className="px-6 py-3 border border-black rounded-xl font-medium hover:bg-gray-100 transition"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} HomeFlow Systems. All rights reserved.
      </footer>
    </>
  );
}
