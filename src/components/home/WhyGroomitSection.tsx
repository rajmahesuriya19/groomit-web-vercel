const BULLETS = [
  'Easy online booking in minutes',
  'Real-time availability across all service types',
  'Choose your groomer or get matched automatically',
  'In-home, mobile van, and salon options',
  'Upfront pricing with verified reviews',
  'Same-day appointments available on select services',
]

export function WhyGroomitSection() {
  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="w-full max-w-330 mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center">

          {/* Left — video thumbnail */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl overflow-hidden bg-gray-200 h-65 lg:h-85">
              <img
                src="/v7/images/home/why-groomit-thumb.jpg"
                alt="Why Groomit"
                className="w-full h-full object-cover"
              />
              <button
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center group"
                onClick={() => { window.open('https://www.youtube.com/watch?v=groomit', '_blank') }}
              >
                <div className="w-16 h-16 rounded-full bg-[#FF314A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                    <path d="M22 13L0 26V0L22 13Z" fill="white" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right — text */}
          <div className="flex-1 w-full">
            <p className="text-[#FF314A] font-semibold text-sm mb-2 uppercase tracking-wide">About Us</p>
            <h2 className="text-[#2E2E2E] font-bold text-2xl lg:text-4xl leading-tight mb-4">
              Why Groomit
            </h2>
            <p className="text-[#4A5565] text-base mb-6">
              Book pet grooming the way that works best for you — whether at home, in a mobile van, or at a salon — all in one place.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#FF314A] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#2E2E2E] text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="/guest/booking/start"
              className="inline-block bg-[#2E2E2E] text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-black transition-colors no-underline"
            >
              Book Now
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
