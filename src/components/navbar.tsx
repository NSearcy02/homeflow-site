import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo-homeflow.png"
          alt="HomeFlow logo"
          width={40}
          height={40}
          className="h-auto w-10"
          priority
        />
        <span className="text-xl font-semibold text-gray-900">HomeFlow Systems</span>
      </Link>
      <nav className="hidden md:flex gap-6 text-gray-700">
        <Link href="/" className="hover:text-gray-900 transition-colors">
          Home
        </Link>
        <Link href="/proof" className="hover:text-gray-900 transition-colors">
          Proof
        </Link>
        <Link href="/systems" className="hover:text-gray-900 transition-colors">
          Systems
        </Link>
        <Link href="/how-it-works" className="hover:text-gray-900 transition-colors">
          How It Works
        </Link>
      </nav>
      <Button className="ml-6">Book a Demo</Button>
    </header>
  );
}
