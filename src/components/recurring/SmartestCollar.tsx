const IMG = "https://qa.groomit.me/v7/images"

export default function SmartestCollar() {
  return (
    <section className="py-12 md:py-16 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 leading-tight">
              {"The World's Smartest GPS Collar"}
            </h2>
            <p className="text-sm text-[#4a5565] leading-relaxed mb-6">
              AI-powered GPS, health and behavior tracking, so you always know where they are, how they&apos;re doing, and what they need to feel their best.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://tryfi.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-[#1A1A1A] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#333] transition-colors no-underline"
              >
                Learn More
              </a>
              <a
                href="https://tryfi.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-white border border-[#E4E4E8] text-[#1A1A1A] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#F7F8FA] transition-colors no-underline"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={`${IMG}/recurring/collar_white_bg_yellow_11zon.png`}
              alt="Fi GPS Smart Collar"
              className="w-full max-w-[480px] h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
