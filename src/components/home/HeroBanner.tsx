const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"

export default function HeroBanner() {
  return (
    <section className="pt-4 pb-6 md:py-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl md:rounded-[20px] overflow-hidden min-h-[420px] md:min-h-[500px]">
          <img
            alt="Groomit mobile grooming van with groomer and dog"
            width={1280}
            height={500}
            className="hidden md:block w-full h-full object-cover absolute inset-0"
            src={`${BLOB}/latest-home-banner-mFtdiyzZCcFCYhdIGMFaTKyXA8DiUi.png`}
          />
          <img
            alt="Groomit mobile grooming van"
            width={400}
            height={500}
            className="block md:hidden w-full h-full object-cover absolute inset-0"
            src={`${BLOB}/hero-mobile-img-7Pu5iprPcdSC74wGF5fWjn9sr51dKA.webp`}
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative h-full min-h-[420px] md:min-h-[500px] flex flex-col justify-end md:justify-center p-5 md:p-10 lg:p-14">
            <div className="max-w-lg">
              <h1 className="text-[28px] md:text-4xl lg:text-5xl font-bold leading-[1.15] text-white">
                Pet Grooming<br />On Demand
              </h1>
              <p className="mt-3 text-white/85 text-sm md:text-base max-w-[280px] md:max-w-md leading-relaxed">
                Top-rated groomers near you. See real-time availability and book instantly.
              </p>
              <a href="/guest/booking/start" className="no-underline inline-block">
                <button className="mt-5 md:mt-6 bg-[#ff314a] hover:bg-[#e02a40] text-white px-8 py-3.5 text-base rounded-xl font-semibold transition-all cursor-pointer border-0 shadow-lg shadow-black/20">
                  Book Now
                </button>
              </a>
              <p className="mt-3 text-white/60 text-xs md:text-sm">
                Real online booking. Confirmed in minutes.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 text-xs md:text-sm">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-2 w-fit">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-white font-medium">200K+ Pets Groomed</span>
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-2 w-fit">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
                    <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} />
                    <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} />
                    <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2} />
                  </svg>
                  <span className="text-white font-medium">Same Day Booking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
