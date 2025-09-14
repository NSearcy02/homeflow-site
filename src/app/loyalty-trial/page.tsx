import { Metadata } from "next";
import LoyaltyTrialClient from "./loyalty-trial-client";

export const metadata: Metadata = {
  title: 'Free Loyalty Club Trial for Local Shops',
  description: 'Turn one-timers into repeat VIPs with a 60-day loyalty club — fully managed.',
  openGraph: {
    title: 'Free Loyalty Club Trial for Local Shops',
    description: 'HomeFlow helps your shop turn new customers into regulars. Try the loyalty trial — on the house.',
    url: 'https://www.homeflowsystems.com/loyalty-trial',
    siteName: 'HomeFlow Systems',
    images: [
      {
        url: 'https://www.homeflowsystems.com/images/og-loyalty.png',
        width: 1200,
        height: 630,
        alt: 'HomeFlow Loyalty Trial',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Loyalty Club Trial for Local Shops',
    description: 'Try our 60-day fully managed loyalty club — on the house.',
    images: ['https://www.homeflowsystems.com/images/og-loyalty.png'],
  },
};

export default function LoyaltyTrialPage() {
  return <LoyaltyTrialClient />;
}