import HeroBanner from '@/components/home/HeroBanner'
import CheckAvailability from '@/components/home/CheckAvailability'
import WhyGroomit from '@/components/home/WhyGroomit'
import FindBestFit from '@/components/home/FindBestFit'
import MobileGrooming from '@/components/home/MobileGrooming'
import RecurringGrooming from '@/components/home/RecurringGrooming'
import GroomersSection from '@/components/home/GroomersSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import ServiceAreas from '@/components/home/ServiceAreas'
import FAQSection from '@/components/home/FAQSection'
import DownloadApp from '@/components/home/DownloadApp'

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CheckAvailability />
      <WhyGroomit />
      <FindBestFit />
      <MobileGrooming />
      <RecurringGrooming />
      <GroomersSection />
      <ReviewsSection />
      <ServiceAreas />
      <FAQSection />
      <DownloadApp />
    </>
  )
}
