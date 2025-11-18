'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import BlogCard from '@/components/blog/BlogCard'
import SearchBar from '@/components/blog/SearchBar'
import { BlogPostMeta } from '@/lib/types/blog'
import Link from 'next/link'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostMeta[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPostMeta[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const postsPerPage = 12

  useEffect(() => {
    // Fetch posts from API
    fetch('/api/blog/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts || [])
        setFilteredPosts(data.posts || [])
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching posts:', error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(posts.filter((post) => post.category === selectedCategory))
    }
    setCurrentPage(1) // Reset to first page when category changes
  }, [selectedCategory, posts])

  const categories = [
    'All',
    'Sleep Optimization',
    'Mental Wellness',
    'Nutrition & Gut Health',
    'Fitness Tracking',
    'Longevity & Anti-Aging',
    'Product Reviews',
    'Biohacking Tips',
  ]

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const featuredPost = posts.find((post) => post.featured)

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-600">Loading articles...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6">Next Wave Blog</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Expert insights on biohacking, wellness technologies, and optimizing your health for peak performance
          </p>
        </div>

        <SearchBar posts={posts} />
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-12 px-6 max-w-7xl mx-auto">
          <BlogCard post={featuredPost} featured />
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'border border-gray-300 text-gray-700 hover:border-teal-600 hover:text-teal-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {currentPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found in this category.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? 'bg-teal-600 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-teal-100 mb-8">
            Get the latest biohacking insights and product reviews delivered to your inbox
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-lg font-semibold">
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
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/#products" className="hover:text-white">Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/category/sleep" className="hover:text-white">Sleep Optimization</Link></li>
                <li><Link href="/blog/category/mental-wellness" className="hover:text-white">Mental Wellness</Link></li>
                <li><Link href="/blog/category/fitness-tracking" className="hover:text-white">Fitness Tracking</Link></li>
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
