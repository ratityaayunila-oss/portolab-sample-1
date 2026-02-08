import Navbar from "@/components/Navbar"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="text-white py-40 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to ArtistikDesign</h1>
        <p className="text-gray-300 text-xl">
          Showcase your creativity with a modern portfolio experience.
        </p>
      </section>
      <Contact />
    </main>
  )
}
