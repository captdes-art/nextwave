'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
    // For now, just simulate a subscription
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <div className="bg-teal-900 text-white p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-2">Stay in the Loop</h3>
      <p className="text-teal-100 mb-6">
        Get the latest biohacking insights and wellness tips delivered to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
          disabled={status === 'loading' || status === 'success'}
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Subscribing...' : status === 'success' ? '✓ Subscribed!' : 'Subscribe'}
        </button>
      </form>

      {status === 'error' && (
        <p className="text-red-300 text-sm mt-2">Something went wrong. Please try again.</p>
      )}
    </div>
  )
}
