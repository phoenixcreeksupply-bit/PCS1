import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/hero';
import CTA from '../components/cta';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Phoenix Creek Supply</title>
        <meta name="description" content="Rugged Tools for the Modern Stoic. Digital kits. Bushcraft gear. Earn your legacy." />
        <meta property="og:title" content="Phoenix Creek Supply" />
        <meta property="og:description" content="Rugged Tools for the Modern Stoic." />
        <meta property="og:image" content="/og.jpg" />
      </Head>

      <Hero
        title="Rugged Tools for the Modern Stoic"
        subtitle="Digital kits. Bushcraft gear. Earn your legacy."
        ctaText="Browse the Field Guide"
        ctaLink="/guide"
      />

      <CTA
        title="Legacy Is Built, Not Bought"
        description="From the fireline to the backcountry, our tools and guides are forged for men who live with purpose. Tap into the Phoenix."
        buttonText="Explore the Gear"
        buttonLink="/gear"
      />
    </Layout>
  );
    }
