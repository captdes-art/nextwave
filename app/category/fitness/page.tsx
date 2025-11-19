'use client'

import Header from "@/components/Header"
import Link from "next/link"

export default function Fitness() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6">Fitness Tracking & Body Optimization</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Monitor and enhance your physical performance with data-driven fitness tracking and recovery optimization
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "WHOOP 4.0", 
              price: "$239/year", 
              desc: "Advanced fitness & recovery",
              image: "https://picsum.photos/seed/whoop/400/300",
              link: "/product/whoop-4"
            },
            { 
              title: "Garmin Fenix 7", 
              price: "$699", 
              desc: "Multisport GPS watch",
              image: "https://picsum.photos/seed/garmin/400/300",
              link: "#"
            },
            { 
              title: "Athlytic", 
              price: "$9.99/month", 
              desc: "AI fitness coaching app",
              image: "https://picsum.photos/seed/athlytic/400/300",
              link: "#"
            },
            { 
              title: "Polar Vantage V3", 
              price: "$599", 
              desc: "Training optimization",
              image: "https://picsum.photos/seed/polar/400/300",
              link: "#"
            },
            { 
              title: "Biostrap EVO", 
              price: "$329", 
              desc: "Clinical-grade biometrics",
              image: "https://picsum.photos/seed/biostrap/400/300",
              link: "#"
            },
            { 
              title: "TrainingPeaks", 
              price: "$119/year", 
              desc: "Workout planning platform",
              image: "https://picsum.photos/seed/trainingpeaks/400/300",
              link: "#"
            },
          ].map((product, i) => (
            <Link 
              key={i} 
              href={product.link}
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
                <p className="text-xs text-gray-500 mb-4">Fitness Tracking</p>
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
