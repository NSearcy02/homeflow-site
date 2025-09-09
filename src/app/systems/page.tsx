import FeatureBlock from "@/components/FeatureBlock";

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900">
            Systems Under One Roof.
          </h1>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Everything your shop needs to capture customers, bring them back, and see results in one place. One roof, one workflow, one clear view of growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <a
              href="#"
              className="px-8 py-4 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book a Demo
            </a>
            <a
              href="/how-it-works"
              className="px-8 py-4 bg-white/90 text-amber-800 border-2 border-amber-300 rounded-full font-medium hover:bg-amber-50 hover:border-amber-400 transition-all duration-200 shadow-md hover:shadow-lg"
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
            headline="Every call answered, even when you can't pick up."
            subline="HomeFlow makes sure conversations keep flowing so no customer is left hanging."
            chips={[
              "Local numbers",
              "Custom reply windows",
              "Pipeline tracking"
            ]}
          />

          <FeatureBlock
            icon={<span aria-hidden="true">⭐</span>}
            eyebrow="Retention Engine"
            headline="A loyalty program that makes every visit count."
            subline="With points, perks, and rewards built in, customers feel recognized and keep coming back."
            chips={[
              "VIP tiers",
              "Birthday rewards",
              "QR signups"
            ]}
          />

          <FeatureBlock
            icon={<span aria-hidden="true">🔁</span>}
            eyebrow="Always-On Marketing"
            headline="Marketing that runs itself."
            subline="Personalized texts and emails reach customers at the right moment — keeping your shop top of mind without the extra effort."
            chips={[
              "Welcome flows",
              "Win-backs",
              "Seasonal offers"
            ]}
          />

          <FeatureBlock
            icon={<span aria-hidden="true">💬</span>}
            eyebrow="Online Presence"
            headline="An online presence that works in the background."
            subline="Reviews, replies, and posts handled automatically so your shop always looks active and trustworthy."
            chips={[
              "Auto review invites",
              "Smart reply templates",
              "Content calendar"
            ]}
          />

          <FeatureBlock
            icon={<span aria-hidden="true">📊</span>}
            eyebrow="Clarity"
            headline="Clarity on what's working."
            subline="Real-time insights show which campaigns drive sales and how customer loyalty is growing — all in one view."
            chips={[
              "Campaign ROI",
              "Lifetime value",
              "Location comparisons"
            ]}
          />

          <FeatureBlock
            icon={<span aria-hidden="true">🌐</span>}
            eyebrow="Digital Front Door"
            headline="A digital front door that brings people in."
            subline="Clean, mobile-friendly websites that capture signups and turn online interest into in-store visits."
            chips={[
              "Fast + branded",
              "Lead capture",
              "Mobile-first"
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
              className="px-8 py-4 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book a Demo
            </a>
            <a
              href="/how-it-works"
              className="px-8 py-4 bg-white/90 text-amber-800 border-2 border-amber-300 rounded-full font-medium hover:bg-amber-50 hover:border-amber-400 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
  