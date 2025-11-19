'use client'

import Link from "next/link"
import Header from "../../components/Header"

export default function MuseSPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/" className="text-purple-300 hover:text-purple-200 font-medium">
              ← Back to Home
            </Link>
          </div>

          <div className="mb-6">
            <span className="bg-purple-500 bg-opacity-50 px-3 py-1 rounded-full text-sm font-medium">
              Mental Wellness Review
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Muse S Headband Review: After 6 Weeks of Daily Use
          </h1>

          <p className="text-xl text-purple-100 mb-6 leading-relaxed">
            I tested the Muse S meditation and sleep headband for six weeks to see if real-time brainwave feedback actually improves meditation practice and sleep quality. Here's what I found.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <div>By Sarah Chen</div>
            <div>•</div>
            <div>Updated November 2024</div>
            <div>•</div>
            <div>8 min read</div>
          </div>
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-sm border-l-4 border-purple-600 p-8">
            <h2 className="text-2xl font-bold mb-4">The Verdict</h2>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">7.8/10</div>
                <div className="text-sm text-gray-600">Overall Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">✓ Worth It</div>
                <div className="text-sm text-gray-600">For meditation beginners</div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The Muse S is genuinely helpful for building a meditation practice, especially if you've struggled with traditional apps. The real-time EEG feedback provides tangible guidance that audio-only apps can't match. However, the $399 price tag is steep, the headband takes some getting used to, and advanced meditators may find it unnecessary. Best for meditation beginners willing to invest in accelerating their practice.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">What Is the Muse S?</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Muse S is a soft fabric headband equipped with EEG (electroencephalography) sensors that monitor your brain activity during meditation and sleep. Unlike meditation apps that simply play guided audio, Muse provides real-time feedback based on your actual brainwaves—when your mind is calm, you hear peaceful sounds; when it wanders, the soundscape becomes more active.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I've been using meditation apps inconsistently for years, never quite sure if I was "doing it right." The promise of objective feedback from my actual brain activity was intriguing enough to justify the $399 investment. After six weeks of near-daily use, I have mixed but mostly positive feelings about it.
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold mb-3">Key Specs at a Glance</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Price:</strong> $399 (one-time, no subscription)</li>
                <li><strong>Sensors:</strong> 7-sensor EEG array, PPG heart rate, gyroscope</li>
                <li><strong>Battery:</strong> ~10 hours per charge</li>
                <li><strong>Connectivity:</strong> Bluetooth to iOS/Android app</li>
                <li><strong>Content:</strong> 500+ guided meditations, sleep journeys included</li>
                <li><strong>Sleep Mode:</strong> All-night tracking with responsive audio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Pros & Cons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-green-800">What Works Well</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Real feedback helps learning:</strong> You actually know when your mind is calm vs. wandering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Excellent for beginners:</strong> Makes meditation less abstract and more concrete</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>No subscription fees:</strong> Unlike Calm/Headspace, one-time purchase includes everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Sleep mode works:</strong> I did fall asleep faster (avg. 18 min vs. 35 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Comprehensive app:</strong> Beautiful interface with detailed progress tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Scientifically validated:</strong> EEG accuracy comparable to medical devices</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-red-800">What Doesn't</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Expensive:</strong> $399 is a lot for what's essentially a training tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Comfort issues:</strong> Headband pressure can be distracting, especially for sleep</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Setup finicky:</strong> Sensors require proper placement; expect 2-3 tries at first</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Battery anxiety:</strong> Checking if it's charged becomes another task</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>May create dependency:</strong> Worried I won't meditate well without it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Limited sleep insights:</strong> Less detailed than dedicated sleep trackers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* My Testing Experience */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">My 6-Week Testing Experience</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Week 1: The Learning Curve</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The first few sessions were frustrating. Getting the headband positioned correctly took several tries—the app will tell you if sensor contact is poor, which happened often at first. I also found myself focusing too hard on "making the weather calm," which is counterproductive to meditation. The app's tutorial helped, but there's definitely a learning curve.
              </p>
              <p className="text-gray-700 leading-relaxed">
                That said, even in week one, I had moments of genuine "oh, THAT'S what a calm mind feels like" clarity that I'd never experienced with Headspace or Calm.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Weeks 2-4: Building the Habit</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is where Muse S shined. The immediate feedback was motivating—I could see my "calm" percentage improve from ~40% to ~65% over these weeks. The progress tracking in the app created a gamification effect that kept me coming back daily, something I'd never managed with meditation apps.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I also started using the sleep mode 3-4 nights per week. The adaptive soundscapes (they change based on your sleep state) did help me fall asleep faster—my average time to sleep dropped from ~35 minutes to ~18 minutes, according to my Oura Ring.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Weeks 5-6: The Reality Check</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                By week five, I started wondering: am I meditating, or just playing a brain game? There were sessions where I was clearly focused on "winning" rather than actually being present. This is a real concern—the feedback can become another thing your mind obsesses over.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I also found the headband uncomfortable for all-night wear. I'd wake up with it shifted off my forehead or would take it off unconsciously. It's not as seamless for sleep as my Oura Ring, which I forget I'm wearing.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h4 className="font-bold mb-2">Bottom Line on Experience:</h4>
            <p className="text-gray-700">
              Muse S dramatically accelerated my meditation learning. I went from inconsistent, uncertain practice to 15-20 minutes daily with measurable progress. But it's a training tool, not a magic solution—you still have to do the work.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">How It Compares to Alternatives</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">vs. Meditation Apps (Calm, Headspace)</h3>
                <span className="text-purple-600 font-bold">Muse S Wins</span>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Winner: Muse S—if you can afford it.</strong> Meditation apps cost $70-150/year forever. Muse is $399 one-time and provides something apps can't: objective feedback. That said, apps are way cheaper and work for many people. If you've used meditation apps successfully for 6+ months, stick with them. Muse is for people who've tried apps and struggled.
              </p>
              <div className="text-sm text-gray-600">
                Cost comparison: Calm over 5 years = $400-750 | Muse S over 5 years = $399
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">vs. Sleep Trackers (Oura Ring, WHOOP)</h3>
                <span className="text-gray-600 font-bold">Different Use Cases</span>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Winner: Depends on your goal.</strong> Oura and WHOOP are better pure sleep trackers with more detailed analytics and all-night comfort. But they're passive—they tell you AFTER the fact that you slept poorly. Muse S actively tries to improve your sleep in real-time. I use both: Oura for tracking, Muse S for the occasional night when I need extra help falling asleep.
              </p>
              <div className="text-sm text-gray-600">
                Oura Ring Gen 3: $299 + $5.99/month | WHOOP 4.0: $239-399/year
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">vs. Other EEG Devices (Muse 2, NeuroSky)</h3>
                <span className="text-purple-600 font-bold">Muse S Wins</span>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Winner: Muse S for comfort and features.</strong> The original Muse 2 ($250) has the same meditation features but lacks sleep mode and isn't comfortable enough for extended wear. NeuroSky devices are cheaper but have older tech and worse apps. If you only want meditation feedback, Muse 2 saves you $150. If you want sleep mode too, Muse S is worth the extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Who Should (and Shouldn't) Buy This</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-800">You'll Love It If You...</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Have tried meditation apps but can't tell if you're doing it right</li>
                <li>✓ Are a beginner who wants to accelerate your learning</li>
                <li>✓ Like data and tracking to stay motivated</li>
                <li>✓ Have trouble falling asleep and want active intervention</li>
                <li>✓ Can afford $399 and value time over money</li>
                <li>✓ Are committed to building a meditation practice</li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-red-800">Skip It If You...</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✗ Already have a solid meditation practice (you don't need this)</li>
                <li>✗ Find meditation apps like Calm work fine for you</li>
                <li>✗ Are bothered by wearing things on your head</li>
                <li>✗ Want a sleep tracker for detailed analytics (get Oura instead)</li>
                <li>✗ Are on a tight budget ($399 is a lot for a training tool)</li>
                <li>✗ Just want to try meditation casually</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real User Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">What Other Users Say</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                <span className="ml-2 text-sm text-gray-600">Sarah M. • 4 months of use</span>
              </div>
              <p className="text-gray-700 italic mb-2">
                "Game-changer for my anxiety. The real-time feedback taught me what a calm mind actually feels like. Worth every penny."
              </p>
              <p className="text-sm text-gray-600">Verified Purchase • Most Helpful Review</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                {[...Array(2)].map((_, i) => (
                  <span key={i} className="text-gray-300 text-lg">★</span>
                ))}
                <span className="ml-2 text-sm text-gray-600">David L. • 2 months of use</span>
              </div>
              <p className="text-gray-700 italic mb-2">
                "Works as advertised but uncomfortable for sleep. I wake up with headaches sometimes. Great for meditation though."
              </p>
              <p className="text-sm text-gray-600">Verified Purchase • Critical Review</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                <span className="text-gray-300 text-lg">★</span>
                <span className="ml-2 text-sm text-gray-600">Jennifer K. • 6 months of use</span>
              </div>
              <p className="text-gray-700 italic mb-2">
                "Helped me build a consistent practice, but now I feel dependent on it. Not sure I can meditate without the feedback anymore."
              </p>
              <p className="text-sm text-gray-600">Verified Purchase</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                <span className="ml-2 text-sm text-gray-600">Michael R. • 8 months of use</span>
              </div>
              <p className="text-gray-700 italic mb-2">
                "As someone who's meditated for years, I didn't think I needed this. Bought it anyway and discovered I was way less focused than I thought. Humbling and helpful."
              </p>
              <p className="text-sm text-gray-600">Verified Purchase</p>
            </div>
          </div>

          <div className="mt-8 bg-purple-100 border border-purple-300 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold">Overall User Rating</h4>
              <div className="text-2xl font-bold">4.2/5.0</div>
            </div>
            <p className="text-sm text-gray-600 mb-3">Based on 3,200+ verified reviews</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-20">5 stars:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '58%'}}></div>
                </div>
                <span className="w-12 text-right">58%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20">4 stars:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '23%'}}></div>
                </div>
                <span className="w-12 text-right">23%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20">3 stars:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '11%'}}></div>
                </div>
                <span className="w-12 text-right">11%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20">2 stars:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '5%'}}></div>
                </div>
                <span className="w-12 text-right">5%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20">1 star:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '3%'}}></div>
                </div>
                <span className="w-12 text-right">3%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Value */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Is It Worth $399?</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            This is the big question. $399 is expensive for what amounts to a meditation training tool. Here's my honest assessment:
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">The Math</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Meditation apps:</strong> $70-150/year → $350-750 over 5 years</li>
              <li>• <strong>Muse S:</strong> $399 one-time → $399 over 5 years</li>
              <li>• <strong>Therapy sessions:</strong> $100-200/session → Muse costs 2-4 sessions</li>
              <li>• <strong>Muse 2 (meditation only):</strong> $250 → Save $150 if you skip sleep mode</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            If you've been paying for Calm or Headspace for years, Muse S pays for itself. If meditation apps work for you, though, there's no reason to upgrade. The real question is: <em>will it actually help you build a sustainable practice?</em>
          </p>

          <div className="bg-green-50 border border-green-300 rounded-lg p-6">
            <h4 className="font-bold mb-2">My Take:</h4>
            <p className="text-gray-700">
              For <strong>meditation beginners who are serious about building a practice,</strong> $399 is justifiable. The feedback genuinely helps, and you'll reach proficiency faster than with apps alone. For <strong>casual meditators or those on a budget,</strong> start with a free or low-cost app first. You can always upgrade later if you get serious about it.
            </p>
          </div>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Final Recommendation</h2>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8 mb-8">
            <div className="text-5xl font-bold mb-2">7.8/10</div>
            <p className="text-xl text-purple-100 mb-6">A solid meditation training tool with real benefits, but not for everyone</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-2xl font-bold mb-1">9/10</div>
                <div className="text-sm text-purple-200">For Beginners</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">7/10</div>
                <div className="text-sm text-purple-200">Value for Money</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">6/10</div>
                <div className="text-sm text-purple-200">Sleep Features</div>
              </div>
            </div>
          </div>

          <p className="text-lg text-purple-100 leading-relaxed mb-6">
            After six weeks, I'm still using Muse S 4-5 times per week for meditation and occasionally for sleep. It genuinely helped me build a consistent practice and understand what effective meditation feels like. The real-time feedback is more helpful than any app I've tried.
          </p>

          <p className="text-lg text-purple-100 leading-relaxed mb-8">
            That said, it's expensive, not always comfortable, and creates a mild dependency. I wish it cost $299 instead of $399, and I wish the sleep mode worked better for all-night wear. But if you're serious about meditation and have struggled with apps, it's a worthwhile investment in your mental health.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition">
              Check Current Price →
            </a>
            <a href="#" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:bg-opacity-10 transition">
              Compare Alternatives
            </a>
          </div>

          <p className="text-sm text-purple-200 mt-6">
            * Affiliate link disclosure: Purchases through our links help support this site at no extra cost to you. We only recommend products we've personally tested.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Do I need meditation experience to use Muse S?</h3>
              <p className="text-gray-700">
                No—in fact, it's best for beginners. If you're already an experienced meditator, you probably don't need the training wheels. Muse S is most valuable when you're learning what a calm mind actually feels like.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Is it comfortable for all-night sleep?</h3>
              <p className="text-gray-700">
                This varies by person. I found it acceptable for 3-4 hour stretches but would often wake up with it shifted or removed. It's more comfortable than hard plastic EEG devices but less comfortable than a ring or watch. Some users love it for sleep; others (like me) find it hit-or-miss.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Are there any monthly subscription fees?</h3>
              <p className="text-gray-700">
                No. The $399 purchase includes everything: the device, the app, 500+ meditations, sleep journeys, and all future updates. This is a big advantage over meditation apps that charge $10-15/month forever.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How accurate is the EEG compared to medical devices?</h3>
              <p className="text-gray-700">
                Muse's EEG sensors have been validated in peer-reviewed research and are comparable to medical-grade equipment for detecting meditation-relevant brainwave patterns. It's not diagnostic-quality for medical purposes, but it's accurate enough for meditation feedback.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Can I use it without my phone nearby?</h3>
              <p className="text-gray-700">
                Once you start a session, you can enable "offline mode" and move your phone away or put it in airplane mode. The headband stores session data locally and syncs when you reconnect. Great for truly unplugging.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What if I don't like it? Can I return it?</h3>
              <p className="text-gray-700">
                Muse offers a 30-day money-back guarantee. I'd recommend trying it for at least 2-3 weeks to get past the initial learning curve before deciding. The first week can be frustrating as you learn proper placement.
              </p>
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
              <p className="text-sm">Honest, in-depth reviews of health and wellness technology based on real-world testing.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">More Reviews</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/product/oura-ring" className="hover:text-white">Oura Ring Gen 3</Link></li>
                <li><Link href="/product/whoop-4" className="hover:text-white">WHOOP 4.0</Link></li>
                <li><Link href="/product/eight-sleep-pod" className="hover:text-white">Eight Sleep Pod</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/category/sleep" className="hover:text-white">Sleep Optimization</Link></li>
                <li><a href="#" className="hover:text-white">Mental Wellness</a></li>
                <li><a href="#" className="hover:text-white">Fitness Tracking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">About</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/#about" className="hover:text-white">Our Testing Process</Link></li>
                <li><a href="#" className="hover:text-white">Affiliate Disclosure</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p className="mb-2">Disclaimer: We are not medical professionals. Content is for informational purposes only and should not replace professional medical advice.</p>
            <p>© 2024 Next Wave Wellness. All product testing conducted independently.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
