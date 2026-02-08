export default function Contact() {
  return (
    <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-filter backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-black/30 p-8 sm:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300">
              Got a project in mind? Let&apos;s bring your vision to life!
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input placeholder="John" className="p-3 rounded" />
              <input placeholder="Doe" className="p-3 rounded" />
            </div>

            <input placeholder="Email" className="p-3 rounded w-full" />

            <textarea
              rows={5}
              className="p-3 rounded w-full"
              placeholder="Tell us about your project..."
            />

            <button className="w-full bg-blue-500 p-3 rounded text-white">
              Let&apos;s Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
