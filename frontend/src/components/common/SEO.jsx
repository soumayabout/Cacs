import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'CACS Africa - Chambre Africaine de Commerce et de Services',
  description = 'La Chambre Africaine de Commerce et de Services (CACS) est une plateforme de création de valeur dédiée au développement des échanges, des partenariats et des opportunités d\'affaires en Afrique.',
  keywords = 'CACS Africa, Chambre Africaine, Commerce, Services, Afrique, Partenariat, Business, Maroc, Dakhla, Laâyoune',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical
}) => {
  const fullTitle = title.includes('CACS Africa') ? title : `${title} | CACS Africa`;
  const url = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="CACS Africa" />
      <meta name="theme-color" content="#0B1F3A" />
    </Helmet>
  );
};

export default SEO;
