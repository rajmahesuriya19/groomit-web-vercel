const IMG = "https://qa.groomit.me/v7/images"

const benefits = [
  { icon: `${IMG}/webapp/icons/menu/pet.svg`, title: "Healthier coat, happier pet", desc: "Prevents mats and skin issues" },
  { icon: `${IMG}/webapp/icons/heart-black.svg`, title: "Builds trust and comfort", desc: "Same groomer, less stress" },
  { icon: `${IMG}/webapp/icons/menu-new/calendar.svg`, title: "Always on schedule", desc: "We auto-schedule for you" },
  { icon: `${IMG}/webapp/icons/clock-gray.svg`, title: "Saves time and effort", desc: "No extra steps needed" },
]

export default function WhyRecurringMatters() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1A1A1A] mb-8">Why Recurring Matters</h2>
        <div className="border border-[#E4E4E8] rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <img src={b.icon} alt="" className="w-6 h-6 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-0.5">{b.title}</h3>
                  <p className="text-sm text-[#4a5565] m-0">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
