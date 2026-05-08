const IMG_BASE = "https://raj.dev.groomit.me"

const features = [
  { icon: "clock", title: "Easy Booking", desc: "Book online in minutes" },
  { icon: "calendar", title: "Real-time Availability", desc: "See slots instantly" },
  { icon: "user", title: "Choose Your Groomer", desc: "Or get matched automatically" },
  { icon: "home", title: "Multiple Options", desc: "In-home, mobile van, or salon" },
  { icon: "star", title: "Verified Reviews", desc: "Upfront pricing you can trust" },
  { icon: "zap", title: "Same Day Available", desc: "On select services" },
]

const icons: Record<string, JSX.Element> = {
  clock: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={1.5} /><path strokeWidth={1.5} d="M16 2v4M8 2v4M3 10h18" /></>,
  user: <><path strokeWidth={1.5} d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" strokeWidth={1.5} /></>,
  home: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
  star: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
  zap: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
}

export default function WhyGroomit() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between py-10 md:py-14 gap-6 md:gap-12">
        <div className="w-full md:w-1/2">
          <a className="block rounded-2xl overflow-hidden relative" href="#">
            <img
              className="w-full h-auto rounded-2xl"
              height={350}
              src={`${IMG_BASE}/v7/images/home/mobile-van-video.webp`}
              alt="Groomit mobile van video thumbnail"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FF385C]/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                <svg width="18" height="22" viewBox="0 0 22 26" fill="none" className="ml-1">
                  <path d="M22 13L0 26V0L22 13Z" fill="white" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="font-semibold text-2xl md:text-[32px] text-[#1A1A1A] mb-0">Why Groomit</h2>
          <p className="text-[#4A5565] text-base leading-relaxed mt-2 mb-5">
            Book pet grooming the way that works best for you — all in one place.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F8FA]">
                <div className="w-9 h-9 rounded-lg bg-[#FF385C]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#FF385C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icons[f.icon]}
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-sm text-[#1A1A1A]">{f.title}</div>
                  <div className="text-xs text-[#4A5565] mt-0.5">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
