const IMG_BASE = "https://raj.dev.groomit.me"

const steps = [
  {
    img: `${IMG_BASE}/v7/images/home/dog-corgy.png`,
    title: "Schedule",
    desc: "Pick a time, tell us your pet's breed and needs.",
  },
  {
    img: `${IMG_BASE}/v7/images/home/cat-orange.png`,
    title: "Arrival",
    desc: "Groomer arrives fully prepared in-home or mobile.",
  },
  {
    img: `${IMG_BASE}/v7/images/home/dog-black.png`,
    title: "Updates",
    desc: "Get notified when your pet's spa day is done.",
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#f5f0ec] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="ff-inter-semibold text-[#2a2a2a] text-2xl md:text-[1.75rem] text-center mb-10">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-white">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
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
