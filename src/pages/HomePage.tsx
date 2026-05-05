import { lazy, Suspense } from 'react'
import HeroBanner from '@/components/home/HeroBanner'
import CheckAvailability from '@/components/home/CheckAvailability'
import SEO from '@/common/seo/SEO'
import { faqData } from '@/common/seo/seoConfig'

// Lazy load below-fold components for better initial load performance
const WhyGroomit = lazy(() => import('@/components/home/WhyGroomit'))
const FindBestFit = lazy(() => import('@/components/home/FindBestFit'))
const MobileGrooming = lazy(() => import('@/components/home/MobileGrooming'))
const RecurringGrooming = lazy(() => import('@/components/home/RecurringGrooming'))
const GroomersSection = lazy(() => import('@/components/home/GroomersSection'))
const ReviewsSection = lazy(() => import('@/components/home/ReviewsSection'))
const ServiceAreas = lazy(() => import('@/components/home/ServiceAreas'))
const FAQSection = lazy(() => import('@/components/home/FAQSection'))
const DownloadApp = lazy(() => import('@/components/home/DownloadApp'))

// Simple loading placeholder that doesn't cause layout shift
function SectionLoader() {
  return (
    <div className="w-full py-16 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-groomit-red border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <SEO
        title="Mobile Pet Grooming Near You | In-Home Dog & Cat Grooming | Groomit"
        description="Book same-day mobile pet grooming or in-home dog & cat grooming. 179K+ pets groomed, 4.8-star rating. Real-time availability, no calls needed. Book in minutes."
        canonical="https://groomit.me/"
        keywords="pet grooming near me, mobile pet grooming, dog grooming near me, cat grooming near me, in home pet grooming, mobile dog grooming, same day dog grooming, on demand pet grooming"
        faqData={faqData}
      />
      
      {/* Above the fold - loaded immediately */}
      <HeroBanner />
      <CheckAvailability />
      
      {/* Below the fold - lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <WhyGroomit />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FindBestFit />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <MobileGrooming />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <RecurringGrooming />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <GroomersSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ReviewsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ServiceAreas />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <DownloadApp />
      </Suspense>
    </>
  )
}
