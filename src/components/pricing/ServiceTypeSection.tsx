const IMG = "https://qa.groomit.me/v7/images"

export default function ServiceTypeSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-14 md:py-20">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
        {/* Left: Text content */}
        <div className="flex-1 md:max-w-[420px]">
          <h2 className="text-[#2a2a2a] text-2xl md:text-[1.85rem] font-semibold mb-10 italic">Choose Your Service Type</h2>

          <div className="flex items-start gap-4 mb-8">
            <div className="w-11 h-11 rounded-xl bg-[#FFF0F2] flex items-center justify-center shrink-0">
              <img src={`${IMG}/icons/mobile-selection-a.svg`} alt="" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-[#2a2a2a] text-[15px] mb-1.5">Mobile Van Grooming</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">A fully equipped grooming van comes right to your doorstep. Complete salon experience without leaving home.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#EBF3FE] flex items-center justify-center shrink-0">
              <img src={`${IMG}/icons/home-selection-a.svg`} alt="" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-[#2a2a2a] text-[15px] mb-1.5">In-Home Grooming</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">A professional groomer pampers your pet inside your home, in their most comfortable environment.</p>
            </div>
          </div>
        </div>

        {/* Right: Video thumbnails */}
        <div className="flex-1 flex gap-4">
          {/* Mobile video card */}
          <div className="flex-1 relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={`${IMG}/home/video-service-mobile.webp`} alt="Groomit Mobile Van Service" className="w-full h-52 md:h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20 flex items-center justify-center group-hover:from-black/50 transition-all">
              <div className="w-14 h-14 rounded-full bg-[#FF385C] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="6 3 20 12 6 21 6 3" /></svg>
              </div>
            </div>
            <div className="absolute top-4 left-0 right-0 flex justify-center">
              <span className="text-white text-[11px] font-semibold tracking-[0.25em] uppercase">MOBILE</span>
            </div>
          </div>
          {/* In-Home video card */}
          <div className="flex-1 relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={`${IMG}/home/video-service-in-home.webp`} alt="Groomit In-Home Service" className="w-full h-52 md:h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20 flex items-center justify-center group-hover:from-black/50 transition-all">
              <div className="w-14 h-14 rounded-full bg-[#FF385C] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="6 3 20 12 6 21 6 3" /></svg>
              </div>
            </div>
            <div className="absolute top-4 left-0 right-0 flex justify-center">
              <span className="text-white text-[11px] font-semibold tracking-[0.25em] uppercase">IN-HOME</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
