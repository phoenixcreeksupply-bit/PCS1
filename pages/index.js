import Hero from "@/components/Hero";
import Guide from "@/components/Guide";
import Gear from "@/components/Gear";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata = {
  title: "Phoenix Creek Supply · Rugged Kits for the Modern Stoic",
  description:
    "Digital kits and rugged tools built for self-reliant men. Phoenix Creek Supply offers prospecting guides, field-tested gear, and legacy-driven content. Built to endure.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 space-y-24">
      <Hero />
      <Guide />
      <Gear />
      <CTA />
    </main>
  );
}
