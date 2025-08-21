import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 shadow-sm">
        <div className="text-2xl font-bold text-gray-900">HomeFlow Systems</div>
        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="/pricing" className="hover:text-gray-900">Pricing</a>
          <a href="/blog" className="hover:text-gray-900">Blog</a>
          <a href="/contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <Button className="ml-6">Book a Demo</Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
          Automations that fill your shop with regulars
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          We help coffee shops, cafes, and juice bars modernize with websites, loyalty programs, and customer automations.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg">Get Started Free</Button>
          <Button size="lg" variant="outline">See How It Works</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} HomeFlow Systems. All rights reserved.
      </footer>
    </main>
  );
}
