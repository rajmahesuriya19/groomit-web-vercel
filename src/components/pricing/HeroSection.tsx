const IMG = "https://qa.groomit.me/v7/images"

export default function HeroSection() {
  return (
    <section className="bg-[#f5f0ec] rounded-2xl mx-4 lg:mx-8 mt-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-[#2a2a2a] text-3xl md:text-[2.75rem] leading-[1.15] font-bold mb-6 text-balance">
            {"Best-Priced Mobile &"}
            <br />
            In-Home Pet Grooming
          </h1>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img src={`${IMG}/home/pet-group.webp`} alt="Pet reviews" className="h-9" />
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[#4a5565]">
              <span className="font-bold text-[#2a2a2a]">4.8</span>
              <img src={`${IMG}/home/star-orange.svg`} alt="" className="w-4 h-4" />
              <span className="text-[#9ca3af]">|</span>
              <span className="underline cursor-pointer hover:text-[#2a2a2a] transition-colors">40.7K reviews</span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
          <img
            src={`${IMG}/pet-grooming-prices/pet-grooming-banner.svg`}
            alt="Groomit mobile grooming van"
            className="w-full max-w-[480px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
