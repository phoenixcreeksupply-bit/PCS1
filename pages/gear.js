import Head from 'next/head';
import Layout from '../components/layout';
import GearCard from '../components/gearcard';
import gearData from '../data/gear';

export default function Gear() {
  return (
    <Layout>
      <Head>
        <title>Field Gear – Phoenix Creek Supply</title>
        <meta name="description" content="Field-tested affiliate gear for modern stoics. Axes, detectors, survival tools, and clothing." />
        <meta property="og:title" content="Field Gear – Phoenix Creek Supply" />
        <meta property="og:image" content="/og.jpg" />
      </Head>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Approved Field Gear</h1>
        <p className="text-lg text-center mb-12 text-gray-300 italic">
          Field-tested. Trusted. Built for results.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {gearData.map((item, index) => (
            <GearCard
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
              amazonLink={item.amazonLink}
              altLink={item.altLink}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
                   }
