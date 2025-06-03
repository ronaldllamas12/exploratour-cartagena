// components/SEO.tsx
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TouristOrganization",
  "name": "ExploraTours",
  "url": "https://www.exploratours.com",
  "logo": "https://www.exploratours.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/exploratours",
    "https://twitter.com/exploratours"
  ]
};

export default function SEO({
  title,
  description,
  keywords = "turismo, Colombia, viajes, tours, aventura",
  author = "ExploraTours",
  url = "https://www.exploratours.com",
  image = "/imagenes/preview.jpg",
}: SEOProps) {
  return (
    <Head>
      {/* Básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph para Facebook, LinkedIn y otros */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Datos estructurados JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
