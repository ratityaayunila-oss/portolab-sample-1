import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky lg:fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative group">
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight">
              ArtistikDesign
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="#features"
              className="relative group px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300"
            >
              <span className="relative z-10">Features</span>
              <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>

            <Link
              href="#gallery"
              className="relative group px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300"
            >
              <span className="relative z-10">Gallery</span>
              <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>

            <Link
              href="#contact"
              className="relative group px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>

            <div className="h-6 w-px bg-white/10 ml-2"></div>

            <Link
              href="#contact"
              className="ml-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button className="md:hidden text-white p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
