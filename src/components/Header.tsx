'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            NW
          </div>
          <span className="font-semibold text-gray-900">Next Wave</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          {isHomePage ? (
            <>
              <button 
                onClick={() => handleNavClick('home')}
                className="hover:text-gray-900 transition"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('categories')}
                className="hover:text-gray-900 transition"
              >
                Categories
              </button>
              <button 
                onClick={() => handleNavClick('tech')}
                className="hover:text-gray-900 transition"
              >
                Technologies
              </button>
              <button 
                onClick={() => handleNavClick('products')}
                className="hover:text-gray-900 transition"
              >
                Products
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="hover:text-gray-900 transition"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="hover:text-gray-900 transition"
              >
                Contact
              </button>
            </>
          ) : (
            <>
              <Link href="/#home" className="hover:text-gray-900 transition">Home</Link>
              <Link href="/#categories" className="hover:text-gray-900 transition">Categories</Link>
              <Link href="/#tech" className="hover:text-gray-900 transition">Technologies</Link>
              <Link href="/#products" className="hover:text-gray-900 transition">Products</Link>
              <Link href="/#about" className="hover:text-gray-900 transition">About</Link>
              <Link href="/#contact" className="hover:text-gray-900 transition">Contact</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
