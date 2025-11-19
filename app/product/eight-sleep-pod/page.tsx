'use client'

import Link from "next/link"
import Header from "../../../components/Header"

export default function EightSleepPodPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link href="/category/sleep" className="text-teal-600 hover:text-teal-700 font-medium">
              ← Back to Sleep Optimization
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                🏆 #1 Smart Sleep System
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Eight Sleep Pod
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                The most advanced sleep fitness system. Temperature-controlled mattress cover with dual-zone climate control, health tracking, and smart features that adapt to optimize your sleep every night.
              </p>
              
              <div className="mb-8">
                <div className="text-4xl font-bold text-teal-600 mb-2">Starting at $2,295</div>
                <p className="text-gray-600">Or as low as $64/month with 0% APR financing</p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition">
                  Shop the Pod →
                </button>
                <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition">
                  Learn More
                </button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span className="text-gray-700">30-Night Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span className="text-gray-700">Free Shipping & Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span className="text-gray-700">HSA/FSA Eligible</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span className="text-gray-700">5-Year Warranty**</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop" 
                  alt="Eight Sleep Pod on modern bed"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-teal-600">55-110°F</div>
                  <div className="text-sm text-gray-600">Temperature Range</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinically Proven Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Clinically Proven Results</h2>
            <p className="text-xl text-gray-600">Real improvements backed by science</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-teal-600 mb-3">44%</div>
              <div className="text-gray-900 font-semibold mb-2">Faster Sleep Onset</div>
              <div className="text-sm text-gray-600">Less time to fall asleep</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-teal-600 mb-3">34%</div>
              <div className="text-gray-900 font-semibold mb-2">More Deep Sleep</div>
              <div className="text-sm text-gray-600">Enhanced recovery and restoration</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-teal-600 mb-3">45%</div>
              <div className="text-gray-900 font-semibold mb-2">Snoring Reduction</div>
              <div className="text-sm text-gray-600">Quieter, more restful nights</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-teal-600 mb-3">23%</div>
              <div className="text-gray-900 font-semibold mb-2">Fewer Wake-Ups</div>
              <div className="text-sm text-gray-600">More continuous sleep</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Revolutionary Sleep Technology</h2>
            <p className="text-xl text-gray-600">Everything you need for optimal recovery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-bold mb-3">Dual-Zone Climate Control</h3>
              <p className="text-gray-700 leading-relaxed">
                Each side of the bed has independent temperature control ranging from 55°F to 110°F. Perfect for couples with different preferences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Autopilot</h3>
              <p className="text-gray-700 leading-relaxed">
                Smart temperature adjustments throughout the night based on your sleep stages and biometrics for optimal rest.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Advanced Sleep Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                Monitor heart rate, HRV, respiratory rate, and sleep stages without wearing any devices. Wake up to detailed insights.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">⬆️</div>
              <h3 className="text-xl font-bold mb-3">Smart Base Elevation</h3>
              <p className="text-gray-700 leading-relaxed">
                Automatic upper body elevation when snoring is detected helps keep airways open for better breathing and less disruption.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-3">Integrated Sound System</h3>
              <p className="text-gray-700 leading-relaxed">
                Built-in surround sound helps you unwind with white noise, nature sounds, or meditation, without disturbing your partner.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Silent Operation</h3>
              <p className="text-gray-700 leading-relaxed">
                Whisper-quiet Hub unit sits under your bed, keeping your bedroom peaceful while powering advanced climate control.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-bold mb-3">Athletic Recovery Mode</h3>
              <p className="text-gray-700 leading-relaxed">
                Optimized cooling helps reduce muscle strain and inflammation, perfect for athletes and fitness enthusiasts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-3">Hot Flash Relief</h3>
              <p className="text-gray-700 leading-relaxed">
                Tap the bedside control to instantly cool down during night sweats or hot flashes, then gradually return to comfort.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🛏️</div>
              <h3 className="text-xl font-bold mb-3">Fits Any Mattress</h3>
              <p className="text-gray-700 leading-relaxed">
                The Pod Cover fits over your existing mattress. No need to buy a new bed—just upgrade your current one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Perfect For Every Sleeper</h2>
            <p className="text-xl text-gray-600">Whatever your sleep challenge, the Pod meets you there</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1617197905352-fc2b8fd9e72c?w=600&h=400&fit=crop" 
                alt="Couple sleeping peacefully"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm font-semibold mb-2 text-teal-300">COUPLES</div>
                <h3 className="text-2xl font-bold mb-2">Sleep in Perfect Harmony</h3>
                <p className="text-sm">End thermostat battles with dual-zone technology</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop" 
                alt="Athlete training"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm font-semibold mb-2 text-teal-300">ATHLETES</div>
                <h3 className="text-2xl font-bold mb-2">Recover After Training</h3>
                <p className="text-sm">Optimize muscle recovery and performance</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=600&h=400&fit=crop" 
                alt="Person sleeping comfortably"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm font-semibold mb-2 text-teal-300">HOT SLEEPERS</div>
                <h3 className="text-2xl font-bold mb-2">Sleep Through the Heat</h3>
                <p className="text-sm">Stay cool all night without waking up</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop" 
                alt="Woman resting peacefully"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm font-semibold mb-2 text-teal-300">MENOPAUSAL WOMEN</div>
                <h3 className="text-2xl font-bold mb-2">Relief from Hot Flashes</h3>
                <p className="text-sm">Instant cooling at the touch of a button</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop" 
                alt="Person meditating"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm font-semibold mb-2 text-teal-300">WELLNESS SEEKERS</div>
                <h3 className="text-2xl font-bold mb-2">Optimize Every Night</h3>
                <p className="text-sm">Track HRV, heart rate, and temperature for longevity</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1541480551145-2370a440d585?w=600&h=400&fit=crop" 
                alt="Person sleeping peacefully"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm font-semibold mb-2 text-teal-300">SNORERS</div>
                <h3 className="text-2xl font-bold mb-2">Less Snoring, More Sleep</h3>
                <p className="text-sm">Smart elevation reduces snoring automatically</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Backing */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Backed by Leading Experts</h2>
            <p className="text-xl text-teal-100">Trusted by top scientists, physicians, and athletes worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-teal-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Peter Attia, M.D.</h3>
              <p className="text-teal-200 text-sm mb-4">Physician & Author of #1 Bestseller Outlive</p>
              <p className="text-sm text-teal-100 italic">
                "Temperature regulation is one of the most underrated factors in sleep quality. Eight Sleep nails it."
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-teal-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Andrew Huberman, Ph.D.</h3>
              <p className="text-teal-200 text-sm mb-4">Stanford Neuroscientist & Podcast Host</p>
              <p className="text-sm text-teal-100 italic">
                "The data Eight Sleep provides gives unprecedented insights into your sleep and recovery patterns."
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-teal-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl">💤</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Matthew Walker, Ph.D.</h3>
              <p className="text-teal-200 text-sm mb-4">UC Berkeley Professor & Author of Why We Sleep</p>
              <p className="text-sm text-teal-100 italic">
                "Cooling the body is scientifically proven to improve deep sleep. Eight Sleep makes it effortless."
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-teal-100 text-lg">
              Supported by <strong className="text-white">50+ clinical studies</strong> on sleep science and temperature regulation
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Results from Real People</h2>
            <p className="text-xl text-gray-600">Join thousands who've transformed their sleep</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I was a hot sleeper that'd wake up 2-3 times a night. This is one of the best investments I ever made. Basically eliminates temperature-based wakeups."
              </p>
              <div className="font-semibold text-gray-900">Jason</div>
              <div className="text-sm text-gray-600">Verified Customer</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Within 3 weeks I started to have big improvements in REM and deep sleep. As a critical care physician, I can't overstate how important this is for recovery."
              </p>
              <div className="font-semibold text-gray-900">Uday</div>
              <div className="text-sm text-gray-600">Physician</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Amazing especially if one partner runs hot, the other cold. You can now tap the side to adjust temp without an app. Game changer especially after hard workouts."
              </p>
              <div className="font-semibold text-gray-900">Martin</div>
              <div className="text-sm text-gray-600">Fitness Enthusiast</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "It really helped during pregnancy to tune to the exact temperature I needed. Now I use it every night and can't imagine sleeping without it."
              </p>
              <div className="font-semibold text-gray-900">Kate</div>
              <div className="text-sm text-gray-600">New Mom</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The Pod has been a huge asset to my work, my training, and my performance as a triathlete. Recovery is everything, and this optimizes it."
              </p>
              <div className="font-semibold text-gray-900">Marni</div>
              <div className="text-sm text-gray-600">Triathlete & Entrepreneur</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I no longer consistently wake up in the middle of night and stay asleep longer. The temperature control is like magic for my sleep quality."
              </p>
              <div className="font-semibold text-gray-900">Lydia</div>
              <div className="text-sm text-gray-600">Wellness Professional</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-gray-600">Everything you need for the ultimate sleep system</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛏️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pod Cover</h3>
                  <p className="text-gray-700">Premium temperature-controlled mattress cover that fits over your existing mattress. Available in all standard sizes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎛️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hub Unit</h3>
                  <p className="text-gray-700">Whisper-quiet temperature control system that sits under your bed. Connects via Wi-Fi for smart features and updates.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mobile App</h3>
                  <p className="text-gray-700">Full control and detailed sleep analytics on iOS and Android. Set schedules, view health metrics, and customize your experience.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Autopilot Membership</h3>
                  <p className="text-gray-700">AI-powered temperature optimization, advanced sleep tracking, and personalized insights. First month included free.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">5-Year Warranty**</h3>
                  <p className="text-gray-700">Comprehensive coverage for peace of mind. Free replacements for any manufacturing defects or performance issues.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Pod</h2>
            <p className="text-xl text-gray-600">Available in all standard mattress sizes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-teal-600 transition">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Queen</h3>
                <div className="text-4xl font-bold text-teal-600 mb-1">$2,295</div>
                <div className="text-gray-600 mb-6">or $64/mo at 0% APR</div>
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition mb-4">
                  Select Queen
                </button>
                <p className="text-sm text-gray-600">Most Popular Size</p>
              </div>
            </div>

            <div className="border-2 border-teal-600 rounded-2xl p-8 relative shadow-lg transform md:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Best Value
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">King</h3>
                <div className="text-4xl font-bold text-teal-600 mb-1">$2,595</div>
                <div className="text-gray-600 mb-6">or $72/mo at 0% APR</div>
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition mb-4">
                  Select King
                </button>
                <p className="text-sm text-gray-600">Ultimate Comfort</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-teal-600 transition">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Cal King</h3>
                <div className="text-4xl font-bold text-teal-600 mb-1">$2,595</div>
                <div className="text-gray-600 mb-6">or $72/mo at 0% APR</div>
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition mb-4">
                  Select Cal King
                </button>
                <p className="text-sm text-gray-600">For Tall Sleepers</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-gray-600">
            <p>Also available in Twin, Twin XL, Full, and Split King sizes</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Sleep?
          </h2>
          <p className="text-xl text-teal-100 mb-8 leading-relaxed">
            Join over 100,000 people who have upgraded their sleep with Eight Sleep. Try it risk-free for 30 nights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-teal-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Shop Now →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-900 transition">
              Schedule a Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-sm">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">✓</div>
              <div className="font-semibold">30-Night Trial</div>
              <div className="text-teal-200">Risk-free money-back guarantee</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">✓</div>
              <div className="font-semibold">Free Shipping</div>
              <div className="text-teal-200">Delivered to your door in days</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">✓</div>
              <div className="font-semibold">Expert Support</div>
              <div className="text-teal-200">Sleep coaches available 7 days/week</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">Will the Pod fit my mattress?</h3>
              <p className="text-gray-700">Yes! The Pod Cover is designed to fit over any mattress up to 16 inches thick. It's available in all standard sizes: Twin, Twin XL, Full, Queen, King, Cal King, and Split King.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">How much does the Autopilot membership cost?</h3>
              <p className="text-gray-700">Autopilot is available in two tiers: Enhanced ($15/month) and Elite ($25/month). Both include AI temperature optimization and sleep tracking. Elite adds advanced health metrics, HRV analysis, and the 5-year warranty. First month is free.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">Is it loud? Will I hear it running?</h3>
              <p className="text-gray-700">No! The Hub unit is designed to be whisper-quiet and sits under your bed. Most users report they can't hear it at all during operation.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">What if my partner and I want different temperatures?</h3>
              <p className="text-gray-700">Perfect! The Pod has dual-zone climate control, allowing each side of the bed to be set to completely different temperatures. Each person controls their own side via the app or bedside controls.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">What's your return policy?</h3>
              <p className="text-gray-700">Try the Pod risk-free for 30 nights. If you don't love it, return it for a full refund. We'll arrange free pickup and handle all the logistics.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">Is it HSA/FSA eligible?</h3>
              <p className="text-gray-700">Yes! The Eight Sleep Pod is HSA and FSA eligible. We provide the necessary documentation for reimbursement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated on Sleep Science</h2>
          <p className="text-teal-100 mb-8 text-lg">
            Get exclusive tips, research insights, and special offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-lg font-semibold whitespace-nowrap transition">
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
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/category/sleep" className="hover:text-white">Sleep Optimization</Link></li>
                <li><Link href="#" className="hover:text-white">All Products</Link></li>
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
                <li><a href="#" className="hover:text-white">Affiliate Disclosure</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p className="mb-2">** 5-year warranty requires Autopilot Elite membership</p>
            <p>© 2024 Next Wave Wellness. Information provided for educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
