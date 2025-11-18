import Link from 'next/link'
import Image from 'next/image'
import { BlogPostMeta } from '@/lib/types/blog'
import { formatDateShort } from '@/lib/utils/formatDate'
import CategoryBadge from './CategoryBadge'

interface BlogCardProps {
  post: BlogPostMeta
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Featured
              </span>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <CategoryBadge category={post.category} />
            <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-2 group-hover:text-teal-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{formatDateShort(post.date)}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <CategoryBadge category={post.category} />
        <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-2 group-hover:text-teal-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>{formatDateShort(post.date)}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </Link>
  )
}
