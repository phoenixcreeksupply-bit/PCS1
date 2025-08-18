export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="py-24 px-6 text-center bg-gray-950 border-b border-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-amber-500 mb-6">
          {title}
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          {subtitle}
        </p>
        <a
          href={ctaLink}
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-bold px-8 py-4 rounded-full transition"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
