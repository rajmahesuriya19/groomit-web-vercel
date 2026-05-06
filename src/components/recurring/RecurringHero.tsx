import { Link } from "react-router-dom"

const IMG = "https://qa.groomit.me/v7/images"

export default function RecurringHero() {
  return (
    <>
      {/* Top promo banner */}
      <div className="bg-[#1A1A1A] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center">
          <span className="font-semibold text-sm sm:text-base">Book Recurring &amp; Get up to <span className="text-[#FF385C]">30% OFF</span></span>
          <span className="text-xs sm:text-sm text-gray-300">+ FREE Fi GPS Collar with 6 Months of Membership</span>
        </div>
      </div>

      {/* Hero banner */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-0">
          <div className="relative rounded-2xl overflow-hidden min-h-[340px] md:min-h-[420px]">
            {/* Desktop banner */}
            <img
              src={`${IMG}/home/recurring-home-banner.png`}
              alt="Keep your pet healthy with a grooming routine"
              className="hidden md:block w-full h-full object-cover absolute inset-0"
            />
            {/* Mobile banner */}
            <img
              src={`${IMG}/home/recurring-home-banner-mobile.png`}
              alt="Keep your pet healthy with a grooming routine"
              className="md:hidden w-full h-full object-cover absolute inset-0"
            />
            <div className="relative z-10 flex flex-col justify-center min-h-[340px] md:min-h-[420px] p-6 sm:p-10 lg:p-14 max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <img src={`${IMG}/home/recurring-icon.svg`} alt="" className="w-8 h-8" />
                <span className="text-sm font-medium text-[#2a2a2a]">FREE Fi GPS Collar + 6 Months of Membership</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1A1A1A] leading-tight mb-2">
                Keep Your Pet Healthy With a Grooming Routine
              </h1>
              <div className="flex items-center gap-3 mb-5 text-sm text-[#4a5565]">
                <div className="flex items-center gap-1">
                  <img src={`${IMG}/home/star-orange.svg`} alt="" className="w-4 h-4" />
                  <span className="font-semibold text-[#2a2a2a]">4.8</span>
                  <span>(1400+ Reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={`${IMG}/webapp/icons/menu/pet.svg`} alt="" className="w-4 h-4" />
                  <span>100k+ Pets Groomed</span>
                </div>
              </div>
              <Link
                to="/guest/booking/start"
                className="inline-flex items-center justify-center bg-[#1A1A1A] text-white font-semibold text-base px-8 py-3.5 rounded-xl hover:bg-[#333] transition-colors no-underline w-fit"
              >
                Save with Recurring
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
