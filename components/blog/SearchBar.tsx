'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Fuse from 'fuse.js'
import { BlogPostMeta } from '@/lib/types/blog'
import Link from 'next/link'

interface SearchBarProps {
  posts: BlogPostMeta[]
}

export default function SearchBar({ posts }: SearchBarProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<BlogPostMeta[]>([])
  const [showResults, setShowResults] = useState(false)

  const fuse = new Fuse(posts, {
    keys: ['title', 'excerpt', 'tags', 'category'],
    threshold: 0.4,
    includeScore: true,
  })

  useEffect(() => {
    if (query.length > 2) {
      const searchResults = fuse.search(query)
      setResults(searchResults.map((result) => result.item).slice(0, 5))
      setShowResults(true)
    } else {
      setResults([])
      setShowResults(false)
    }
  }, [query])

  const handleBlur = () => {
    // Delay to allow click events on results
    setTimeout(() => setShowResults(false), 200)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 2 && setShowResults(true)}
          onBlur={handleBlur}
          placeholder="Search articles..."
          className="w-full px-6 py-4 pr-12 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none text-gray-900"
        />
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
            >
              <h4 className="font-semibold text-gray-900 mb-1">{post.title}</h4>
              <p className="text-sm text-gray-600 line-clamp-1">{post.excerpt}</p>
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {showResults && query.length > 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <p className="text-gray-600 text-center">No articles found for "{query}"</p>
        </div>
      )}
    </div>
  )
}
