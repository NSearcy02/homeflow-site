export default function ProofPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Real Proof: Case Studies
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we&apos;ve helped local coffee shops, cafes, and juice bars transform their businesses with our automation systems and digital solutions.
          </p>
        </div>
        
        <div className="mt-16 space-y-12">
          <section className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Downtown Coffee Co.
            </h2>
            <p className="text-gray-600 mb-4">
              A family-owned coffee shop that increased their customer retention by 40% through our loyalty program and automated marketing campaigns.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-green-600">40%</p>
                <p className="text-gray-600">Increase in repeat customers</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-green-600">2.5x</p>
                <p className="text-gray-600">More online orders</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-green-600">$15k</p>
                <p className="text-gray-600">Additional monthly revenue</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Fresh Juice Bar
            </h2>
            <p className="text-gray-600 mb-4">
              A health-focused juice bar that streamlined their ordering process and increased average order value by 35% with our integrated systems.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-green-600">35%</p>
                <p className="text-gray-600">Higher average order value</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-green-600">60%</p>
                <p className="text-gray-600">Faster order processing</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-green-600">500+</p>
                <p className="text-gray-600">New loyalty members</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Artisan Cafe
            </h2>
            <p className="text-gray-600 mb-4">
              A boutique cafe that expanded their reach and increased foot traffic by 50% through our digital marketing automation and social media integration.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-green-600">50%</p>
                <p className="text-gray-600">Increase in foot traffic</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-green-600">3x</p>
                <p className="text-gray-600">Social media engagement</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-green-600">$25k</p>
                <p className="text-gray-600">Additional annual revenue</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
  