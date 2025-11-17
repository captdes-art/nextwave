'use client'

import Header from "@/components/Header"
import Link from "next/link"

export default function MuseS() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 px-6 max-w-7xl mx-auto">
        <Link href="/category/sleep" className="text-teal-600 hover:text-teal-700 text-sm">
          ← Back to Sleep Optimization
        </Link>
      </section>

      {/* Hero Section */}
      <section className="pb-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-teal-600 font-semibold mb-2">Sleep & Meditation</p>
            <h1 className="text-5xl font-bold mb-4">Muse S Headband (Gen 2)</h1>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Fall asleep faster and meditate deeper with the world's first brain-sensing headband.
              Experience guided sleep journeys that respond to your mind in real-time.
            </p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-teal-600">$399</span>
              <span className="text-gray-600">No subscription required</span>
            </div>
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 text-lg">
              Get Your Muse S Headband
            </button>
            <p className="text-sm text-gray-500 mt-4">
              * Affiliate link - Supporting Next Wave Wellness helps us bring you more great content
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-9xl">🧘‍♀️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Can't Turn Your Mind Off at Night?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              You're not alone. Over 70 million Americans struggle with sleep, lying awake as thoughts race through their minds.
              Traditional sleep aids leave you groggy, and counting sheep just doesn't cut it anymore.
            </p>
            <div className="bg-gray-800/50 backdrop-blur p-8 rounded-xl border border-gray-700">
              <p className="text-2xl font-semibold text-teal-400 mb-4">What if you could actually measure your brain activity and use it to guide you into deep, restorative sleep?</p>
              <p className="text-gray-300 text-lg">
                That's exactly what Muse S does. It's not just another sleep tracker—it's a personal sleep coach that reads your brain waves and responds in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Sleep Technology That Actually Works</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Backed by neuroscience, validated by users, and designed for results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "EEG Brain Sensing",
                desc: "Advanced sensors track your brain activity, heart rate, breathing, and body movement—the same technology used in sleep labs"
              },
              {
                icon: "💤",
                title: "Digital Sleeping Pills",
                desc: "Guided sleep journeys that respond to your brain in real-time, helping you fall asleep faster and stay asleep longer"
              },
              {
                icon: "🎵",
                title: "Responsive Soundscapes",
                desc: "Soothing sounds that adjust dynamically based on your brain activity—when your mind wanders, the audio gently guides you back"
              },
              {
                icon: "📊",
                title: "Sleep Stage Tracking",
                desc: "Detailed insights into your light, deep, and REM sleep stages to help you optimize your sleep quality"
              },
              {
                icon: "🧘",
                title: "Meditation Training",
                desc: "Real-time feedback during meditation helps you build focus and calm—hear gentle sounds when your mind is calm, encouraging tones when it wanders"
              },
              {
                icon: "☁️",
                title: "Ultra-Comfortable Design",
                desc: "Soft, machine-washable fabric headband designed for all-night comfort—you'll forget you're wearing it"
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How Muse S Guides You to Sleep</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Wear It to Bed",
                desc: "Put on the comfortable fabric headband and select a sleep journey from the app. Choose from nature soundscapes, bedtime stories, or breathing exercises."
              },
              {
                step: "2",
                title: "Your Brain Guides the Journey",
                desc: "As you relax, Muse S reads your brain activity in real-time. The audio responds to your mental state, providing more guidance when you need it and fading away as you settle."
              },
              {
                step: "3",
                title: "Wake Up Refreshed",
                desc: "Track your sleep stages, heart rate, and breathing patterns overnight. Review detailed insights in the morning to understand and improve your sleep quality."
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-teal-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Transform Your Sleep, Transform Your Life</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Users report significant improvements within the first two weeks
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "⚡",
                title: "Fall Asleep 44% Faster",
                desc: "Real users report significantly reduced time to fall asleep using Muse S guided sleep journeys"
              },
              {
                icon: "🌙",
                title: "Deeper, More Restorative Sleep",
                desc: "Track and optimize your deep sleep phases for better recovery and daytime energy"
              },
              {
                icon: "🎯",
                title: "Improved Focus & Clarity",
                desc: "Better sleep means sharper thinking, enhanced creativity, and improved decision-making"
              },
              {
                icon: "😌",
                title: "Reduced Stress & Anxiety",
                desc: "Build meditation skills with real-time feedback that helps you achieve deeper states of calm"
              },
              {
                icon: "💊",
                title: "Natural Sleep Support",
                desc: "No drugs, no side effects—just neuroscience-backed technology working with your brain's natural rhythms"
              },
              {
                icon: "📈",
                title: "Measurable Progress",
                desc: "Track your improvements over time with detailed sleep and meditation metrics"
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Muse S Stands Apart</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🔬",
                title: "Clinically Validated Technology",
                desc: "Uses the same EEG sensors trusted by sleep labs and research institutions worldwide"
              },
              {
                icon: "🔋",
                title: "Multi-Night Battery Life",
                desc: "Up to 10 hours of continuous use—charge it every few days, not every night"
              },
              {
                icon: "🌊",
                title: "100+ Sleep & Meditation Content",
                desc: "Extensive library of guided experiences, from sleep stories to breathwork to soundscapes"
              },
              {
                icon: "📱",
                title: "Seamless App Integration",
                desc: "Beautifully designed iOS and Android apps with detailed analytics and progress tracking"
              },
              {
                icon: "🧼",
                title: "Machine Washable",
                desc: "Remove the sensors and toss the fabric band in the wash—sleep hygiene made easy"
              },
              {
                icon: "🎁",
                title: "No Subscription Required",
                desc: "One-time purchase includes lifetime access to core features—premium content available optionally"
              },
            ].map((reason, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-4xl flex-shrink-0">{reason.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Muse S vs. Traditional Sleep Solutions</h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-teal-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Muse S</th>
                    <th className="px-6 py-4 text-center">Sleep Apps</th>
                    <th className="px-6 py-4 text-center">Sleep Medication</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Real-time brain sensing", muse: "✓", apps: "✗", meds: "✗" },
                    { feature: "Tracks sleep stages", muse: "✓", apps: "~", meds: "✗" },
                    { feature: "No side effects", muse: "✓", apps: "✓", meds: "✗" },
                    { feature: "Personalized feedback", muse: "✓", apps: "✗", meds: "✗" },
                    { feature: "Builds meditation skills", muse: "✓", apps: "~", meds: "✗" },
                    { feature: "One-time cost", muse: "✓", apps: "~", meds: "✗" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-2xl text-teal-600">{row.muse}</td>
                      <td className="px-6 py-4 text-center text-2xl text-gray-400">{row.apps}</td>
                      <td className="px-6 py-4 text-center text-2xl text-gray-400">{row.meds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Join the community of people who've transformed their sleep
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "I've struggled with insomnia for years. Muse S is the first thing that's actually helped me fall asleep without medication. The real-time feedback is incredible.",
                name: "Sarah M.",
                role: "Teacher"
              },
              {
                quote: "As a neuroscientist, I was skeptical at first. But the EEG technology is legitimate, and the sleep journeys really work. I track my data and see real improvements.",
                name: "Dr. James K.",
                role: "Neuroscientist"
              },
              {
                quote: "The meditation feedback has taken my practice to the next level. I can feel when my mind is calm, and now the headband confirms it. Game changer.",
                name: "Michael R.",
                role: "Entrepreneur"
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl">
                <div className="text-teal-600 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">{testimonial.quote}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Common Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "Is it comfortable to sleep in?",
                a: "Yes! Muse S is designed specifically for overnight wear. The soft fabric headband is much more comfortable than hard plastic sleep trackers. Most users forget they're wearing it within minutes."
              },
              {
                q: "Do I need a subscription?",
                a: "No subscription is required for core features. You get lifetime access to sleep tracking, meditation sessions, and basic content. Optional premium membership unlocks additional sleep journeys and advanced features."
              },
              {
                q: "How is this different from a regular sleep tracker?",
                a: "Most sleep trackers just record data. Muse S actively helps you fall asleep using real-time brain sensing. It's the difference between a fitness tracker and a personal trainer."
              },
              {
                q: "Will it work for me if I've tried everything?",
                a: "Muse S uses clinical-grade EEG technology—the same technology used in sleep labs. If your brain can respond to gentle audio cues (which most can), Muse S can help guide you to sleep. Plus, there's a 30-day money-back guarantee."
              },
              {
                q: "How long does the battery last?",
                a: "The battery lasts up to 10 hours of continuous use, which means you can use it for multiple nights before needing to recharge."
              },
              {
                q: "Can I use it just for meditation?",
                a: "Absolutely! Many users purchase Muse S specifically for the meditation feedback features. It's equally powerful for building mindfulness skills during the day."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Best Sleep Ever?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands who've discovered the power of brain-sensing sleep technology
          </p>

          <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left flex-1">
                <p className="text-sm text-teal-200 mb-1">Limited Time Offer</p>
                <p className="text-3xl font-bold mb-2">$399 <span className="text-xl text-teal-200 line-through ml-2">$449</span></p>
                <p className="text-teal-100 text-sm">Free shipping • 30-day guarantee • No subscription</p>
              </div>
              <button className="bg-white text-teal-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 text-lg shadow-xl">
                Get Muse S Now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-3 justify-center">
              <span className="text-2xl">✓</span>
              <span>Free shipping worldwide</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <span className="text-2xl">✓</span>
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <span className="text-2xl">✓</span>
              <span>1-year warranty included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            {[
              { text: "Clinically Validated", icon: "🔬" },
              { text: "FDA Registered", icon: "✓" },
              { text: "100K+ Users", icon: "👥" },
              { text: "4.5★ Rating", icon: "⭐" },
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-4xl mb-2">{badge.icon}</div>
                <p className="font-semibold text-gray-700">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Sleep Better Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Get science-backed sleep tips, meditation techniques, and exclusive offers
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded border border-gray-300"
            />
            <button className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded text-white font-semibold">
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
                <li><a href="#" className="hover:text-white">Fitness Tracking</a></li>
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
            <p className="mt-2 text-xs text-gray-500">Affiliate Disclosure: We may earn a commission from purchases made through our links.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
