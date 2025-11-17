'use client'

import Link from "next/link"
import Header from "@/components/Header"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link href="/" className="text-blue-300 hover:text-blue-200 font-medium">
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & Reviews</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            In-depth reviews and articles about the latest wellness technology and longevity products
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Muse S Review Article */}
            <Link href="/blog/muse-s-review" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <span className="text-7xl">🧘‍♀️</span>
                </div>
                <div className="p-6">
                  <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    Product Review
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition">
                    Muse S Headband: Your Mind's Best Friend
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    OMG, this is seriously THE breakthrough in meditation and sleep technology! Real-time brainwave feedback that actually helps you achieve deep calm and restful sleep.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600 font-semibold">Read Full Review →</span>
                    <span className="text-sm text-gray-500">$399</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Placeholder for future blog posts */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden opacity-60">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-7xl">📝</span>
              </div>
              <div className="p-6">
                <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  Coming Soon
                </div>
                <h2 className="text-2xl font-bold mb-3 text-gray-600">
                  More Reviews Coming Soon
                </h2>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  We're working on more in-depth reviews of cutting-edge wellness technology. Check back soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Next Wave Wellness</h4>
              <p className="text-sm">Your trusted source for cutting-edge health and longevity technologies.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/#products" className="hover:text-white">All Products</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog & Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/category/sleep" className="hover:text-white">Sleep Optimization</Link></li>
                <li><a href="#" className="hover:text-white">Mental Wellness</a></li>
                <li><a href="#" className="hover:text-white">Fitness Tracking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Affiliate Disclosure</a></li>
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
