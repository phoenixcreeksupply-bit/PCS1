export default function CTA({ title, description, buttonText, buttonLink }) {
  return (
    <section className="py-20 px-6 bg-gray-950 border-t border-gray-800 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-gray-400 mb-8">{description}</p>
        <a
          href={buttonLink}
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
