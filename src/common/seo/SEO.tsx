import { Helmet } from 'react-helmet-async'

interface FAQItem {
  question: string
  answer: string
}

interface SEOProps {
  title: string
  description: string
  canonical?: string
  image?: string
  url?: string
  noIndex?: boolean
  type?: string
  keywords?: string
  faqData?: FAQItem[]
}

const SITE_NAME = 'Groomit'
const SITE_URL = 'https://groomit.me'
const DEFAULT_IMAGE = 'https://raj.dev.groomit.me/v7/images/home/og-image.jpg'

export default function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  url,
  noIndex = false,
  type = 'website',
  keywords,
  faqData,
}: SEOProps) {
  const fullTitle = title?.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  const pageUrl = url || canonical || SITE_URL

  // Generate FAQ Schema
  const faqSchema = faqData && faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null

  return (
    <Helmet>
      {/* Standard */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#FF385C" />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Google Rich Results */}
      <meta itemProp="name" content={fullTitle} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  )
}
