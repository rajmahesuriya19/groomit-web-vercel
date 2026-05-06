const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"

export default function HeroBanner() {
  return (
    <section className="py-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[20px] overflow-hidden">
          <img
            alt="Groomit mobile grooming van with groomer and dog"
            width={1280}
            height={500}
            className="hidden md:block w-full h-auto object-cover rounded-[20px]"
            src={`${BLOB}/latest-home-banner-mFtdiyzZCcFCYhdIGMFaTKyXA8DiUi.png`}
          />
          <img
            alt="Groomit mobile grooming van"
            width={400}
            height={500}
            className="block md:hidden w-full h-auto object-cover rounded-[20px]"
            src={`${BLOB}/hero-mobile-img-7Pu5iprPcdSC74wGF5fWjn9sr51dKA.webp`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent rounded-[20px]">
            <div className="h-full flex flex-col justify-center p-6 md:p-10 lg:p-14 max-w-lg">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">
                Pet Grooming<br />On Demand
              </h1>
              <p className="mt-3 md:mt-4 text-white/80 text-sm md:text-base max-w-md">
                Top-rated groomers near you. See real-time availability and book instantly. No calls, no waiting.
              </p>
              <a href="/guest/booking/start" className="no-underline w-fit">
                <button className="mt-4 md:mt-6 bg-[#ff314a] hover:bg-[#e02a40] text-white px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base rounded-lg font-medium transition-all cursor-pointer border-0">
                  Book Now
                </button>
              </a>
              <p className="mt-3 md:mt-4 text-white/60 text-xs md:text-sm">
                Real online booking. Confirmed in minutes.
              </p>
              <div className="mt-4 md:mt-6 flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-white">200K+ Pets Groomed</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
                    <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} />
                    <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} />
                    <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2} />
                  </svg>
                  <span className="text-white">Same Day Booking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
