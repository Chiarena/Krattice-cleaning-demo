const services = [
  {
    icon: '🏠',
    title: 'Residential Cleaning',
    description: 'Regular home cleaning tailored to your schedule and preferences.',
    features: ['Weekly', 'Fortnightly', 'One-off'],
  },
  {
    icon: '🏢',
    title: 'Commercial Cleaning',
    description: 'Professional office and workspace cleaning before or after business hours.',
    features: ['Daily', 'Weekly', 'Contract'],
  },
  {
    icon: '✨',
    title: 'Deep Cleaning',
    description: 'Thorough top-to-bottom cleaning for moving in, moving out, or spring cleaning.',
    features: ['Move in', 'Move out', 'Spring clean'],
  },
  {
    icon: '🪟',
    title: 'Window Cleaning',
    description: 'Streak-free window cleaning for homes and commercial properties of all sizes.',
    features: ['Interior', 'Exterior', 'High-rise'],
  },
  {
    icon: '🛋️',
    title: 'Upholstery Cleaning',
    description: 'Deep clean sofas, carpets, and fabric surfaces to remove stains and allergens.',
    features: ['Sofas', 'Carpets', 'Mattresses'],
  },
  {
    icon: '🏗️',
    title: 'Post-Construction',
    description: 'Specialist cleaning after renovations or construction to get your space move-in ready.',
    features: ['Dust removal', 'Debris', 'Final polish'],
  },
]

export default function Services() {
  return (
    <section id="services" className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-20">

      <p className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">
        What We Offer
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        Services for Every Need
      </h2>
      <p className="text-gray-500 font-light mb-8 sm:mb-12">
        From regular home cleaning to specialist commercial contracts — we've got you covered.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon, title, description, features }) => (
          <div
            key={title}
            className="border border-gray-200 rounded-xl p-6 hover:border-teal-400 hover:shadow-sm transition-all cursor-pointer"
          >
            <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center text-xl mb-5">
              {icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              {description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}