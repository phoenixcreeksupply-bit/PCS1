export default function CTA() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 px-6 text-center rounded-xl shadow-inner my-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Ready to Level Up?
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Download our field guide, gear up, and start building your legacy today.
      </p>
      <a
        href="https://gumroad.com/l/modernstoic"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-black text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow hover:bg-gray-800 transition"
      >
        Buy the Guide
      </a>
    </section>
  );
}
