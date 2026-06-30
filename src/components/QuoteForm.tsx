import { useState } from 'react'

const serviceTypes = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Deep Cleaning',
  'Window Cleaning',
  'Upholstery Cleaning',
  'Post-Construction',
]

const frequencies = [
  'One-off',
  'Weekly',
  'Fortnightly',
  'Monthly',
]

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="quote" className="bg-gray-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left side */}
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">
              Get A Quote
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Book Your Cleaning Service Today
            </h2>
            <p className="text-gray-500 font-light text-sm mb-8">
              Fill in the form and we'll get back to you within 2 hours with a
              personalised quote and available time slots.
            </p>

            <ul className="space-y-3">
              {[
                'Free quote, no obligation',
                'Trained and vetted cleaners',
                'Fully insured service',
                'Satisfaction guaranteed',
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="w-2 h-2 rounded-full bg-teal-600 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side — form */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-7">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✅
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quote Request Received!</h3>
                <p className="text-sm text-gray-500">
                  Our team will get back to you within 2 hours with your
                  personalised quote.
                </p>
              </div>
            ) : (
              <div className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Lim"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-teal-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+65 9123 4567"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@email.com"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Service Type
                    </label>
                    <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-teal-400">
                      <option value="">Select service</option>
                      {serviceTypes.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Frequency
                    </label>
                    <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-teal-400">
                      <option value="">Select frequency</option>
                      {frequencies.map((f) => <option key={f}>{f}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Property Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Orchard Road, Singapore"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Additional Notes (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any specific requirements or areas of concern..."
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-teal-400 resize-none"
                  />
                </div>

                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full bg-teal-600 text-white text-sm font-medium py-3 rounded-xl hover:bg-teal-700 transition-colors"
                >
                  Request a Quote
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We'll respond within 2 hours during business hours.
                </p>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}