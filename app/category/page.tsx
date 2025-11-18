'use client'

import Image from "next/image"
import Header from "@/src/components/Header"
import Link from "next/link"

export default function SleepCategory() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <Link href="/#categories" className="text-teal-600 hover:text-teal-700 font-semibold mb-6 inline-block">
            ← Back to Categories
          </Link>
          <h1 className="text-5xl font-bold mb-4">Sleep Optimization & Recovery</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Enhance sleep quality and accelerate physical recovery with advanced sleep technologies
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Oura Ring Gen 3",
                desc: "Advanced sleep tracking with recovery insights",
                price: "$299-$399",
                icon: "💍",
                link: "/product/oura-ring"
              },
              {
                title: "Eight Sleep Pod",
                desc: "Temperature-controlled mattress for optimal sleep",
                price: "$3,495",
                icon: "🛏️",
                link: "/product/eight-sleep-pod"
              },
              {
                title: "WHOOP 4.0",
                desc: "Real-time recovery and sleep strain tracking",
                price: "$239/year",
                icon: "⌚",
                link: "/product/whoop-4"
              },
              {
                title: "Sleep Cycle App",
                desc: "Smart alarm clock for optimal sleep timing",
                price: "$9.99/month",
                icon: "📱"
              },
              {
                title: "Magnesium Sleep Complex",
                desc: "Natural sleep aid with proven results",
                price: "$34/month",
                icon: "💊"
              },
              {
                title: "Sleep Coaching",
                desc: "1-on-1 sleep optimization coaching",
                price: "$199/month",
                icon: "👨‍⚕️"
              },
            ].map((product, i) => (
              <Link
                key={i}
                href={product.link || "#"}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition block"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-6xl">
                  {product.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-lg font-bold text-teal-600">{product.price}</span>
                    <span className="text-teal-600 font-semibold text-sm">Learn More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-teal-600">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Optimize Your Sleep</h2>
          <p className="mb-6 text-teal-100">Get sleep science tips and exclusive product recommendations</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded text-gray-900"
            />
            <button className="bg-white text-teal-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/category/sleep" className="hover:text-white">Sleep Optimization</Link></li>
                <li><Link href="/category/mental-wellness" className="hover:text-white">Mental Wellness</Link></li>
                <li><Link href="/category/nutrition" className="hover:text-white">Nutrition</Link></li>
                <li><Link href="/category/fitness" className="hover:text-white">Fitness</Link></li>
                <li><Link href="/category/longevity" className="hover:text-white">Longevity</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/#about" className="hover:text-white">About</a></li>
                <li><a href="/#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Research</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Next Wave Wellness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
