'use client'

import Header from "../../../components/Header"
import Link from "next/link"

export default function SleepOptimization() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6">Sleep Optimization & Recovery</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Enhance sleep quality and accelerate physical recovery with advanced tracking and optimization technologies
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Oura Ring Gen 3", 
              price: "$299-$399", 
              desc: "24/7 sleep & recovery tracking",
              image: "https://picsum.photos/seed/oura/400/300"
            },
            { 
              title: "Eight Sleep Pod", 
              price: "$2,295", 
              desc: "Temperature-controlled mattress",
              image: "https://picsum.photos/seed/eightsleep/400/300"
            },
            { 
              title: "WHOOP 4.0", 
              price: "$239/year", 
              desc: "Advanced sleep tracking",
              image: "https://picsum.photos/seed/whoop/400/300"
            },
            { 
              title: "Muse S Headband", 
              price: "$399", 
              desc: "Sleep-focused meditation",
              image: "https://picsum.photos/seed/muse/400/300"
            },
            { 
              title: "Fitbit Sense 2", 
              price: "$299", 
              desc: "Sleep stages & stress tracking",
              image: "https://picsum.photos/seed/fitbit/400/300"
            },
            { 
              title: "Withings Sleep Mat", 
              price: "$99", 
              desc: "Under-mattress sleep tracker",
              image: "https://picsum.photos/seed/withings/400/300"
            },
          ].map((product, i) => (
            <Link 
              key={i} 
              href={i === 0 ? "/product/oura-ring" : i === 1 ? "/product/eight-sleep-pod" : i === 2 ? "/product/whoop-4" : "#"}
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
                <p className="text-xs text-gray-500 mb-4">Sleep Optimization</p>
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
                <li><a href="#" className="hover:text-white">Mental Wellness</a></li>
                <li><a href="#" className="hover:text-white">Nutrition & Gut Health</a></li>
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
