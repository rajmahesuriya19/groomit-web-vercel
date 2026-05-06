const IMG = "https://qa.groomit.me/v7/images"

export default function HeroSection() {
  return (
    <section className="bg-[#f5f0ec] rounded-2xl mx-4 md:mx-8 mt-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h1 className="ff-inter-bold text-[#2a2a2a] text-3xl md:text-[2.5rem] leading-tight mb-4">
            {"Best-Priced Mobile &"}
            <br />
            In-Home Pet Grooming
          </h1>
          <div className="flex items-center gap-3">
            <img src={`${IMG}/home/pet-group.webp`} alt="Pet Group" className="h-8" />
            <div className="flex items-center gap-1 text-sm text-[#4a5565]">
              <span className="font-semibold text-[#2a2a2a]">3.8</span>
              <img src={`${IMG}/home/star-orange.svg`} alt="Star" className="w-4 h-4" />
              <span>|</span>
              <span className="underline">588 Reviews</span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={`${IMG}/pet-grooming-prices/pet-grooming-banner.svg`}
            alt="Groomit mobile grooming van"
            className="w-full max-w-[440px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
