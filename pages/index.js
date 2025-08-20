// ✅ index.js — Direct Path Fix Version

'use client';

import Image from 'next/image'; import Hero from '../components/Hero'; import GearCardGrid from '../components/GearCardGrid'; import Link from 'next/link';

export default function Home() { return ( <main className="flex min-h-screen flex-col items-center justify-between p-4"> <Hero />

<section className="w-full max-w-5xl text-center py-8">
    <h2 className="text-3xl font-bold mb-4">Gear Up</h2>
    <p className="mb-6 text-lg text-muted-foreground">
      Trusted tools, field-tested gear, and digital kits for the modern stoic. No fluff — just results.
    </p>
    <GearCardGrid />
  </section>

  <section className="w-full max-w-3xl py-8">
    <div className="rounded-xl border p-6 text-center">
      <h3 className="text-xl font-semibold mb-2">Modern Stoic Field Guide</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        A no-BS playbook to reset your mindset, build habits, and earn your legacy.
      </p>
      <Link
        href="https://gum.co/modernstoic"
        target="_blank"
        className="inline-block rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 transition"
      >
        Buy on Gumroad
      </Link>
    </div>
  </section>
</main>

); }

