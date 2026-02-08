import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="p-6 bg-black text-white flex justify-between">
      <Link href="/">ArtistikDesign</Link>

      <div className="space-x-6">
        <Link href="#features">Features</Link>
        <Link href="#gallery">Gallery</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#contact">Let&apos;s Talk</Link>
      </div>
    </nav>
  )
}
