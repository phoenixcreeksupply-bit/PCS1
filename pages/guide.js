// pages/guide.js
import Link from 'next/link'
import Head from 'next/head'

export default function Guide() {
  return (
    <>
      <Head>
        <title>Modern Stoic Field Guide – Phoenix Creek Supply</title>
        <meta
          name="description"
          content="A digital playbook for men who carry weight with silence—and lead with clarity. Rebuild. Recenter. Rise."
        />
      </Head>

      <main className="px-4 py-10 max-w-2xl mx-auto text-gray-900">
        <nav className="mb-6 text-sm space-x-4 text-blue-700 underline">
          <Link href="/">Phoenix Creek</Link>
          <Link href="/guide">Guide</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">Modern Stoic Field Guide</h1>

        <p className="text-lg mb-4">
          A digital playbook for men who carry weight with silence—and lead with clarity.
        </p>

        <img
          src="/guide-cover.jpg"
          alt="Modern Stoic Field Guide"
          className="w-full max-w-md mx-auto my-6 rounded-lg shadow"
        />

        <p className="mb-6">
          The Modern Stoic Field Guide is not a journal. It’s a weapon. This 40+ page digital kit is
          designed to harden your habits, build clarity, and train your mind to cut through the noise.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>✅ Daily tracker templates (discipline, sleep, habits)</li>
          <li>✅ Stoic principles in action – not theory</li>
          <li>✅ Weekly reflection prompts to keep you focused</li>
          <li>✅ Produced by Monroe · Phoenix Creek Supply</li>
        </ul>

        <p className="mb-4">
          Whether you're rebuilding, re-centering, or rising for the first time—this guide belongs in your pack.
        </p>

        <a
          href="https://monroeworks.gumroad.com/l/stoic"
          className="inline-block bg-black text-white px-5 py-3 rounded hover:bg-gray-800 font-semibold mb-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy on Gumroad – $17
        </a>

        <p className="text-sm text-gray-600 mt-6">
          Produced by Monroe · Phoenix Creek Supply
        </p>
      </main>
    </>
  )
}
