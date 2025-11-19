import Link from "next/link"
import { BlogPost } from "@/types"

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={post.link} className="group">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition h-full">
        <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-6xl">
          {post.icon}
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-purple-600 uppercase">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
          <div className="text-purple-600 font-semibold text-sm">Read Article →</div>
        </div>
      </div>
    </Link>
  )
}
