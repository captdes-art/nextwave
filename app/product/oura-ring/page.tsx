'use client'

import Header from "@/components/Header"
import Link from "next/link"

export default function OuraRing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-24 pb-4 px-6 max-w-7xl mx-auto">
        <Link href="/category/sleep" className="text-teal-600 hover:text-teal-700 text-sm">
          ← Back to Sleep Optimization
        </Link>
      </section>

      {/* Hero Section */}
      <section className="pb-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-teal-600 font-semibold mb-2">Sleep Optimization</p>
            <h1 className="text-5xl font-bold mb-4">Oura Ring Gen 3</h1>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              The world's most advanced wellness ring. Track your sleep, activity, and readiness with precision sensors in an elegant, lightweight design.
            </p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-teal-600">$299+</span>
              <span className="text-gray-600">$5.99/mo membership</span>
            </div>
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 text-lg">
              Get Your Oura Ring
            </button>
            <p className="text-sm text-gray-500 mt-4">
              * Affiliate link - Supporting Next Wave Wellness helps us bring you more great content
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center">
              <span className="text-9xl">💍</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Everything You Need to Optimize Your Health</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Oura Ring combines cutting-edge technology with elegant design to give you actionable insights about your body
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "😴",
                title: "Sleep Tracking",
                desc: "Advanced sleep stage analysis with personalized recommendations for better rest"
              },
              {
                icon: "❤️",
                title: "Heart Health",
                desc: "24/7 heart rate monitoring, HRV tracking, and cardiovascular insights"
              },
              {
                icon: "🏃",
                title: "Activity Tracking",
                desc: "Automatic workout detection and daily activity goals personalized to you"
              },
              {
                icon: "⚡",
                title: "Readiness Score",
                desc: "Know when you're ready to perform or need recovery based on your body's signals"
              },
              {
                icon: "🧘",
                title: "Stress & Resilience",
                desc: "Monitor stress levels and build resilience with actionable insights"
              },
              {
                icon: "🔋",
                title: "Long Battery Life",
                desc: "Up to 7 days of battery life in a sleek, lightweight design"
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Oura Ring?</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Trusted by top athletes, CEOs, and health enthusiasts worldwide
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🔬", title: "Clinically validated sensors for accurate health data" },
              { icon: "💧", title: "Water-resistant up to 100 meters" },
              { icon: "💳", title: "FSA/HSA eligible purchase" },
              { icon: "📱", title: "Seamless integration with Apple Health and Google Fit" },
              { icon: "🤖", title: "Personalized health insights powered by AI" },
              { icon: "🛡️", title: "Lifetime warranty and excellent customer support" },
            ].map((reason, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl">{reason.icon}</div>
                <p className="text-gray-700 pt-2">{reason.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Health?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Join millions of users who trust Oura Ring for personalized health insights
          </p>
          <div className="flex gap-4 justify-center mb-6">
            <button className="bg-white text-teal-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 text-lg">
              Buy Now - $299
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 text-lg">
              Learn More
            </button>
          </div>
          <p className="text-teal-100 text-sm">
            30-day money-back guarantee • Free shipping • FSA/HSA eligible
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Get the latest biohacking insights and product updates
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded border border-gray-300"
            />
            <button className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Next Wave Wellness</h4>
              <p className="text-sm">Your trusted source for cutting-edge health and longevity technologies.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Explore</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/#tech" className="hover:text-white">Technologies</Link></li>
                <li><Link href="/#products" className="hover:text-white">Products</Link></li>
                <li><Link href="/#about" className="hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/category/sleep" className="hover:text-white">Sleep Optimization</Link></li>
                <li><a href="#" className="hover:text-white">Mental Wellness</a></li>
                <li><a href="#" className="hover:text-white">Nutrition & Gut Health</a></li>
                <li><a href="#" className="hover:text-white">Fitness Tracking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Next Wave Wellness. Information provided for educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
