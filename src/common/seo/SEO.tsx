import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  image?: string
  url?: string
  noIndex?: boolean
  type?: string
}

const SITE_NAME = 'Groomit'

export default function SEO({
  title,
  description,
  canonical,
  image,
  url,
  noIndex = false,
  type = 'website',
}: SEOProps) {
  const fullTitle = title?.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`

  return (
    <Helmet>
      {/* Standard */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#EA2C43" />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || canonical || ''} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url || canonical || ''} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Google Rich Results */}
      <meta itemProp="name" content={fullTitle} />
      <meta itemProp="description" content={description} />
      {image && <meta itemProp="image" content={image} />}
    </Helmet>
  )
}
