const IMG_BASE = "https://raj.dev.groomit.me"

export default function BookingPreference() {
  return (
    <section className="bg-[#f5f0ec] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Phone mockup */}
        <div className="flex-1 flex justify-center">
          <img
            src={`${IMG_BASE}/v7/images/home/video-van.png`}
            alt="Groomit app booking screen"
            className="w-full max-w-[340px] rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h2 className="ff-inter-semibold text-[#2a2a2a] text-2xl md:text-[1.75rem] mb-8">How Do You Want to Book?</h2>

          {/* Best Match */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#FF385C] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF385C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <h3 className="ff-inter-semibold text-[#2a2a2a] text-lg">Best Match</h3>
              <span className="text-xs font-semibold text-[#FF385C] bg-[#FFF0F2] px-3 py-1 rounded-full">Recommended</span>
            </div>
            <p className="text-sm text-[#4a5565] leading-relaxed ml-11">Let our system match you with the best available groomer in your area for speed and reliability.</p>
          </div>

          {/* Choose Groomer */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#e5e7eb] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <h3 className="ff-inter-semibold text-[#2a2a2a] text-lg">Choose Your Groomer</h3>
            </div>
            <p className="text-sm text-[#4a5565] leading-relaxed ml-11">Browse profiles, ratings, and reviews to pick the perfect stylist for your pet.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
