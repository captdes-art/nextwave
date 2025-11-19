'use client'

import Header from "@/src/components/Header"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Reviews & Articles</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            In-depth reviews and insights on the latest wellness technology
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Muse S: Your Mind's Best Friend",
                excerpt: "OMG, this is seriously THE breakthrough in meditation and sleep technology! Real-time brainwave feedback that actually works.",
                category: "Brain Tech",
                date: "Nov 18, 2025",
                link: "/article/muse-s-headband-review",
                icon: "🧘‍♀️"
              },
              {
                title: "Oura Ring Gen 3 Review",
                excerpt: "Comprehensive review of the latest Oura Ring with detailed analysis of sleep tracking, heart rate variability, and readiness scores.",
                category: "Wearables",
                date: "Nov 15, 2025",
                link: "/product/oura-ring",
                icon: "💍"
              },
              {
                title: "Eight Sleep Pod Deep Dive",
                excerpt: "Is temperature-controlled sleep worth the investment? We tested the Eight Sleep Pod and break down all the science behind it.",
                category: "Sleep Tech",
                date: "Nov 12, 2025",
                link: "/product/eight-sleep-pod",
                icon: "🛏️"
              },
              {
                title: "WHOOP 4.0: Elite Athlete Tool",
                excerpt: "What makes WHOOP different from other fitness trackers? We explore the recovery metrics and strain analysis that athletes love.",
                category: "Fitness",
                date: "Nov 10, 2025",
                link: "/product/whoop-4",
                icon: "⌚"
              },
            ].map((post, i) => (
              <Link key={i} href={post.link} className="group">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition h-full">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-6xl">
                    {post.icon}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-purple-600 uppercase">{post.category}</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="text-purple-600 font-semibold text-sm">Read Article →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-purple-600">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get New Reviews in Your Inbox</h2>
          <p className="mb-6 text-purple-100">Subscribe to get notified when we publish new biohacking reviews and wellness tech insights</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded text-gray-900"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">
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
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/product/oura-ring" className="hover:text-white">Oura Ring</Link></li>
                <li><Link href="/product/eight-sleep-pod" className="hover:text-white">Eight Sleep</Link></li>
                <li><Link href="/product/whoop-4" className="hover:text-white">WHOOP 4.0</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/#about" className="hover:text-white">About</a></li>
                <li><a href="/#contact" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
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
