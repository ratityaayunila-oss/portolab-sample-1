import { Palette, Zap, Heart } from 'lucide-react'

export default function Features() {
  return (
    <div id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase mb-4">Features</h2>
          <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            A better way to showcase your art
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-filter backdrop-blur-xl rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 text-white mb-6 shadow-lg shadow-blue-500/25">
              <Palette className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Unique Designs</h3>
            <p className="text-gray-300 leading-relaxed">
              Our designs are one-of-a-kind, tailored to your artistic vision with meticulous attention to detail.
            </p>
          </div>

          <div className="bg-white/10 backdrop-filter backdrop-blur-xl rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-400 text-white mb-6 shadow-lg shadow-cyan-500/25">
              <Zap className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Fast Performance</h3>
            <p className="text-gray-300 leading-relaxed">
              Lightning-fast websites that load in the blink of an eye, optimized for the best user experience.
            </p>
          </div>

          <div className="bg-white/10 backdrop-filter backdrop-blur-xl rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 text-white mb-6 shadow-lg shadow-purple-500/25">
              <Heart className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Made with Love</h3>
            <p className="text-gray-300 leading-relaxed">
              We pour our hearts into every project, ensuring top-notch quality and exceptional craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

