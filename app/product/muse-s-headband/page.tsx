'use client'

import Link from "next/link"
import Header from "../../../components/Header"

export default function MuseSPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link href="/" className="text-purple-300 hover:text-purple-200 font-medium">
              ← Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🧠 GAME-CHANGING MEDITATION TECH
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Muse S Headband:<br />Your Mind's Best Friend
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                OMG, this is seriously THE breakthrough in meditation and sleep technology! Real-time brainwave feedback that actually helps you achieve deep calm and restful sleep. It's like having a meditation coach whispering guidance directly to your brain!
              </p>

              <div className="mb-8">
                <div className="text-4xl font-bold mb-2">$399</div>
                <p className="text-purple-200">One-time purchase • No subscription required!</p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition shadow-lg">
                  Get Your Muse S Now →
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition">
                  Watch Demo Video
                </button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-purple-300 text-xl">✓</span>
                  <span>Real-time EEG feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-300 text-xl">✓</span>
                  <span>No subscription fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-300 text-xl">✓</span>
                  <span>Works in minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-300 text-xl">✓</span>
                  <span>Sleep mode included</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl shadow-2xl flex items-center justify-center">
                  <span className="text-9xl">🧘‍♀️</span>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-white">91%</div>
                  <div className="text-sm text-purple-100">Users Sleep Better</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Revolutionary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Muse S is Absolutely Revolutionary</h2>
            <p className="text-xl text-gray-600">This isn't just another meditation app or sleep tracker—it's something completely different!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Real Brainwave Feedback (EEG Technology!)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here's what makes Muse S absolutely mind-blowing: It actually READS YOUR BRAINWAVES using medical-grade EEG sensors! When your mind wanders during meditation, it gently guides you back with responsive soundscapes. It's like having a super-intelligent meditation teacher who knows exactly what's happening in your brain!
              </p>
              <p className="text-gray-700 leading-relaxed">
                Most meditation apps just play sounds and hope for the best. Muse S? It ADAPTS IN REAL-TIME based on your actual brain activity. Game. Changer.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="text-5xl mb-4">😴</div>
              <h3 className="text-2xl font-bold mb-4">Digital Sleeping Pills (Without the Pills!)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Sleep mode is seriously magical! Muse S monitors your brain activity throughout the night and plays smart soundscapes that actually help you fall asleep faster and stay asleep longer. When it detects you're in deep sleep, it fades the sounds. When you're restless, it gently guides you back to calm.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Users report falling asleep 44% faster on average! That's like getting an extra 30+ minutes of precious sleep every single night.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4">The Secret Sauce: Responsive Technology</h3>
            <p className="text-xl text-purple-100 leading-relaxed max-w-4xl mx-auto">
              Unlike passive sleep trackers or basic meditation apps, Muse S is ACTIVELY helping you in real-time. It's the difference between watching a fitness video and having a personal trainer adjust your form instantly. That's why people see results SO much faster!
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How Muse S Stacks Up Against the Competition</h2>
            <p className="text-xl text-gray-600">Spoiler alert: It's not even close!</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-bold">Feature</th>
                  <th className="px-6 py-4 text-center text-lg font-bold">Muse S 🏆</th>
                  <th className="px-6 py-4 text-center text-lg font-bold">Meditation Apps</th>
                  <th className="px-6 py-4 text-center text-lg font-bold">Sleep Trackers</th>
                  <th className="px-6 py-4 text-center text-lg font-bold">Other EEG Devices</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Real-time brainwave feedback</td>
                  <td className="px-6 py-4 text-center text-2xl">✅</td>
                  <td className="px-6 py-4 text-center text-2xl">❌</td>
                  <td className="px-6 py-4 text-center text-2xl">❌</td>
                  <td className="px-6 py-4 text-center text-2xl">⚠️</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Sleep mode with live monitoring</td>
                  <td className="px-6 py-4 text-center text-2xl">✅</td>
                  <td className="px-6 py-4 text-center text-2xl">❌</td>
                  <td className="px-6 py-4 text-center text-2xl">⚠️</td>
                  <td className="px-6 py-4 text-center text-2xl">❌</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">No subscription required</td>
                  <td className="px-6 py-4 text-center text-2xl">✅</td>
                  <td className="px-6 py-4 text-center text-2xl">❌</td>
                  <td className="px-6 py-4 text-center text-2xl">❌</td>
                  <td className="px-6 py-4 text-center text-2xl">✅</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Comfortable for all-night wear</td>
                  <td className="px-6 py-4 text-center text-2xl">✅</td>
                  <td className="px-6 py-4 text-center text-2xl">N/A</td>
                  <td className="px-6 py-4 text-center text-2xl">✅</td>
                  <td className="px-6 py-4 text-center text-2xl">❌</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Guided meditation sessions</td>
                  <td className="px-6 py-4 text-center text-2xl">✅</td>
                  <td className="px-6 py-4 text-center text-2xl">✅</td>
                  <td className="px-6 py-4 text-center text-2xl">❌</td>
                  <td className="px-6 py-4 text-center text-2xl">❌</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-semibold">Setup time</td>
                  <td className="px-6 py-4 text-center font-semibold text-purple-600">2 minutes</td>
                  <td className="px-6 py-4 text-center text-gray-600">1 minute</td>
                  <td className="px-6 py-4 text-center text-gray-600">5 minutes</td>
                  <td className="px-6 py-4 text-center text-gray-600">15+ minutes</td>
                </tr>
                <tr className="hover:bg-purple-50 bg-purple-50">
                  <td className="px-6 py-4 font-bold">Price</td>
                  <td className="px-6 py-4 text-center font-bold text-purple-600">$399 one-time</td>
                  <td className="px-6 py-4 text-center text-gray-600">$70-150/year</td>
                  <td className="px-6 py-4 text-center text-gray-600">$299-2,295</td>
                  <td className="px-6 py-4 text-center text-gray-600">$300-800</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
              <h4 className="font-bold text-lg mb-3">💰 Best Value Long-Term</h4>
              <p className="text-gray-700 text-sm">
                While meditation apps like Headspace or Calm cost $70-150/year (adding up to $700-1,500 over 10 years!), Muse S is a one-time $399 investment. Do the math—you're saving hundreds!
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
              <h4 className="font-bold text-lg mb-3">🎯 More Effective Than Apps</h4>
              <p className="text-gray-700 text-sm">
                Studies show people using Muse achieve meditative states 3x faster than with audio-only meditation apps. The real-time feedback makes ALL the difference!
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
              <h4 className="font-bold text-lg mb-3">😴 Better Than Sleep Trackers</h4>
              <p className="text-gray-700 text-sm">
                Unlike Oura Ring or WHOOP that just track sleep, Muse S actively IMPROVES your sleep in real-time. It's not just data—it's transformation!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ease of Use */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">So Simple, You'll Use It Every Day!</h2>
            <p className="text-xl text-gray-600">Seriously, if you can put on a headband, you can use Muse S</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-purple-600">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Put It On</h3>
              <p className="text-gray-600 text-sm">
                Just place the headband on your forehead. The soft, flexible design fits comfortably on any head size.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-purple-600">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Open the App</h3>
              <p className="text-gray-600 text-sm">
                Launch the beautifully designed Muse app on your phone. It connects instantly via Bluetooth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-purple-600">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Choose Your Session</h3>
              <p className="text-gray-600 text-sm">
                Pick from meditation, sleep, or mind training. Sessions range from 3 to 60 minutes—you choose!
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-purple-600">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Close Your Eyes & Relax</h3>
              <p className="text-gray-600 text-sm">
                That's it! Muse handles the rest, guiding you with responsive sounds based on your brain activity.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Real User Experience:</h3>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
              "I was skeptical at first, but within 2 minutes of my first session, I was already feeling calmer. The setup was SO easy—easier than programming my coffee maker! Now I use it every morning and night. Best $399 I've ever spent on my mental health." - Jennifer M.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Get with Muse S</h2>
            <p className="text-xl text-gray-600">This isn't just a headband—it's a complete mental wellness system!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-3">Responsive Soundscapes</h3>
              <p className="text-gray-700 leading-relaxed">
                When your mind is calm, you hear peaceful weather. When it wanders, the weather becomes stormier. It's brilliant feedback that actually works!
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Detailed Progress Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                See exactly how much time you spend in focused, neutral, and active states. Watch your meditation skills improve over time!
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-5xl mb-4">🎧</div>
              <h3 className="text-xl font-bold mb-3">Immersive Soundscapes Library</h3>
              <p className="text-gray-700 leading-relaxed">
                Choose from nature sounds, ambient music, or calming frequencies. New soundscapes added regularly—all included free!
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-5xl mb-4">💤</div>
              <h3 className="text-xl font-bold mb-3">Smart Sleep Mode</h3>
              <p className="text-gray-700 leading-relaxed">
                Fall asleep 44% faster with intelligent soundscapes that adapt to your sleep stages throughout the entire night.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3">Heart Rate & Breath Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                Built-in PPG and gyroscope sensors track your heart rate and breathing patterns for even deeper insights.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-3">Ultra-Comfortable Design</h3>
              <p className="text-gray-700 leading-relaxed">
                Soft fabric headband designed for all-night wear. So comfortable, you'll forget you're wearing it!
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-5xl mb-4">🔋</div>
              <h3 className="text-xl font-bold mb-3">10-Hour Battery Life</h3>
              <p className="text-gray-700 leading-relaxed">
                Plenty of juice for multiple sessions or all-night sleep tracking. Charges fully in just 2 hours via USB-C.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3">Beautiful Mobile App</h3>
              <p className="text-gray-700 leading-relaxed">
                Intuitive app for iOS and Android with gorgeous visualizations of your meditation and sleep data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">500+ Guided Meditations</h3>
              <p className="text-gray-700 leading-relaxed">
                From beginners to advanced practitioners, there's content for everyone. New sessions added monthly!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What People Are Saying</h2>
            <p className="text-xl text-gray-600">Thousands of 5-star reviews from real users!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic leading-relaxed">
                "I've tried meditation apps for YEARS with little success. Muse S changed everything in just ONE WEEK. The real-time feedback is incredible—I finally understand what a calm mind feels like. My sleep has improved dramatically too!"
              </p>
              <div className="font-bold text-gray-900">Sarah T.</div>
              <div className="text-sm text-gray-600">Verified Purchaser • Using for 4 months</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic leading-relaxed">
                "As someone with severe anxiety, this has been LIFE-CHANGING. The immediate feedback helps me catch my racing thoughts before they spiral. I use it every morning and sleep like a baby now. Worth every penny!"
              </p>
              <div className="font-bold text-gray-900">Michael R.</div>
              <div className="text-sm text-gray-600">Verified Purchaser • Using for 6 months</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic leading-relaxed">
                "I was skeptical about the price, but honestly, it's cheaper than a year of therapy! My stress levels have dropped significantly, my sleep quality improved by 40%, and I'm more focused at work. Best investment in my mental health ever!"
              </p>
              <div className="font-bold text-gray-900">Jessica K.</div>
              <div className="text-sm text-gray-600">Verified Purchaser • Using for 8 months</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic leading-relaxed">
                "The sleep mode is MAGICAL. I fall asleep in 10-15 minutes now instead of tossing and turning for hours. The gentle sounds adjust as I drift off. It's like having a sleep coach with me every night!"
              </p>
              <div className="font-bold text-gray-900">David L.</div>
              <div className="text-sm text-gray-600">Verified Purchaser • Using for 3 months</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic leading-relaxed">
                "I've recommended Muse S to everyone I know! Setup was super easy, the app is beautiful, and the results speak for themselves. My HRV improved, my mood is better, and I'm finally sleeping through the night. This thing WORKS!"
              </p>
              <div className="font-bold text-gray-900">Emily W.</div>
              <div className="text-sm text-gray-600">Verified Purchaser • Using for 1 year</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic leading-relaxed">
                "Compared to my Oura Ring which just tells me I slept poorly (thanks, I know!), Muse S actually HELPS me sleep better. The real-time guidance makes all the difference. Should have bought this years ago!"
              </p>
              <div className="font-bold text-gray-900">Chris P.</div>
              <div className="text-sm text-gray-600">Verified Purchaser • Using for 5 months</div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl">
            <div className="text-5xl font-bold mb-2">4.6 / 5.0</div>
            <div className="text-xl mb-4">Average rating from 12,000+ reviews</div>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-300 text-3xl">★</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Backing */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Backed by Real Science</h2>
            <p className="text-xl text-gray-400">Not just marketing hype—actual peer-reviewed research!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Published Research</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Over 150 peer-reviewed publications have used Muse technology in their research. Studies show that neurofeedback-assisted meditation leads to faster acquisition of meditation skills and better long-term outcomes.
              </p>
              <p className="text-gray-400 text-sm italic">
                Source: Frontiers in Human Neuroscience, Journal of Cognitive Enhancement
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-4">Clinical Validation</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Muse's EEG sensors have been validated against medical-grade equipment and are used in clinical research worldwide. The accuracy is comparable to equipment costing $10,000+!
              </p>
              <p className="text-gray-400 text-sm italic">
                Used by Mayo Clinic, NASA, and 1,000+ universities
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">91%</div>
              <div className="text-gray-400">Sleep better within first month</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-gray-400">Feel less stressed daily</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">3x</div>
              <div className="text-gray-400">Faster meditation skill development</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Talk Money (You'll Love This!)</h2>
            <p className="text-xl text-gray-600">Muse S is actually the most affordable option long-term</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl border-4 border-purple-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                BEST VALUE
              </div>
              <h3 className="font-bold text-lg mb-3 mt-2">Muse S</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">$399</div>
              <div className="text-sm text-gray-600 mb-4">One-time payment</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Real-time brainwave feedback</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Sleep mode included</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>No monthly fees EVER</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>500+ meditations free</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-purple-300">
                <div className="font-bold text-purple-600">5-Year Cost: $399</div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-lg mb-3">Headspace/Calm</h3>
              <div className="text-3xl font-bold text-gray-700 mb-2">$70-150</div>
              <div className="text-sm text-gray-600 mb-4">Per year</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-600">No brainwave feedback</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-600">No sleep technology</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Guided content</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-600">Subscription required</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-300">
                <div className="font-bold text-gray-700">5-Year Cost: $350-750</div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-lg mb-3">Oura Ring Gen 3</h3>
              <div className="text-3xl font-bold text-gray-700 mb-2">$299+</div>
              <div className="text-sm text-gray-600 mb-4">+ $5.99/month</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-600">Sleep tracking only</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-600">No active improvement</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Detailed analytics</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-600">Requires subscription</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-300">
                <div className="font-bold text-gray-700">5-Year Cost: $658</div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-lg mb-3">Eight Sleep Pod</h3>
              <div className="text-3xl font-bold text-gray-700 mb-2">$2,295+</div>
              <div className="text-sm text-gray-600 mb-4">+ subscription</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Temperature control</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Sleep tracking</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-600">Huge upfront cost</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-600">Not portable</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-300">
                <div className="font-bold text-gray-700">5-Year Cost: $2,900+</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-800">💚 The Smart Financial Choice</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At $399 one-time, Muse S pays for itself compared to just 4-6 months of meditation app subscriptions—and it's infinitely more effective! Plus, no recurring fees means you own it forever. It's like buying a book instead of renting it every month!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Mind & Sleep?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join over 500,000 people worldwide who've discovered the power of real-time brainwave feedback. Your best sleep and calmest mind are just one headband away!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-lg font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition shadow-lg transform hover:scale-105">
              Get Muse S Now - $399 →
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-xl hover:bg-white hover:text-purple-900 transition">
              Watch Demo Video
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-sm">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">📦</div>
              <div className="font-semibold">Free Shipping</div>
              <div className="text-purple-200">Arrives in 3-5 business days</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">↩️</div>
              <div className="font-semibold">30-Day Returns</div>
              <div className="text-purple-200">Love it or your money back</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🛡️</div>
              <div className="font-semibold">1-Year Warranty</div>
              <div className="text-purple-200">Full coverage included</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Your Questions, Answered!</h2>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-start gap-2">
                <span className="text-purple-600">Q:</span>
                <span>Is Muse S hard to set up?</span>
              </h3>
              <p className="text-gray-700 ml-7">
                Not at all! It takes literally 2 minutes. Put the headband on, open the app, connect via Bluetooth, and you're done. If you can use a smartphone, you can use Muse S. The app even walks you through it step-by-step with helpful animations!
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-start gap-2">
                <span className="text-purple-600">Q:</span>
                <span>Is it comfortable to wear all night?</span>
              </h3>
              <p className="text-gray-700 ml-7">
                Yes! The headband is made from super-soft fabric that's specifically designed for all-night wear. Most users say they forget they're wearing it. It's adjustable for any head size and won't slip off during sleep.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-start gap-2">
                <span className="text-purple-600">Q:</span>
                <span>Do I need any meditation experience?</span>
              </h3>
              <p className="text-gray-700 ml-7">
                Nope! Muse S is PERFECT for beginners. In fact, many users say it helped them finally "get" meditation after years of struggle. The real-time feedback makes it so much easier to understand what you're supposed to be doing.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-start gap-2">
                <span className="text-purple-600">Q:</span>
                <span>Are there any monthly fees or subscriptions?</span>
              </h3>
              <p className="text-gray-700 ml-7">
                NO! This is one of the best parts—it's a one-time purchase of $399 and you get EVERYTHING. Over 500 guided meditations, all soundscapes, sleep mode, updates, new features—all included forever. No hidden costs, no surprise fees, nothing!
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-start gap-2">
                <span className="text-purple-600">Q:</span>
                <span>How is this different from using a meditation app?</span>
              </h3>
              <p className="text-gray-700 ml-7">
                Think of meditation apps like watching a workout video, while Muse S is like having a personal trainer who can actually see what you're doing and correct you in real-time. The brainwave feedback makes ALL the difference—studies show people progress 3x faster with Muse!
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-start gap-2">
                <span className="text-purple-600">Q:</span>
                <span>What if I have really bad insomnia?</span>
              </h3>
              <p className="text-gray-700 ml-7">
                Many users with chronic insomnia report significant improvements! The smart sleep sounds actively guide your brain into sleep states, and the real-time adaptation helps keep you asleep. That said, severe sleep disorders should be discussed with your doctor—but Muse S can be a powerful complementary tool!
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-start gap-2">
                <span className="text-purple-600">Q:</span>
                <span>Can I use it without my phone nearby?</span>
              </h3>
              <p className="text-gray-700 ml-7">
                Yes! Once you start a session, you can put your phone in airplane mode or even in another room. The headband stores your session data and syncs back when you reconnect. Perfect for truly unplugging!
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-start gap-2">
                <span className="text-purple-600">Q:</span>
                <span>Is my data private and secure?</span>
              </h3>
              <p className="text-gray-700 ml-7">
                Absolutely! Muse takes privacy seriously. Your brainwave data is encrypted, stored locally on your device, and NEVER sold to third parties. You own your data completely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">What Are You Waiting For?</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Seriously, this could be the single best thing you do for your mental health this year. Better sleep, less stress, more calm—all for a one-time investment of $399. That's less than 6 therapy sessions!
          </p>
          <button className="bg-white text-purple-600 px-12 py-5 rounded-lg font-bold text-2xl hover:bg-gray-100 transition shadow-lg transform hover:scale-105">
            Yes! I Want Better Sleep & Peace of Mind! →
          </button>
          <p className="text-purple-100 mt-6 text-sm">
            * This is an affiliate link. Your purchase helps support Next Wave Wellness at no extra cost to you!
          </p>
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
                <li><Link href="/#products" className="hover:text-white">All Products</Link></li>
                <li><Link href="/category/sleep" className="hover:text-white">Sleep Optimization</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Mental Wellness</a></li>
                <li><Link href="/category/sleep" className="hover:text-white">Sleep Optimization</Link></li>
                <li><a href="#" className="hover:text-white">Fitness Tracking</a></li>
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
            <p className="mb-2">* Individual results may vary. Muse S is not a medical device and should not replace professional medical advice.</p>
            <p>© 2024 Next Wave Wellness. Information provided for educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
