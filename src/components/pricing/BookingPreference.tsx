const IMG = "https://qa.groomit.me/v7/images"

export default function BookingPreference() {
  return (
    <section className="bg-[#EBF3FE] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        {/* Left: Phone mockup */}
        <div className="flex-1 flex justify-center">
          <img
            src={`${IMG}/pet-grooming-prices/want-to-book.png`}
            alt="Groomit app booking screen"
            className="w-full max-w-[500px] rounded-2xl"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h2 className="text-[#2a2a2a] text-2xl md:text-[1.85rem] font-semibold mb-8 italic">How Do You Want to Book?</h2>

          {/* Best Match */}
          <div className="border border-[#e5e7eb] rounded-2xl p-5 md:p-6 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-full bg-[#F0FFF4] flex items-center justify-center shrink-0">
                <img src={`${IMG}/pet-grooming-prices/shield-tick.svg`} alt="" className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-[#2a2a2a] text-lg">Best Match</h3>
              <span className="text-[11px] font-semibold text-[#2a2a2a] bg-[#f0f0f0] px-3 py-1 rounded-full border border-[#e5e7eb]">Recommended</span>
            </div>
            <p className="text-sm text-[#6b7280] leading-relaxed ml-[52px]">Let our system match you with the best available groomer in your area for speed and reliability.</p>
          </div>

          {/* Choose Groomer */}
          <div className="border border-[#e5e7eb] rounded-2xl p-5 md:p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-full bg-[#FFF0F2] flex items-center justify-center shrink-0">
                <img src={`${IMG}/pet-grooming-prices/row-vertical.svg`} alt="" className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-[#2a2a2a] text-lg">Choose Your Groomer</h3>
            </div>
            <p className="text-sm text-[#6b7280] leading-relaxed ml-[52px]">Browse profiles, ratings, and reviews to pick the perfect stylist for your pet.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
