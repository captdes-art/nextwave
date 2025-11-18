import Link from 'next/link'

interface CategoryBadgeProps {
  category: string
  clickable?: boolean
}

export default function CategoryBadge({ category, clickable = true }: CategoryBadgeProps) {
  const slug = category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')

  const badge = (
    <span className="inline-block text-xs font-semibold text-teal-600 uppercase tracking-wide">
      {category}
    </span>
  )

  if (!clickable) {
    return badge
  }

  return (
    <Link
      href={`/blog/category/${slug}`}
      className="inline-block text-xs font-semibold text-teal-600 uppercase tracking-wide hover:text-teal-700 transition-colors"
    >
      {category}
    </Link>
  )
}
