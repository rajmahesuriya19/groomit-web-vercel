const IMG_BASE = "https://raj.dev.groomit.me"

const bulletItems = [
  "Easy online booking in minutes",
  "Real-time availability across all service types",
  "Choose your groomer or get matched automatically",
  "In-home, mobile van, and salon options",
  "Upfront pricing with verified reviews",
  "Same-day appointments available on select services",
]

export default function WhyGroomit() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between py-10 md:py-14 gap-6 md:gap-12">
        <div className="w-full">
          <a className="block rounded-2xl overflow-hidden relative" href="#">
            <img
              className="w-full h-auto rounded-2xl"
              height={350}
              src={`${IMG_BASE}/v7/images/home/mobile-van-video.webp`}
              alt="Groomit mobile van video thumbnail"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FF385C]/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                <svg width="18" height="22" viewBox="0 0 22 26" fill="none" className="ml-1">
                  <path d="M22 13L0 26V0L22 13Z" fill="white" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        <div className="w-full">
          <h2 className="font-semibold text-2xl md:text-[32px] text-[#1A1A1A] mb-0">Why Groomit</h2>
          <p className="text-[#4A5565] text-base leading-relaxed py-4">
            {"Book pet grooming the way that works best for you\u2014whether at home, in a mobile van, or at a salon\u2014all in one place."}
          </p>

          <ul className="list-none mb-0 p-0 space-y-3">
            {bulletItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <img
                  className="shrink-0 mt-0.5"
                  src={`${IMG_BASE}/v7/images/home/tick-circle.svg`}
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                />
                <span className="text-[#4A5565] text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
