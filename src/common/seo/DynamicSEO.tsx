import { useLocation, matchPath } from 'react-router-dom'
import { seoConfig } from './seoConfig'
import SEO from './SEO'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://groomit.me'

const FALLBACK = {
  title: 'Groomit',
  description: 'Professional Pet Grooming Marketplace',
  noIndex: false,
}

export default function DynamicSEO() {
  const { pathname } = useLocation()

  const matchingPattern = Object.keys(seoConfig).find((pattern) =>
    matchPath({ path: pattern, end: true }, pathname)
  )

  const match = matchingPattern
    ? matchPath({ path: matchingPattern, end: true }, pathname)
    : null

  const entry = matchingPattern ? seoConfig[matchingPattern] : undefined

  const params = (match?.params ?? {}) as Record<string, string>
  const resolvedConfig =
    typeof entry === 'function'
      ? entry(params.id || params.appointmentId, params)
      : entry

  const config = resolvedConfig ?? FALLBACK
  const fullUrl = `${SITE_URL}${pathname}`

  return (
    <SEO
      title={config.title}
      description={config.description}
      noIndex={config.noIndex}
      url={fullUrl}
      canonical={fullUrl}
    />
  )
}
