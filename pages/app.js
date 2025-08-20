import Hero from '@/components/hero'
import GearGrid from '@/components/geargrid'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold mb-4">Featured Digital Guide</h2>
        <Link
          href="https://phoenixcreeksupply.gumroad.com/l/gnqvw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
        >
          Buy the Modern Stoic Field Guide on Gumroad
        </Link>
      </div>
      <div className="text-center my-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Gear</h2>
        <GearGrid />
      </div>
    </main>
  )
}
