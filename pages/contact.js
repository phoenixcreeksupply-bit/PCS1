import Head from 'next/head';
import Layout from '../components/layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact – Phoenix Creek Supply</title>
        <meta name="description" content="Reach out to Phoenix Creek Supply. Legacy is earned through connection." />
      </Head>

      <section className="py-12 px-6 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Reach Out</h1>
        <p className="text-lg text-gray-300 mb-8 italic">
          Legacy is earned through connection. We don’t do noise. We do signal.
        </p>

        <p className="text-lg mb-6">
          For questions, custom orders, partnerships, or to speak directly to Monroe:
        </p>

        <p className="text-xl font-semibold text-amber-400">
          phoenixcreeksupply@gmail.com
        </p>

        <div className="mt-10">
          <p className="text-sm text-gray-500 italic">
            We read every message. Replies usually come within 48 hours.
          </p>
        </div>
      </section>
    </Layout>
  );
}
