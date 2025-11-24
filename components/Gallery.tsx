/* eslint-disable @next/next/no-img-element */
export default function Gallery() {
  const images = [
    { id: 1, src: 'https://picsum.photos/800/600?random=1', alt: 'Creative Artwork 1' },
    { id: 2, src: 'https://picsum.photos/800/600?random=2', alt: 'Digital Design 1' },
    { id: 3, src: 'https://picsum.photos/800/600?random=3', alt: 'Artistic Creation 1' },
    { id: 4, src: 'https://picsum.photos/800/600?random=4', alt: 'Creative Artwork 2' },
    { id: 5, src: 'https://picsum.photos/800/600?random=5', alt: 'Digital Design 2' },
    { id: 6, src: 'https://picsum.photos/800/600?random=6', alt: 'Artistic Creation 2' },
    { id: 7, src: 'https://picsum.photos/800/600?random=7', alt: 'Creative Artwork 3' },
    { id: 8, src: 'https://picsum.photos/800/600?random=8', alt: 'Digital Design 3' },
    { id: 9, src: 'https://picsum.photos/800/600?random=9', alt: 'Artistic Creation 3' },
  ]

  return (
    <div id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase mb-4">Gallery</h2>
          <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Artistic Creations</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 overflow-hidden rounded-2xl bg-white/5 backdrop-filter backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-semibold">{item.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

