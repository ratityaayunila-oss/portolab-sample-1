export default function Hero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-filter backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-black/30 p-8 sm:p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>

          <div className="text-center relative z-10">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-white/20 text-blue-300 text-sm font-semibold tracking-wider uppercase backdrop-blur-xl">
                Welcome
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-tight">
              <span className="block">
                <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                  Crafting
                </span>
              </span>
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-pulse">
                  Digital Art
                </span>
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Where creativity meets{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium">functionality</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 3" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.5 Q 50 3 100 1.5 T 200 1.5" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              We craft unique digital experiences that inspire and engage across all platforms
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center h-14 px-8 text-base font-semibold rounded-2xl text-white overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center justify-center h-14 px-8 text-base font-semibold rounded-2xl text-white border-2 border-white/20 bg-white/5 backdrop-filter backdrop-blur-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                View Gallery
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>Available for projects</span>
              </div>
              <div className="w-px h-6 bg-white/10"></div>
              <div>2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

