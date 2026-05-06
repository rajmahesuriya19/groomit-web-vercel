const IMG_BASE = "https://raj.dev.groomit.me"

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
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-[#d9d9d9] border-2 border-white" />
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm text-[#4a5565]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF7631" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <span className="font-semibold text-[#2a2a2a]">4.8</span>
              <span>|</span>
              <span>40.7K reviews</span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={`${IMG_BASE}/v7/images/home/hero-image.png`}
            alt="Groomit mobile grooming van"
            width={400}
            height={240}
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
