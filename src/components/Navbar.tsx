export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <span className="text-teal-600 text-xl font-bold tracking-tight">
        CleanCo
      </span>

      <ul className="flex gap-8 list-none">
        <li><a href="#services" className="text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors">Services</a></li>
        <li><a href="#why-us" className="text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors">Why Us</a></li>
        <li><a href="#quote" className="text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors">Get a Quote</a></li>
      </ul>

      
        <a href="#quote"
        className="bg-teal-600 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-teal-700 transition-colors"
      >
        Book Now
      </a>
    </nav>
  )
}
