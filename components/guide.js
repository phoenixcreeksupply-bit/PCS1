import Image from "next/image";

export default function Guide() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
      <div className="flex-1">
        <Image
          src="/og.jpg"
          alt="Modern Stoic Field Guide"
          width={600}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Modern Stoic Field Guide</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          A 40+ page tactical field guide for discipline, clarity, and self-leadership. Built for men who carry weight in silence.
        </p>
        <a
          href="/guide"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Explore the Guide
        </a>
      </div>
    </section>
  );
            }
