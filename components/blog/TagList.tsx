import Link from 'next/link'

interface TagListProps {
  tags: string[]
}

export default function TagList({ tags }: TagListProps) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const slug = tag.toLowerCase().replace(/\s+/g, '-')
        return (
          <Link
            key={tag}
            href={`/blog/tag/${slug}`}
            className="inline-block px-3 py-1 bg-gray-100 hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-full text-sm transition-colors"
          >
            #{tag}
          </Link>
        )
      })}
    </div>
  )
}
