const IMG_BASE = "https://raj.dev.groomit.me"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4">
      {/* Web View */}
      <div className="relative hidden md:block">
        <img
          src={`${IMG_BASE}/v7/images/home/home-banner-web.webp`}
          alt="Home Banner"
          className="responsive-image w-full rounded-2xl"
          width={1125}
          height={465}
          fetchPriority="high"
        />
        <div className="absolute top-0 left-0 resolution-1199 home-text p-8 lg:p-12 max-w-150">
          <h1 className="text-white ff-inter-semibold fs-55px">
            Pet Grooming <br />
            On Demand
          </h1>
          <div className="text-white ff-inter-regular-400 fs-16-h4 mt-20-px">
            {"Top-rated pet groomers near you. See real-time"} <br />
            {"availability and book instantly. No calls, No waiting."}
          </div>
          <div className="mt-10-px">
            <a href="/guest/booking/start">
              <button className="fs-16-h4 groomit__button h-auto py-4 mt-5 w-55">
                Book Now
              </button>
            </a>
          </div>
          <div className="text-white ff-inter-regular-400 fs-14 pt-10-px">
            Real online booking. Confirmed in minutes.
          </div>
          <div className="text-white ff-inter-regular-400 fs-16-h4 flex items-center mt-10-px">
            <div className="rounded-full leading-none mt-5 flex items-center px-4 py-3" style={{ backgroundColor: "#ffffff3d" }}>
              <img src={`${IMG_BASE}/v7/images/home/pet-paws.svg`} alt="Paws" width={20} height={20} className="mr-2" />
              179K+ Pets Groomed
              <img src={`${IMG_BASE}/v7/images/home/flash.svg`} alt="Flash" width={20} height={20} className="mr-2 ml-4" />
              Same Day Booking
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative md:hidden">
        <img
          src={`${IMG_BASE}/v7/images/home/hero-mobile.webp`}
          alt="Home Banner"
          className="responsive-image w-full rounded-2xl"
          fetchPriority="high"
        />
        <div className="absolute top-0 text-center w-full h-full">
          <h1 className="text-white ff-inter-semibold text-4xl pt-25-px">
            Pet Grooming <br />
            On Demand
          </h1>
          <div className="text-white ff-inter-regular-400 fs-16-h4 mt-15-px">
            {"Top-rated pet groomers near you. See real-time"} <br />
            {"availability and book instantly. No calls, No waiting."}
          </div>
          <div className="text-white ff-inter-regular-400 fs-16-h4 flex items-center pet-grooming-mobile absolute bottom-4 w-full">
            <div className="w-full">
              <div className="flex justify-center">
                <img src={`${IMG_BASE}/v7/images/home/pet-paws.svg`} alt="Paws" width={20} height={20} className="mr-2" />
                179K+ Pets Groomed
                <img src={`${IMG_BASE}/v7/images/home/flash.svg`} alt="Flash" width={20} height={20} className="mr-2 ml-4" />
                Same Day Booking
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
