import HeroSection from "@/components/pricing/HeroSection"
import BookingForm from "@/components/pricing/BookingForm"
import PricingCards from "@/components/pricing/PricingCards"
import ServiceTypeSection from "@/components/pricing/ServiceTypeSection"
import BookingPreference from "@/components/pricing/BookingPreference"
import RecurringBenefits from "@/components/pricing/RecurringBenefits"
import WaysToSave from "@/components/pricing/WaysToSave"
import HowItWorks from "@/components/pricing/HowItWorks"
import Testimonials from "@/components/pricing/Testimonials"
import PricingFAQ from "@/components/pricing/PricingFAQ"

export default function PricingPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <HeroSection />
      </div>
      <BookingForm />
      <PricingCards />
      <ServiceTypeSection />
      <BookingPreference />
      <RecurringBenefits />
      <WaysToSave />
      <HowItWorks />
      <Testimonials />
      <PricingFAQ />
    </div>
  )
}
