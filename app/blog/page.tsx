'use client'

import Header from "@/components/Header"
import BlogPostCard from "@/components/ui/BlogPostCard"
import Link from "next/link"
import { blogPosts } from "@/data/blog"

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
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
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
                <li><Link href="/#about" className="hover:text-white">About</Link></li>
                <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
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
