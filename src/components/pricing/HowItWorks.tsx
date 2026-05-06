const IMG = "https://qa.groomit.me/v7/images"

const steps = [
  {
    icon: `${IMG}/pet-grooming-prices/calendar.svg`,
    iconBg: "#FFF0F2",
    title: "Schedule",
    desc: "Pick a time, tell us your pet's breed and needs.",
  },
  {
    icon: `${IMG}/icons/mobile-selection-a.svg`,
    iconBg: "#EBF3FE",
    title: "Arrival",
    desc: "Groomer arrives fully prepared in-home or mobile.",
  },
  {
    icon: `${IMG}/pet-grooming-prices/message.svg`,
    iconBg: "#F0FFF4",
    title: "Updates",
    desc: "Get notified when your pet's spa day is done.",
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#f5f0ec] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-[#2a2a2a] text-2xl md:text-[1.85rem] font-semibold text-center mb-12 italic">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="text-center flex flex-col items-center">
              {/* Circle with dog image + icon badge */}
              <div className="relative mb-5">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-white shadow-md">
                  <img src={`${IMG}/pet-grooming-prices/dog-transparent.png`} alt={step.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full flex items-center justify-center shadow-md border-2 border-white" style={{ backgroundColor: step.iconBg }}>
                  <img src={step.icon} alt="" className="w-4.5 h-4.5" />
                </div>
              </div>
              <h3 className="font-semibold text-[#2a2a2a] text-base mb-2">{step.title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed max-w-[240px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
