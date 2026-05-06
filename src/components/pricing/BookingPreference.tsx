const IMG = "https://qa.groomit.me/v7/images"

export default function BookingPreference() {
  return (
    <section className="bg-[#EBF3FE] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8">
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
          <h2 className="ff-inter-semibold text-[#2a2a2a] text-2xl md:text-[1.75rem] mb-8">How Do You Want to Book?</h2>

          {/* Best Match */}
          <div className="border border-[#e5e7eb] rounded-2xl p-5 mb-4 bg-white">
            <div className="flex items-center gap-3 mb-2">
              <img src={`${IMG}/pet-grooming-prices/shield-tick.svg`} alt="Shield" className="w-8 h-8" />
              <h3 className="ff-inter-semibold text-[#2a2a2a] text-lg">Best Match</h3>
              <span className="text-xs font-semibold text-[#2a2a2a] bg-[#f0f0f0] px-3 py-1 rounded-full">Recommended</span>
            </div>
            <p className="text-sm text-[#4a5565] leading-relaxed ml-11">Let our system match you with the best available groomer in your area for speed and reliability.</p>
          </div>

          {/* Choose Groomer */}
          <div className="border border-[#e5e7eb] rounded-2xl p-5 bg-white">
            <div className="flex items-center gap-3 mb-2">
              <img src={`${IMG}/pet-grooming-prices/row-vertical.svg`} alt="Shield" className="w-8 h-8" />
              <h3 className="ff-inter-semibold text-[#2a2a2a] text-lg">Choose Your Groomer</h3>
            </div>
            <p className="text-sm text-[#4a5565] leading-relaxed ml-11">Browse profiles, ratings, and reviews to pick the perfect stylist for your pet.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
