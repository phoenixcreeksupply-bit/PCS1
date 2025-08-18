import gear from "@/data/gear";
import Image from "next/image";

export default function Gear() {
  return (
    <section className="max-w-6xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center mb-10">Field Gear</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {gear.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="rounded mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
            <div className="flex space-x-4 mt-auto">
              {item.amazonLink && (
                <a
                  href={item.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800"
                >
                  Amazon (Fast Ship)
                </a>
              )}
              {item.altLink && (
                <a
                  href={item.altLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-800"
                >
                  Pro Grade
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
