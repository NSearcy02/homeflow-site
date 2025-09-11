import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-lg bg-background border-b border-slate-200/30">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo-homeflow.png"
          alt="HomeFlow logo"
          width={48}
          height={48}
          priority
        />
        <span className="text-xl font-semibold text-slate-900">HomeFlow Systems</span>
      </Link>
      <nav className="hidden md:flex gap-6 text-slate-700">
        <Link href="/" className="hover:text-slate-900 transition-colors font-medium">
          Home
        </Link>
        <Link href="/proof" className="hover:text-slate-900 transition-colors font-medium">
          Proof
        </Link>
        <Link href="/systems" className="hover:text-slate-900 transition-colors font-medium">
          Systems
        </Link>
        <Link href="/how-it-works" className="hover:text-slate-900 transition-colors font-medium">
          How It Works
        </Link>
      </nav>
      <Button className="ml-6">Book a Demo</Button>
    </header>
  );
}
