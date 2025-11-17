'use client'

import Image from "next/image"
import Header from "@/components/Header"
import Link from "next/link"

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
            <div className="w-96 h-96 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center">
              <span className="text-9xl">🧬</span>
            </div>
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
            {[
              { 
                title: "Sleep Optimization & Recovery", 
                desc: "Enhance sleep quality and accelerate physical recovery",
                image: "https://picsum.photos/seed/sleep/400/300",
                icon: "🌙"
              },
              { 
                title: "Mental Wellness & Cognitive Performance", 
                desc: "Boost focus, memory, and mental clarity",
                image: "https://picsum.photos/seed/mental/400/300",
                icon: "🧠"
              },
              { 
                title: "Personalized Nutrition & Gut Health", 
                desc: "Optimize your diet based on your unique biology",
                image: "https://picsum.photos/seed/nutrition/400/300",
                icon: "🥗"
              },
              { 
                title: "Fitness Tracking & Body Optimization", 
                desc: "Monitor and enhance your physical performance",
                image: "https://picsum.photos/seed/fitness/400/300",
                icon: "⚡"
              },
              { 
                title: "Longevity & Anti-Aging Technologies", 
                desc: "Extend healthspan with cutting-edge interventions",
                image: "https://picsum.photos/seed/longevity/400/300",
                icon: "✨"
              },
            ].map((cat, i) => (
              <Link 
                key={i}
                href={i === 0 ? "/category/sleep" : "#"}
                className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition cursor-pointer group block"
              >
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition duration-300 relative flex items-start justify-start p-3"
                  style={{ backgroundImage: `url('${cat.image}')` }}
                >
                  <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {cat.icon}
                  </div>
                </div>
                
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{cat.title}</h3>
                  <p className="text-xs text-gray-600">{cat.desc}</p>
                </div>
              </Link>
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
            {[
              { title: "Sleep Trackers", desc: "Advanced wearable technology that monitors your sleep stages, heart rate variability, and recovery metrics to optimize your rest.", cat: "Sleep Optimization" },
              { title: "Nootropic Supplements", desc: "Scientifically-formulated cognitive enhancers designed to improve focus, memory, and mental clarity.", cat: "Mental Wellness" },
              { title: "DNA Nutrition Testing", desc: "Personalized nutrition insights based on your unique genetic profile to optimize your diet and health outcomes.", cat: "Nutrition & Gut Health" },
              { title: "Wearable Fitness Trackers", desc: "Real-time monitoring of your physical activity, vital signs, and performance metrics for data-driven fitness optimization.", cat: "Fitness Tracking" },
              { title: "Red Light Therapy", desc: "FDA-cleared photobiomodulation devices that stimulate cellular energy production for enhanced recovery and anti-aging benefits.", cat: "Longevity & Anti-Aging" },
              { title: "Continuous Glucose Monitors", desc: "Track your blood glucose levels in real-time to understand how foods affect your metabolism and optimize your diet.", cat: "Nutrition & Gut Health" },
            ].map((tech, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <div className="w-full h-40 bg-gradient-to-br from-teal-100 to-cyan-100 rounded mb-6 flex items-center justify-center">
                  <span className="text-5xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">{tech.desc}</p>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-xs font-semibold text-teal-600 uppercase">{tech.cat}</span>
                  <a href="#" className="text-teal-600 font-semibold text-sm hover:text-teal-700">Learn More →</a>
                </div>
              </div>
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
            {[
              { title: "Oura Ring Gen 3", price: "$299-$399", desc: "24/7 sleep & recovery tracking", cat: "Sleep Optimization" },
              { title: "Apollo Neuro", price: "$349", desc: "Stress relief wearable", cat: "Mental Wellness" },
              { title: "Viome Gut Intelligence", price: "$199", desc: "Personalized nutrition testing", cat: "Nutrition & Gut Health" },
              { title: "WHOOP 4.0", price: "$239/year", desc: "Advanced fitness & recovery", cat: "Fitness Tracking" },
              { title: "Joovv Mini", price: "$699", desc: "Red light therapy panel", cat: "Longevity & Anti-Aging" },
              { title: "Eight Sleep Pod", price: "$2,295", desc: "Temperature-controlled mattress", cat: "Sleep Optimization" },
              { title: "Levels CGM", price: "$199/month", desc: "Glucose monitoring system", cat: "Nutrition & Gut Health" },
              { title: "Muse S Headband", price: "$399", desc: "Meditation & sleep tracker", cat: "Mental Wellness", link: "/product/muse-s" },
            ].map((prod, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-40 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                  <span className="text-5xl">🧪</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{prod.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{prod.desc}</p>
                  <p className="text-lg font-bold text-teal-600 mb-3">{prod.price}</p>
                  <p className="text-xs text-gray-500 mb-4">{prod.cat}</p>
                  {prod.link ? (
                    <Link href={prod.link} className="block w-full bg-teal-600 text-white py-2 rounded font-semibold hover:bg-teal-700 text-sm text-center">
                      View Product 🧬
                    </Link>
                  ) : (
                    <button className="w-full bg-teal-600 text-white py-2 rounded font-semibold hover:bg-teal-700 text-sm">
                      View Product 🧬
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section id="blog" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center">Featured Reviews</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            In-depth reviews and insights on the latest wellness technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Muse S Review - Blog Style */}
            <Link href="/blog/muse-s-review" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <span className="text-7xl">🧘‍♀️</span>
                </div>
                <div className="p-6">
                  <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    Blog Review
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition">
                    Muse S: Your Mind's Best Friend
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    OMG, this is seriously THE breakthrough in meditation and sleep technology! Real-time brainwave feedback that actually works.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600 font-semibold">Read Full Review →</span>
                    <span className="text-sm font-bold text-purple-600">$399</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Muse S Product Page */}
            <Link href="/product/muse-s" className="group">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <span className="text-7xl">🧘‍♀️</span>
                </div>
                <div className="p-6">
                  <div className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    Product Page
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition">
                    Muse S Headband (Gen 2)
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Fall asleep faster and meditate deeper with brain-sensing technology. Experience guided sleep journeys that respond to your mind.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-teal-600 font-semibold">View Product Details →</span>
                    <span className="text-sm font-bold text-teal-600">$399</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link href="/blog" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700">
              View All Reviews
            </Link>
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
                <li><Link href="/blog" className="hover:text-white">Blog & Reviews</Link></li>
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
