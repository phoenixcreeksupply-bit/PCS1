// components/Hero.jsx

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="text-center py-20 px-4 bg-[#f5f0e6]">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">
        Rugged Tools for the Modern Stoic
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Digital kits. Bushcraft gear. Earn your legacy.
      </p>
      <Link
        href="https://phoenixcreeksupply.gumroad.com/l/gnqvw"
        passHref
        legacyBehavior
      >
        <a className="bg-[#8b5e3c] text-white px-6 py-3 rounded-full text-lg hover:bg-[#6e4b2e] transition duration-300">
          Buy the Field Guide on Gumroad →
        </a>
      </Link>
    </div>
  );
}
