export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-20 text-center">

      <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-8">
        ✨ Trusted by 1,000+ Happy Clients
      </div>

      <h1 className="text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
        Professional Cleaning{' '}
        <span className="text-teal-600 italic">Done Right</span>
      </h1>

      <p className="text-lg text-gray-500 font-light max-w-lg mx-auto mb-10">
        Get an instant quote, book a service, and let our team handle the rest.
        Residential and commercial cleaning you can trust.
      </p>

      <div className="flex gap-4 justify-center">
        <a href="#quote" className="bg-teal-600 text-white text-sm font-medium px-7 py-3 rounded-xl hover:bg-teal-700 transition-colors">
          Get a Free Quote
        </a>
        <a href="#services" className="border border-gray-200 text-gray-800 text-sm font-medium px-7 py-3 rounded-xl hover:bg-gray-50 transition-colors">
          View Services →
        </a>
      </div>

      <div className="flex gap-16 justify-center mt-16">
        {[
          { number: '1,000+', label: 'Happy Clients' },
          { number: '5★', label: 'Average Rating' },
          { number: '8+', label: 'Years Experience' },
          { number: '50+', label: 'Team Members' },
        ].map(({ number, label }) => (
          <div key={label} className="text-center">
            <div className="text-3xl font-bold text-gray-900">{number}</div>
            <div className="text-sm text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </div>

    </section>
  )
}