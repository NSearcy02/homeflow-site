import ThankYouClient from "@/components/ThankYouClient";

export const metadata = {
  title: "Thank You | HomeFlow Systems",
  description: "Your Encore trial is in motion. We'll confirm your settings and share your real-time dashboard.",
  openGraph: {
    title: "Thank You | HomeFlow Systems",
    description: "Your Encore trial is in motion. We'll confirm your settings and share your real-time dashboard.",
    type: "website",
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
