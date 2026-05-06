const IMG_BASE = "https://raj.dev.groomit.me"

export default function ServiceTypeSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Text content */}
        <div className="flex-1">
          <h2 className="ff-inter-semibold text-[#2a2a2a] text-2xl md:text-[1.75rem] mb-6">Choose Your Service Type</h2>

          <div className="flex items-start gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#FFF0F2] flex items-center justify-center shrink-0 mt-0.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF385C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
            </div>
            <div>
              <h3 className="ff-inter-semibold text-[#2a2a2a] text-base mb-1">Mobile Van Grooming</h3>
              <p className="text-sm text-[#4a5565] leading-relaxed">A fully equipped grooming van comes right to your doorstep. Complete salon experience without leaving home.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF0F2] flex items-center justify-center shrink-0 mt-0.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF385C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
            </div>
            <div>
              <h3 className="ff-inter-semibold text-[#2a2a2a] text-base mb-1">In-Home Grooming</h3>
              <p className="text-sm text-[#4a5565] leading-relaxed">A professional groomer pampers your pet inside your home, in their most comfortable environment.</p>
            </div>
          </div>
        </div>

        {/* Right: Video thumbnails */}
        <div className="flex-1 flex gap-3">
          {/* Mobile video card */}
          <div className="flex-1 relative rounded-2xl overflow-hidden group cursor-pointer">
            <img src={`${IMG_BASE}/v7/images/home/video-van.png`} alt="Mobile grooming" className="w-full h-48 md:h-56 object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#FF385C] flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
            </div>
            <div className="absolute top-3 left-0 right-0 flex justify-center">
              <span className="text-white text-xs font-medium tracking-[0.3em] uppercase">MOBILE</span>
            </div>
          </div>
          {/* In-Home video card */}
          <div className="flex-1 relative rounded-2xl overflow-hidden group cursor-pointer">
            <img src={`${IMG_BASE}/v7/images/home/video-van.png`} alt="In-home grooming" className="w-full h-48 md:h-56 object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#FF385C] flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
            </div>
            <div className="absolute top-3 left-0 right-0 flex justify-center">
              <span className="text-white text-xs font-medium tracking-[0.3em] uppercase">IN-HOME</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
