export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            How It Works
          </h1>
          <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
            Our simple, proven process helps coffee shops, cafes, and juice bars implement automation systems that drive real results. Here&apos;s how we work together to transform your business.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {/* Step 1 */}
          <section className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-slate-100 text-slate-700 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
                1
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Discovery & Strategy
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                We start by understanding your unique business needs, current challenges, and growth goals. Our team analyzes your existing systems and customer data to create a customized automation strategy.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Business analysis and goal setting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Customer journey mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Technology stack assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>ROI projection and timeline</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">What You&apos;ll Get:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Detailed automation roadmap</li>
                  <li>• Implementation timeline</li>
                  <li>• Expected ROI projections</li>
                  <li>• Technology recommendations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-slate-100 text-slate-700 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
                2
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                System Design & Setup
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                Our development team builds your custom automation systems, integrating seamlessly with your existing tools and workflows. We ensure everything works together perfectly from day one.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Custom system development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Third-party integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Mobile-responsive design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Security and compliance setup</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Systems We Build:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Customer loyalty programs</li>
                  <li>• Email & SMS automation</li>
                  <li>• Online ordering platforms</li>
                  <li>• Analytics dashboards</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-slate-100 text-slate-700 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
                3
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Launch & Training
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                We launch your automation systems and provide comprehensive training for your team. Our experts ensure everyone is confident using the new tools and maximizing their potential.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>System deployment and testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Staff training sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Documentation and guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Go-live support</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 border border-purple-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Training Includes:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• System administration</li>
                  <li>• Customer service workflows</li>
                  <li>• Marketing automation</li>
                  <li>• Analytics interpretation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                4
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Ongoing Support & Optimization
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                Our relationship doesn&apos;t end at launch. We provide ongoing support, monitor performance, and continuously optimize your systems to ensure maximum ROI and business growth.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>24/7 technical support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Performance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Regular system updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Growth strategy consulting</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 border border-orange-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Support Services:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Monthly performance reviews</li>
                  <li>• System optimization</li>
                  <li>• Feature enhancements</li>
                  <li>• Business growth consulting</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
            Join hundreds of coffee shops, cafes, and juice bars that have already automated their way to success with our proven systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Start Your Free Consultation
            </a>
            <a
              href="/proof"
              className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors duration-200"
            >
              See Success Stories
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
  