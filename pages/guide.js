import Head from 'next/head';
import Layout from '../components/layout';
import Image from 'next/image';

export default function Guide() {
  return (
    <Layout>
      <Head>
        <title>Modern Stoic Field Guide – Legacy</title>
        <meta name="description" content="A digital field guide for men who lead themselves. Build discipline. Master routine. Forge legacy." />
        <meta property="og:title" content="Modern Stoic Field Guide – Legacy" />
        <meta property="og:image" content="/og.jpg" />
      </Head>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Modern Stoic Field Guide</h1>
        <p className="text-lg text-center mb-8 italic">A digital playbook for men who carry weight with silence—and lead with clarity.</p>

        <div className="flex justify-center mb-10">
          <Image
            src="/og.jpg"
            alt="Modern Stoic Field Guide"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="prose lg:prose-lg mx-auto text-gray-200">
          <p>
            The Modern Stoic Field Guide is not a journal. It’s a weapon.
            This 40+ page digital kit is designed to harden your habits, build
            clarity, and train your mind to cut through the noise.
          </p>

          <ul>
            <li>✅ Daily tracker templates (discipline, sleep, habits)</li>
            <li>✅ Stoic principles in action – not theory</li>
            <li>✅ Weekly reflection prompts to keep you focused</li>
            <li>✅ Produced by Monroe · Phoenix Creek Supply</li>
          </ul>

          <p>
            Whether you're rebuilding, re-centering, or rising for the first time—
            this guide belongs in your pack.
          </p>

          <div className="text-center mt-10">
            <a
              href="https://monroe.gumroad.com/l/modernstoic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-700 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-amber-800 transition"
            >
              Buy on Gumroad – $17
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
              }
