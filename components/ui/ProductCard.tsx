import Link from "next/link"
import { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={product.link}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition block"
    >
      <div className="h-40 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
        <span className="text-5xl">{product.icon}</span>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.tagline}</p>
        <p className="text-lg font-bold text-teal-600 mb-3">{product.priceLabel}</p>
        <p className="text-xs text-gray-500 mb-4">{product.category}</p>
        <button className="w-full bg-teal-600 text-white py-2 rounded font-semibold hover:bg-teal-700 text-sm">
          View Product 🧬
        </button>
      </div>
    </Link>
  )
}
