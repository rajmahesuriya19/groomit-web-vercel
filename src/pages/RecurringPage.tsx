import { lazy, Suspense } from "react"
import RecurringHero from "@/components/recurring/RecurringHero"
import WhyRecurringMatters from "@/components/recurring/WhyRecurringMatters"

const PlanComparison = lazy(() => import("@/components/recurring/PlanComparison"))
const FiGPSCollar = lazy(() => import("@/components/recurring/FiGPSCollar"))
const SmartestCollar = lazy(() => import("@/components/recurring/SmartestCollar"))
const RecurringFAQ = lazy(() => import("@/components/recurring/RecurringFAQ"))
const DownloadAppBanner = lazy(() => import("@/components/recurring/DownloadAppBanner"))

function SectionLoader() {
  return (
    <div className="w-full py-16 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-groomit-red border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function RecurringPage() {
  return (
    <div className="bg-white">
      <RecurringHero />
      <WhyRecurringMatters />
      <Suspense fallback={<SectionLoader />}><PlanComparison /></Suspense>
      <Suspense fallback={<SectionLoader />}><FiGPSCollar /></Suspense>
      <Suspense fallback={<SectionLoader />}><SmartestCollar /></Suspense>
      <Suspense fallback={<SectionLoader />}><RecurringFAQ /></Suspense>
      <Suspense fallback={<SectionLoader />}><DownloadAppBanner /></Suspense>
    </div>
  )
}
