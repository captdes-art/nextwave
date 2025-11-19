import Link from "next/link"
import { Category } from "@/types"

interface CategoryCardProps {
  category: Category
  imageUrl?: string
}

export default function CategoryCard({ category, imageUrl }: CategoryCardProps) {
  return (
    <Link
      href={category.link}
      className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition cursor-pointer group block"
    >
      <div
        className="h-48 bg-cover bg-center group-hover:scale-105 transition duration-300 relative flex items-start justify-start p-3"
        style={{
          backgroundImage: imageUrl
            ? `url('${imageUrl}')`
            : 'linear-gradient(to bottom right, #14b8a6, #06b6d4)',
        }}
      >
        <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
          {category.icon}
        </div>
      </div>

      <div className="p-4 bg-white">
        <h3 className="font-semibold text-gray-900 mb-2 text-sm">{category.name}</h3>
        <p className="text-xs text-gray-600">{category.description}</p>
      </div>
    </Link>
  )
}
