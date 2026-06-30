export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">

        <span className="text-teal-600 text-lg font-bold tracking-tight">
          CleanCo
        </span>

        <div className="flex gap-8">
          <a href="#services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Services</a>
          <a href="#quote" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Get a Quote</a>
        </div>

        <p className="text-sm text-gray-400">
          © 2025 CleanCo · Concept Demo
        </p>

      </div>
    </footer>
  )
}