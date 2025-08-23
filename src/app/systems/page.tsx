export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Automation Systems
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the powerful automation systems we build to help coffee shops, cafes, and juice bars streamline operations, increase customer engagement, and boost revenue.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <div className="text-blue-600 text-3xl mb-4">📱</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Customer Loyalty System
            </h2>
            <p className="text-gray-600 mb-6">
              Automated loyalty programs that reward repeat customers and encourage brand loyalty through points, rewards, and personalized offers.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Points-based reward system</li>
              <li>• Automated birthday rewards</li>
              <li>• Personalized discount offers</li>
              <li>• Customer behavior tracking</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
            <div className="text-green-600 text-3xl mb-4">📧</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Email & SMS Automation
            </h2>
            <p className="text-gray-600 mb-6">
              Intelligent marketing automation that sends the right message at the right time to nurture customer relationships and drive sales.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Welcome series automation</li>
              <li>• Abandoned cart recovery</li>
              <li>• Seasonal campaign triggers</li>
              <li>• Customer re-engagement flows</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 border border-purple-100">
            <div className="text-purple-600 text-3xl mb-4">📊</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Analytics Dashboard
            </h2>
            <p className="text-gray-600 mb-6">
              Real-time business intelligence that provides actionable insights into customer behavior, sales performance, and marketing effectiveness.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Customer lifetime value tracking</li>
              <li>• Sales performance metrics</li>
              <li>• Marketing campaign ROI</li>
              <li>• Predictive analytics</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 border border-orange-100">
            <div className="text-orange-600 text-3xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Online Ordering System
            </h2>
            <p className="text-gray-600 mb-6">
              Seamless online ordering platform that integrates with your existing POS system and provides customers with a smooth ordering experience.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Mobile-responsive design</li>
              <li>• Real-time inventory sync</li>
              <li>• Payment processing integration</li>
              <li>• Order tracking notifications</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8 border border-red-100">
            <div className="text-red-600 text-3xl mb-4">🎯</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Social Media Integration
            </h2>
            <p className="text-gray-600 mb-6">
              Automated social media management that helps you maintain an active online presence and engage with your community effectively.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Automated posting schedules</li>
              <li>• Content calendar management</li>
              <li>• Social media monitoring</li>
              <li>• Engagement analytics</li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100">
            <div className="text-teal-600 text-3xl mb-4">⚡</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Inventory Management
            </h2>
            <p className="text-gray-600 mb-6">
              Smart inventory tracking that automatically monitors stock levels, predicts demand, and helps prevent stockouts and waste.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Real-time stock monitoring</li>
              <li>• Automated reorder alerts</li>
              <li>• Demand forecasting</li>
              <li>• Waste tracking</li>
            </ul>
          </section>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our systems work together to create a seamless, automated experience that saves you time and increases your revenue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/how-it-works"
              className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Learn How It Works
            </a>
            <a
              href="/proof"
              className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors duration-200"
            >
              See Case Studies
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
  