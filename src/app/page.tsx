import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
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
    </>
  );
}
