const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"
const IMG = "https://qa.groomit.me/v7/images"

export default function HeroSection() {
  return (
    <section className="py-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[20px] overflow-hidden">
          {/* Desktop banner */}
          <img
            alt="Groomit mobile grooming van with groomer and dog"
            width={1280}
            height={500}
            className="hidden md:block w-full h-auto object-cover rounded-[20px]"
            src={`${BLOB}/latest-home-banner-mFtdiyzZCcFCYhdIGMFaTKyXA8DiUi.png`}
          />
          {/* Mobile banner */}
          <img
            alt="Groomit mobile grooming van"
            width={400}
            height={500}
            className="block md:hidden w-full h-auto object-cover rounded-[20px]"
            src={`${BLOB}/hero-mobile-img-7Pu5iprPcdSC74wGF5fWjn9sr51dKA.webp`}
          />
          {/* Overlay content */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent rounded-[20px]">
            <div className="h-full flex flex-col justify-center p-6 md:p-10 lg:p-14 max-w-lg">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">
                {"Best-Priced Mobile &"}
                <br />
                In-Home Pet Grooming
              </h1>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex -space-x-2">
                  <img src={`${IMG}/home/pet-group.webp`} alt="Pet reviews" className="h-9" />
                </div>
                <div className="flex items-center gap-1.5 text-sm text-white/80">
                  <span className="font-bold text-white">4.8</span>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white/60">|</span>
                  <span className="text-white/80">40.7K reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
