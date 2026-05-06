const IMG_BASE = "https://raj.dev.groomit.me"

export default function WaysToSave() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left content */}
        <div className="flex-1">
          <h2 className="ff-inter-semibold text-[#2a2a2a] text-2xl md:text-[1.75rem] mb-6">Ways to Save on Grooming</h2>

          <div className="flex items-start gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-[#FFF0F2] flex items-center justify-center shrink-0 mt-0.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF385C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            </div>
            <div>
              <h3 className="ff-inter-semibold text-[#2a2a2a] text-base mb-1">Eco Package, Book Ahead</h3>
              <p className="text-sm text-[#4a5565] leading-relaxed">Plan 7 days in advance and enjoy discounted rates.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF0F2] flex items-center justify-center shrink-0 mt-0.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF385C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" /></svg>
            </div>
            <div>
              <h3 className="ff-inter-semibold text-[#2a2a2a] text-base mb-1">Recurring Booking</h3>
              <p className="text-sm text-[#4a5565] leading-relaxed">{"Set a regular schedule & save on every appointment."}</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center">
          <img
            src={`${IMG_BASE}/v7/images/home/cat-orange.png`}
            alt="Cat being groomed"
            className="w-full max-w-[400px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
