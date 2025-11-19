'use client'

import Header from "@/components/Header"
import Link from "next/link"

export default function Nutrition() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6">Personalized Nutrition & Gut Health</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Optimize your diet based on your unique biology with DNA testing, microbiome analysis, and metabolic tracking
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Viome Gut Intelligence", 
              price: "$199", 
              desc: "Personalized nutrition testing",
              image: "https://picsum.photos/seed/viome/400/300"
            },
            { 
              title: "Levels CGM", 
              price: "$199/month", 
              desc: "Glucose monitoring system",
              image: "https://picsum.photos/seed/levels/400/300"
            },
            { 
              title: "InsideTracker", 
              price: "$499", 
              desc: "Blood biomarker analysis",
              image: "https://picsum.photos/seed/insidetracker/400/300"
            },
            { 
              title: "Ombre Gut Test", 
              price: "$129", 
              desc: "Microbiome testing kit",
              image: "https://picsum.photos/seed/ombre/400/300"
            },
            { 
              title: "Nutrisense CGM", 
              price: "$250/month", 
              desc: "Continuous glucose monitoring",
              image: "https://picsum.photos/seed/nutrisense/400/300"
            },
            { 
              title: "Vessel Health", 
              price: "$399", 
              desc: "At-home wellness testing",
              image: "https://picsum.photos/seed/vessel/400/300"
            },
          ].map((product, i) => (
            <Link 
              key={i} 
              href="#"
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition block"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${product.image}')` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                <p className="text-2xl font-bold text-teal-600 mb-4">{product.price}</p>
                <p className="text-xs text-gray-500 mb-4">Nutrition & Gut Health</p>
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700">
                  View Product
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-teal-100 mb-8 text-lg">
            Get the latest biohacking insights and product updates
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-gray-900"
            />
            <button className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded font-semibold">
              Subscribe
            </button>
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
                <li><Link href="/#tech" className="hover:text-white">Technologies</Link></li>
                <li><Link href="/#products" className="hover:text-white">Products</Link></li>
                <li><Link href="/#about" className="hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/category/sleep" className="hover:text-white">Sleep Optimization</Link></li>
                <li><Link href="/category/mental-wellness" className="hover:text-white">Mental Wellness</Link></li>
                <li><Link href="/category/nutrition" className="hover:text-white">Nutrition & Gut Health</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
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
