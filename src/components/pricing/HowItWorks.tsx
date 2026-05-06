const IMG = "https://qa.groomit.me/v7/images"

const steps = [
  {
    img: `${IMG}/pet-grooming-prices/dog-transparent.png`,
    icon: `${IMG}/pet-grooming-prices/calendar.svg`,
    title: "Schedule",
    desc: "Pick a time, tell us your pet's breed and needs.",
  },
  {
    img: `${IMG}/pet-grooming-prices/dog-transparent.png`,
    icon: `${IMG}/icons/mobile-selection-a.svg`,
    title: "Arrival",
    desc: "Groomer arrives fully prepared in-home or mobile.",
  },
  {
    img: `${IMG}/pet-grooming-prices/dog-transparent.png`,
    icon: `${IMG}/pet-grooming-prices/message.svg`,
    title: "Updates",
    desc: "Get notified when your pet's spa day is done.",
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#f5f0ec] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="ff-inter-semibold text-[#2a2a2a] text-2xl md:text-[1.75rem] text-center mb-10 italic">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-white relative">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
                  <img src={step.icon} alt="" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="ff-inter-semibold text-[#2a2a2a] text-base mb-2">{step.title}</h3>
              <p className="text-sm text-[#4a5565] leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
