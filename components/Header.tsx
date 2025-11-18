import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-600 rounded-full" />
          <span className="font-semibold text-gray-900">Next Wave Wellness</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="/#categories" className="hover:text-gray-900">Categories</Link>
          <Link href="/#tech" className="hover:text-gray-900">Technologies</Link>
          <Link href="/#products" className="hover:text-gray-900">Products</Link>
          <Link href="/blog" className="hover:text-gray-900 font-semibold text-teal-600">Blog</Link>
          <Link href="/#about" className="hover:text-gray-900">About</Link>
          <Link href="/#contact" className="hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
