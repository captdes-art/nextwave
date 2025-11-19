import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-50 shadow-sm" role="banner">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Next Wave Wellness Home">
          <img 
            src="/images/logo.png" 
            alt="Next Wave Wellness Logo" 
            style={{ width: '40px', height: '40px', objectFit: 'contain' }}
          />
          <span className="font-semibold text-gray-900">Next Wave Wellness</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-gray-700" role="navigation" aria-label="Main navigation">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="/blog" className="hover:text-gray-900">Blog</Link>
          <Link href="/#categories" className="hover:text-gray-900">Categories</Link>
          <Link href="/#tech" className="hover:text-gray-900">Technologies</Link>
          <Link href="/#products" className="hover:text-gray-900">Products</Link>
          <Link href="/#about" className="hover:text-gray-900">About</Link>
          <Link href="/#contact" className="hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
