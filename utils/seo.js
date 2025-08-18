export const defaultMeta = {
  title: "Phoenix Creek Supply",
  description: "Rugged Tools for the Modern Stoic. Digital kits. Bushcraft gear. Earn your legacy.",
  image: "/og.jpg",
  type: "website",
  siteName: "Phoenix Creek Supply",
  url: "https://phoenixcreeksupply.com"
};

export function generateMeta(customMeta = {}) {
  const meta = { ...defaultMeta, ...customMeta };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </>
  );
    }
