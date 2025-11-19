'use client'

import Link from "next/link"
import Header from "@/components/Header"

export default function WhoopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link href="/category/sleep" className="text-teal-400 hover:text-teal-300 font-medium">
              ← Back to Sleep Optimization
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                🏆 Trusted by Elite Athletes & PHDs
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                WHOOP 4.0
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The wearable proven to build better health. 24/7 monitoring of sleep, strain, recovery, and stress with personalized coaching to optimize your performance every day.
              </p>
              
              <div className="mb-8">
                <div className="text-4xl font-bold mb-2">Starting at $199</div>
                <p className="text-gray-400">Plus membership from $12/month</p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition">
                  Join WHOOP →
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition">
                  Try Free for 1 Month
                </button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 text-xl">✓</span>
                  <span>1-Month Free Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 text-xl">✓</span>
                  <span>HSA/FSA Eligible</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 text-xl">✓</span>
                  <span>Screen-Free Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 text-xl">✓</span>
                  <span>5-Day Battery Life</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&h=600&fit=crop" 
                  alt="WHOOP 4.0 fitness tracker on wrist"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-teal-600 p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-teal-100">Health Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Results from Daily Wear</h2>
            <p className="text-xl text-gray-600">Real health improvements backed by data</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-5xl font-bold text-teal-600 mb-3">91 min</div>
              <div className="text-gray-900 font-semibold mb-2">More Weekly Activity</div>
              <div className="text-sm text-gray-600">Members stay active longer with daily insights</div>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-5xl font-bold text-teal-600 mb-3">2.3 hrs</div>
              <div className="text-gray-900 font-semibold mb-2">More Sleep Per Week</div>
              <div className="text-sm text-gray-600">Better sleep habits lead to better recovery</div>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-5xl font-bold text-teal-600 mb-3">10%+</div>
              <div className="text-gray-900 font-semibold mb-2">Higher HRV</div>
              <div className="text-sm text-gray-600">Improved stress resilience and recovery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Complete Health Picture</h2>
            <p className="text-xl text-gray-600">24/7 monitoring across every metric that matters</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Recovery Score</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wake up to a daily Recovery score (0-100%) that tells you how ready your body is to perform. Based on HRV, resting heart rate, sleep performance, and respiratory rate.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm font-semibold text-gray-600 mb-2">What it measures:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Heart Rate Variability (HRV)</li>
                  <li>• Resting Heart Rate</li>
                  <li>• Sleep Quality & Duration</li>
                  <li>• Respiratory Rate</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💤</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sleep Performance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Get detailed analysis of your sleep stages, efficiency, and consistency. Understand exactly what's helping or hurting your rest with personalized recommendations.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm font-semibold text-gray-600 mb-2">Sleep insights include:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sleep Stages (REM, Deep, Light)</li>
                  <li>• Sleep Efficiency & Consistency</li>
                  <li>• Time Awake & Disturbances</li>
                  <li>• Sleep Debt Tracking</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Strain Score</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Quantify your daily cardiovascular load on a 0-21 scale. Track every workout, activity, and stressor to optimize your training and avoid overtraining.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm font-semibold text-gray-600 mb-2">Strain tracking:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Auto-detected workouts</li>
                  <li>• Cardiovascular load measurement</li>
                  <li>• Optimal strain recommendations</li>
                  <li>• 80+ activity types tracked</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🧘</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Stress Monitor</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Real-time stress tracking throughout the day helps you understand when your body is in fight-or-flight mode versus recovery. Get notified and take action.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm font-semibold text-gray-600 mb-2">Stress features:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Continuous stress monitoring</li>
                  <li>• High stress notifications</li>
                  <li>• Recovery recommendations</li>
                  <li>• Stress patterns analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Advanced Health Insights</h2>
            <p className="text-xl text-gray-600">Professional-grade metrics for serious optimization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3">Heart Health Monitoring</h3>
              <p className="text-gray-700 leading-relaxed">
                Track your heart rate 24/7 with medical-grade accuracy. Get alerts for irregular rhythms, elevated resting heart rate, and unusual patterns.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🫁</div>
              <h3 className="text-xl font-bold mb-3">Respiratory Rate</h3>
              <p className="text-gray-700 leading-relaxed">
                Monitor breaths per minute during sleep to detect early signs of illness or changes in fitness level before you feel symptoms.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">VO2 Max Estimation</h3>
              <p className="text-gray-700 leading-relaxed">
                Track your cardiovascular fitness with VO2 max estimates. See how your aerobic capacity improves over time with training.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold mb-3">Skin Temperature</h3>
              <p className="text-gray-700 leading-relaxed">
                Monitor deviations in skin temperature that can indicate illness, hormonal changes, or environmental factors affecting your health.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-3">Blood Oxygen (SpO2)</h3>
              <p className="text-gray-700 leading-relaxed">
                Track blood oxygen saturation during sleep to understand respiratory health and identify potential sleep-related breathing issues.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3">Cycle Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                Women's Hormonal Insights predict menstrual phases and show how your cycle affects sleep, recovery, and training capacity.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="text-xl font-bold mb-3">Blood Pressure Insights</h3>
              <p className="text-gray-700 leading-relaxed">
                New beta feature provides daily blood pressure insights to help you understand cardiovascular health trends over time.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Healthspan Assessment</h3>
              <p className="text-gray-700 leading-relaxed">
                Understand your biological age and get personalized recommendations to extend your healthy years and optimize longevity.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold mb-3">WHOOP Advanced Labs</h3>
              <p className="text-gray-700 leading-relaxed">
                Order blood tests from home and see results directly in the WHOOP app with personalized insights on key biomarkers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Wearability */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built to Be Worn 24/7</h2>
            <p className="text-xl text-gray-400">Designed for continuous wear without compromise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📵</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Zero Distractions</h3>
              <p className="text-gray-400 text-sm">
                Screen-free design means no pings, notifications, or unnecessary distractions. Just pure data collection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔋</span>
              </div>
              <h3 className="text-xl font-bold mb-3">5-Day Battery</h3>
              <p className="text-gray-400 text-sm">
                Long-lasting battery with wireless charging. Charge for 90 minutes to get a full 5 days of monitoring.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💧</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Water Resistant</h3>
              <p className="text-gray-400 text-sm">
                Waterproof up to 10 meters. Wear it in the shower, pool, ocean—anywhere your life takes you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Endless Styles</h3>
              <p className="text-gray-400 text-sm">
                Swap bands instantly. Choose from sport, performance, or luxury leather options to match any occasion.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">One Device, Endless Ways to Wear It</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl mb-2">💪</div>
                <div className="text-sm font-semibold">SuperKnit</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl mb-2">🏃</div>
                <div className="text-sm font-semibold">SportFlex</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl mb-2">☁️</div>
                <div className="text-sm font-semibold">CloudKnit</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl mb-2">🎩</div>
                <div className="text-sm font-semibold">LeatherLuxe</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl mb-2">👕</div>
                <div className="text-sm font-semibold">WHOOP Body</div>
              </div>
            </div>
            <p className="text-gray-400 mt-6 text-sm">Wear it on your wrist, bicep, or integrate into sports bras and compression tops</p>
          </div>
        </div>
      </section>

      {/* Elite Users */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Backed by PHDs, Worn by MVPs</h2>
            <p className="text-xl text-gray-600">Trusted by world-class athletes and health professionals</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">⚽</span>
              </div>
              <div className="font-bold text-sm">Cristiano Ronaldo</div>
              <div className="text-xs text-gray-600">Football Legend</div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🏈</span>
              </div>
              <div className="font-bold text-sm">Patrick Mahomes</div>
              <div className="text-xs text-gray-600">NFL Quarterback</div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🎾</span>
              </div>
              <div className="font-bold text-sm">Aryna Sabalenka</div>
              <div className="text-xs text-gray-600">World No. 1 Tennis</div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🏃</span>
              </div>
              <div className="font-bold text-sm">Sha'Carri Richardson</div>
              <div className="text-xs text-gray-600">Track & Field Star</div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">⛳</span>
              </div>
              <div className="font-bold text-sm">Nelly Korda</div>
              <div className="text-xs text-gray-600">Golf Champion</div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🎵</span>
              </div>
              <div className="font-bold text-sm">Diplo</div>
              <div className="text-xs text-gray-600">DJ & Producer</div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg">
              Whether you're #1 in the world or on day 1 of your journey,<br />
              WHOOP helps you optimize your health, fitness, and life.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Members, Real Results</h2>
            <p className="text-xl text-gray-600">Join thousands transforming their health daily</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "WHOOP has been a huge motivator to a healthier lifestyle. The daily feedback keeps me accountable and helps me understand what works for my body."
              </p>
              <div className="font-semibold text-gray-900">Ashlynn P.</div>
              <div className="text-sm text-gray-600">WHOOP Member</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "WHOOP has helped me greatly improve my physical health and wellbeing. I've learned so much about my body's patterns and recovery needs."
              </p>
              <div className="font-semibold text-gray-900">Samatha R.</div>
              <div className="text-sm text-gray-600">WHOOP Member</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "WHOOP continues to transform my approach to health and wellness daily. The insights are invaluable for optimizing my training and recovery."
              </p>
              <div className="font-semibold text-gray-900">Weilynn T.</div>
              <div className="text-sm text-gray-600">WHOOP Member</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Healthspan has helped me adjust my behaviors to help increase longevity. I'm making smarter decisions about sleep, exercise, and recovery."
              </p>
              <div className="font-semibold text-gray-900">Ellie G.</div>
              <div className="text-sm text-gray-600">WHOOP Member</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "As an entrepreneur and content creator, WHOOP helps me manage my energy and stress levels. It's become essential for maintaining peak performance."
              </p>
              <div className="font-semibold text-gray-900">Stef Williams</div>
              <div className="text-sm text-gray-600">Entrepreneur</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "WHOOP gives me the data I need to train smarter, not harder. My recovery scores have improved dramatically since I started using it daily."
              </p>
              <div className="font-semibold text-gray-900">Virgil Van Dijk</div>
              <div className="text-sm text-gray-600">Professional Footballer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Membership</h2>
            <p className="text-xl text-gray-600">All plans include WHOOP 4.0 device and full access to the app</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-teal-600 transition">
              <div className="text-center mb-6">
                <div className="inline-block bg-gray-100 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
                <h3 className="text-3xl font-bold mb-2">12-Month</h3>
                <div className="text-5xl font-bold text-teal-600 mb-2">$239</div>
                <div className="text-gray-600 mb-4">($19.92/month)</div>
                <div className="text-sm text-gray-600">One-time payment</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">WHOOP 4.0 included</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Sleep, Strain & Recovery tracking</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Personalized coaching</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Heart rate zones & VO2 Max</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Women's Hormonal Insights</span>
                </div>
              </div>
              <button className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition">
                Start 12-Month Plan
              </button>
            </div>

            <div className="border-2 border-teal-600 rounded-2xl p-8 relative shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Best Value
              </div>
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">24-Month</h3>
                <div className="text-5xl font-bold text-teal-600 mb-2">$399</div>
                <div className="text-gray-600 mb-4">($16.63/month)</div>
                <div className="text-sm text-gray-600">One-time payment</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Everything in 12-Month</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700 font-semibold">Save $79 over 24 months</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Lowest monthly cost</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Priority customer support</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Free accessories included</span>
                </div>
              </div>
              <button className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition">
                Start 24-Month Plan
              </button>
            </div>
          </div>

          <div className="text-center mt-12 text-gray-600">
            <p className="mb-4">Also available: Monthly membership at $30/month (no commitment)</p>
            <p className="text-sm">All plans include 1-month free trial • Cancel anytime during trial</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Try WHOOP Risk-Free for 1 Month
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join over 1 million members optimizing their health with WHOOP. Start your free trial and see the difference data-driven health insights can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition">
              Start Free Trial →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-sm">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">✓</div>
              <div className="font-semibold">1-Month Free Trial</div>
              <div className="text-gray-400">Test it completely risk-free</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">✓</div>
              <div className="font-semibold">HSA/FSA Eligible</div>
              <div className="text-gray-400">Use pre-tax dollars for purchase</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">✓</div>
              <div className="font-semibold">Member Support</div>
              <div className="text-gray-400">Expert help whenever you need it</div>
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
              <h3 className="text-xl font-bold mb-3">What comes with WHOOP membership?</h3>
              <p className="text-gray-700">All memberships include the WHOOP 4.0 device, unlimited access to the WHOOP app with all features, personalized coaching, sleep/strain/recovery tracking, heart health monitoring, and free software updates. The device is yours to keep even if you cancel.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">How accurate is WHOOP?</h3>
              <p className="text-gray-700">WHOOP uses medical-grade sensors and has been validated in multiple peer-reviewed studies. Heart rate accuracy is comparable to chest straps, and sleep stage detection has been validated against polysomnography (the gold standard).</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">Is WHOOP waterproof?</h3>
              <p className="text-gray-700">Yes! WHOOP is waterproof up to 10 meters (33 feet). Wear it in the shower, pool, ocean, or anywhere. The device is designed for 24/7 wear without removal.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">How long does the battery last?</h3>
              <p className="text-gray-700">WHOOP 4.0 has a 5-day battery life. It comes with a wireless battery pack that lets you charge while wearing the device, so you never miss data. A 90-minute charge provides 5 full days of monitoring.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">Can I use WHOOP if I don't work out regularly?</h3>
              <p className="text-gray-700">Absolutely! WHOOP is for anyone interested in optimizing their health. Even if you're not an athlete, you'll benefit from sleep insights, stress monitoring, recovery tracking, and understanding how daily activities affect your body.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">Is WHOOP HSA/FSA eligible?</h3>
              <p className="text-gray-700">Yes! WHOOP is HSA and FSA eligible. Select Truemed at checkout to use your pre-tax health savings for your membership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Join the WHOOP Community</h2>
          <p className="text-teal-100 mb-8 text-lg">
            Get exclusive training tips, research insights, and member stories
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
                <li><a href="#" className="hover:text-white">Fitness Tracking</a></li>
                <li><a href="#" className="hover:text-white">Heart Health</a></li>
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
            <p className="mb-2">* Data based on WHOOP member studies. Individual results may vary.</p>
            <p>© 2024 Next Wave Wellness. Information provided for educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
