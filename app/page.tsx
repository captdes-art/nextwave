'use client'

import Header from "@/components/Header"
import ProductCard from "@/components/ui/ProductCard"
import CategoryCard from "@/components/ui/CategoryCard"
import TechnologyCard from "@/components/ui/TechnologyCard"
import { products } from "@/data/products"
import { categories } from "@/data/categories"
import { technologies } from "@/data/technologies"

const categoryImages: Record<string, string> = {
  "sleep": "https://picsum.photos/seed/sleep/400/300",
  "mental-wellness": "https://picsum.photos/seed/mental/400/300",
  "nutrition": "https://picsum.photos/seed/nutrition/400/300",
  "fitness": "https://picsum.photos/seed/fitness/400/300",
  "longevity": "https://picsum.photos/seed/longevity/400/300",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              The Best of<br />Biohacking
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover cutting-edge health and longevity technologies designed to optimize your body and mind
            </p>
            <div className="flex gap-4">
              <button onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })} className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700">
                Explore Categories
              </button>
              <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50">
                View Products
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/logo.png" 
              alt="Next Wave Wellness" 
              className="w-96 h-96 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center">Explore by Category</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Choose your area of interest to discover the latest biohacking technologies and products
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                imageUrl={categoryImages[category.slug]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Technologies */}
      <section id="tech" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center">Featured Technologies</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Explore the most innovative biohacking technologies backed by science
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <TechnologyCard key={tech.id} technology={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center">Product Showcase</h2>
          <p className="text-xl text-gray-600 text-center mb-8">
            Discover curated products to enhance your health and performance
          </p>

          <div className="flex justify-center gap-2 mb-16 flex-wrap">
            {["All", "Sleep Optimization", "Mental Wellness", "Nutrition & Gut Health", "Fitness Tracking", "Longevity & Anti-Aging"].map((cat, i) => (
              <button
                key={i}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                  i === 0 ? "bg-teal-600 text-white" : "border border-gray-300 text-gray-700 hover:border-teal-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">About Next Wave Wellness</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We're dedicated to curating the most effective, science-backed biohacking technologies and products. Our mission is to help you optimize your health, enhance performance, and extend your healthspan through cutting-edge wellness solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every product and technology we feature is carefully researched and evaluated for safety, efficacy, and real-world results. We believe in empowering individuals with the knowledge and tools to take control of their health journey.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6">Get in Touch</h2>
          <p className="text-center text-teal-100 mb-16 text-lg">
            Have questions about biohacking or want to suggest products for us to review?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-teal-800 bg-opacity-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="text-teal-100">
                Reach out with any questions or partnership inquiries.
              </p>
            </div>
            <div className="bg-teal-800 bg-opacity-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded text-gray-900 text-sm"
                />
                <button className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Next Wave Wellness</h4>
              <p className="text-sm">Your trusted source for cutting-edge health and longevity technologies.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Explore</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#tech" className="hover:text-white">Technologies</a></li>
                <li><a href="#products" className="hover:text-white">Products</a></li>
                <li><a href="#about" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Sleep Optimization</a></li>
                <li><a href="#" className="hover:text-white">Mental Wellness</a></li>
                <li><a href="#" className="hover:text-white">Nutrition & Gut Health</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Next Wave Wellness. Information provided for educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
