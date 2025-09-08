import FeatureBlock from "@/components/FeatureBlock";

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Systems Under One Roof.
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything your shop needs to capture customers, bring them back, and see results in one place. One roof, one workflow, one clear view of growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <a
              href="#"
              className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Book a Demo
            </a>
            <a
              href="/how-it-works"
              className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors duration-200"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <FeatureBlock
            icon={<span aria-hidden="true">☎️</span>}
            eyebrow="Customer Rescue"
            headline="Even if you miss the call, you never miss the customer."
            pain="Phones ring during rushes and after hours. Calls go unanswered. Opportunities slip."
            solution="Automatic text replies go out under your shop's name. Every missed call becomes a conversation."
            transformation="Customers feel taken care of. You keep the sale alive and your pipeline full."
            bullets={[
              "Local number per location",
              "Custom reply windows and scripts",
              "Pipeline + task auto assignment"
            ]}
          />

          <FeatureBlock
            icon={<span aria-hidden="true">⭐</span>}
            eyebrow="Retention Engine"
            headline="Turn first-timers into regulars."
            pain="Great service is not enough. Competitors are close and habits are fragile."
            solution="Simple digital loyalty with points, VIP tiers, and instant rewards at checkout."
            transformation="Every visit earns value. Customers choose you again because it feels good to return."
            bullets={[
              "QR signups in seconds",
              "Birthday and anniversary perks",
              "VIP tiers customers love"
            ]}
          />

          <FeatureBlock
            icon={<span aria-hidden="true">🔁</span>}
            eyebrow="Always-On Marketing"
            headline="Stay top of mind without adding to your to-do list."
            pain="Owners do not have time to build and send promotions consistently."
            solution="Prebuilt SMS and email flows that trigger at the right moment: slow days, birthdays, lapsed customers, seasonal offers."
            transformation="Traffic lifts on autopilot. Messages feel personal and timely."
            bullets={[
              "Welcome series and win-backs",
              "Slow-day boosters",
              "Holiday and seasonal packs"
            ]}
          />

          <FeatureBlock
            icon={<span aria-hidden="true">💬</span>}
            eyebrow="Online Presence"
            headline="Look active, earn stars, and win the scroll."
            pain="Reviews and posting slip when the shop is busy, yet this is where decisions happen."
            solution="Auto review requests after visits, simple replies, and a steady calendar of posts."
            transformation="You appear responsive and reliable. New customers choose you with confidence."
            bullets={[
              "Review invites by segment",
              "Smart reply templates",
              "Content calendar support"
            ]}
          />

          <FeatureBlock
            icon={<span aria-hidden="true">📊</span>}
            eyebrow="Clarity"
            headline="See what is working in real time."
            pain="Money goes into tools and promos with little proof of impact."
            solution="A single dashboard that tracks signups, return rate, redemptions, and campaign revenue."
            transformation="Decisions get easier. You invest where results are clear."
            bullets={[
              "Customer lifetime value",
              "Campaign and channel ROI",
              "Location comparisons"
            ]}
          />

          <FeatureBlock
            icon={<span aria-hidden="true">🌐</span>}
            eyebrow="Digital Front Door"
            headline="A website that collects customers, not dust."
            pain="Outdated sites do not capture leads or drive visits."
            solution="Modern, mobile-first pages with loyalty signup, offers, and order links built in."
            transformation="Your site becomes a magnet that sends more people through the door."
            bullets={[
              "Fast, clean, branded",
              "Lead capture baked in",
              "Easy updates"
            ]}
          />
        </div>

        {/* Closing CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Bring every system under one roof.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We set it up. Your team runs it easily. Your customers keep coming back.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Book a Demo
            </a>
            <a
              href="/how-it-works"
              className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors duration-200"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
  