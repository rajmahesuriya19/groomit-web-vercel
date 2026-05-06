const IMG = "https://qa.groomit.me/v7/images"

const features = [
  { img: `${IMG}/recurring/monitoring.svg`, title: "AI-Powered Behavior Monitoring", desc: "Track their steps, sleep, barking, eating, drinking, licking, and scratching habits." },
  { img: `${IMG}/recurring/ai-companion.svg`, title: "AI Companion", desc: "Tailored tips, personalized reminders, meet your go-to dog parenting resource." },
  { img: `${IMG}/recurring/improved-tracking.png`, title: "2x Improved GPS Tracking", desc: "Series 3+ outperforms previous generations to locate dogs faster than ever." },
  { img: `${IMG}/recurring/recurring-watch.png`, title: "Apple Watch Integration", desc: "No need to take your phone jogging anymore. Just wear your watch." },
  { img: `${IMG}/recurring/smart-records.png`, title: "Smart Vet Records", desc: "Automatically store, organize, and summarize key files in one place." },
]

export default function FiGPSCollar() {
  return (
    <section className="bg-[#FFF8E7] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Left content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 border border-[#D4A846] rounded-full px-4 py-2 mb-6">
              <img src={`${IMG}/webapp/icons/gift-black.svg`} alt="" className="w-5 h-5" />
              <span className="text-sm font-semibold text-[#1A1A1A]">$120+ Value Included Free</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8 leading-tight">
              FREE Fi GPS Collar +<br />6 Months of Membership
            </h2>

            <div className="flex flex-col gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <img src={f.img} alt={f.title} className="w-28 h-20 object-cover rounded-xl shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-[#1A1A1A] mb-1">{f.title}</h3>
                    <p className="text-sm text-[#4a5565] m-0 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right phone mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={`${IMG}/recurring/recurring-mobile.png`}
              alt="Fi GPS App on phone"
              className="w-full max-w-[380px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
