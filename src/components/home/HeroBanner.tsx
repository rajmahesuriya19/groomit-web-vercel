const IMG_BASE = "https://raj.dev.groomit.me"

export default function HeroBanner() {
  return (
    <section className="container mx-auto px-4 pt-4 md:pt-6">
      {/* Desktop View */}
      <div className="relative hidden md:block rounded-3xl overflow-hidden">
        <div className="relative">
          <img
            src={`${IMG_BASE}/v7/images/home/home-banner-web.webp`}
            alt="Groomit mobile grooming van with groomer and dog"
            className="w-full h-auto object-cover"
            width={1125}
            height={465}
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="p-8 lg:p-12 xl:p-16 max-w-xl lg:max-w-2xl">
            <h1 className="text-white font-heading font-semibold text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
              Pet Grooming
              <span className="block text-white/90">On Demand</span>
            </h1>

            <p className="text-white/90 text-lg lg:text-xl mt-5 leading-relaxed max-w-md">
              Top-rated groomers near you. See real-time availability and book instantly. No calls, no waiting.
            </p>

            <div className="mt-8">
              <a href="/guest/booking/start" className="inline-block">
                <button className="bg-groomit-red hover:bg-[#E62E4F] text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Book Now
                </button>
              </a>
            </div>

            <p className="text-white/70 text-sm mt-4">
              Real online booking. Confirmed in minutes.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <a href="/download-groomit-app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <img src={`${IMG_BASE}/v7/images/home/play-store.svg`} width={120} height={36} alt="Google Play" />
              </a>
              <a href="/download-groomit-app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <img src={`${IMG_BASE}/v7/images/home/app-store.svg`} width={120} height={36} alt="App Store" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <img
                  src={`${IMG_BASE}/v7/images/home/pet-paws.svg`}
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                />
                <span className="text-white font-medium">200K+ Pets Groomed</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={`${IMG_BASE}/v7/images/home/flash.svg`}
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                />
                <span className="text-white font-medium">Same Day Booking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative md:hidden rounded-2xl overflow-hidden">
        <div className="relative">
          <img
            src={`${IMG_BASE}/v7/images/home/hero-mobile.webp`}
            alt="Professional mobile pet grooming service"
            className="w-full h-auto object-cover min-h-[480px]"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div className="text-center pt-4">
            <h1 className="text-white font-heading font-semibold text-3xl leading-tight tracking-tight">
              Pet Grooming
              <span className="block text-white/90">On Demand</span>
            </h1>

            <p className="text-white/90 text-base mt-3 leading-relaxed px-4">
              Top-rated groomers near you. Book instantly. No calls needed.
            </p>
          </div>

          <div className="space-y-4 pb-2">
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <img src={`${IMG_BASE}/v7/images/home/pet-paws.svg`} alt="" width={16} height={16} aria-hidden="true" />
                <span className="text-white font-medium">200K+ Pets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <img src={`${IMG_BASE}/v7/images/home/flash.svg`} alt="" width={16} height={16} aria-hidden="true" />
                <span className="text-white font-medium">Same Day</span>
              </div>
            </div>

            <a href="/guest/booking/start" className="block">
              <button className="w-full bg-groomit-red hover:bg-[#E62E4F] text-white font-semibold text-lg py-4 rounded-xl transition-all duration-200 shadow-lg">
                Book Now
              </button>
            </a>

            <p className="text-white/60 text-xs text-center">
              Confirmed in minutes. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
