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
          <div className="w-10 h-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Compass circle */}
              <circle cx="100" cy="100" r="95" fill="none" stroke="#4B9BA8" strokeWidth="2"/>
              <circle cx="100" cy="100" r="85" fill="#E8F4F8"/>
              
              {/* Compass needle - North */}
              <path d="M 100 30 L 95 65 L 100 60 L 105 65 Z" fill="#1E5A6B"/>
              <path d="M 100 30 L 100 60" stroke="#1E5A6B" strokeWidth="2"/>
              
              {/* Compass needle - South */}
              <path d="M 100 170 L 95 135 L 100 140 L 105 135 Z" fill="#A8D5E5"/>
              
              {/* Cardinal letters */}
              <text x="100" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E5A6B">N</text>
              <text x="100" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4B9BA8">S</text>
              <text x="20" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4B9BA8">W</text>
              <text x="180" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E5A6B">E</text>
              
              {/* Center circle */}
              <circle cx="100" cy="100" r="12" fill="#1E5A6B"/>
              <circle cx="100" cy="100" r="8" fill="#4B9BA8"/>
              <circle cx="100" cy="100" r="4" fill="#E8F4F8"/>
            </svg>
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
