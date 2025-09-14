import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import AnimatedLayout from "@/components/animated-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HomeFlow Systems - Coffee Shop Automation",
  description: "We help coffee shops, cafes, and juice bars modernize with websites, loyalty programs, and customer automations.",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-homeflow.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/logo-homeflow.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar />
          <main className="flex-1">
            <AnimatedLayout>
              {children}
            </AnimatedLayout>
          </main>
        </div>
      </body>
    </html>
  );
}
