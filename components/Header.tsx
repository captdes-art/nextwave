'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleNavClick = (anchor: string) => {
    if (isHomePage) {
      // Smooth scroll to anchor on homepage
      const element = document.getElementById(anchor.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="w-8 h-8 bg-teal-600 rounded-full" />
          <span className="font-semibold text-gray-900">Next Wave Wellness</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <Link 
            href="/" 
            className="hover:text-gray-900 transition"
          >
            Home
          </Link>
          <Link 
            href={isHomePage ? "#categories" : "/#categories"}
            onClick={() => handleNavClick('#categories')}
            className="hover:text-gray-900 transition"
          >
            Categories
          </Link>
          <Link 
            href={isHomePage ? "#tech" : "/#tech"}
            onClick={() => handleNavClick('#tech')}
            className="hover:text-gray-900 transition"
          >
            Technologies
          </Link>
          <Link 
            href={isHomePage ? "#products" : "/#products"}
            onClick={() => handleNavClick('#products')}
            className="hover:text-gray-900 transition"
          >
            Products
          </Link>
          <Link 
            href={isHomePage ? "#about" : "/#about"}
            onClick={() => handleNavClick('#about')}
            className="hover:text-gray-900 transition"
          >
            About
          </Link>
          <Link 
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={() => handleNavClick('#contact')}
            className="hover:text-gray-900 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
