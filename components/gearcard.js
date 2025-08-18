import Image from 'next/image';

export default function GearCard({ title, image, description, amazonLink, altLink }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="mb-4">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="rounded-md object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>
      <div className="flex space-x-4">
        {amazonLink && (
          <a
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold py-2 px-4 rounded transition text-sm"
          >
            Amazon (Fast Ship)
          </a>
        )}
        {altLink && (
          <a
            href={altLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded transition text-sm"
          >
            Pro Grade (Premium)
          </a>
        )}
      </div>
    </div>
  );
}
