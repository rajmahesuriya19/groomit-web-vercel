import { Link } from "react-router-dom"

const IMG = "https://qa.groomit.me/v7/images"

const benefits = [
  {
    icon: `${IMG}/pet-grooming-prices/calendar.svg`,
    title: "Stay on Schedule, Stress-Free",
    desc: "Regular grooming keeps your pet looking and feeling their best.",
  },
  {
    icon: `${IMG}/pet-grooming-prices/lock.svg`,
    title: "Lock In Your Preferred Groomer",
    desc: "Secure your favourite groomer at your best times",
  },
  {
    icon: `${IMG}/pet-grooming-prices/shield-tick.svg`,
    title: "Hassle-Free Auto-Scheduling",
    desc: "No need to rebook every time. we'll handle it for you.",
  },
  {
    icon: `${IMG}/pet-grooming-prices/emoji-normal.svg`,
    title: "Flexible & Risk-Free",
    desc: "Modify or cancel anytime without stress.",
  },
]

export default function RecurringBenefits() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h2 className="ff-inter-semibold text-[#2a2a2a] text-2xl md:text-[1.75rem] text-center mb-2 italic">Recurring Grooming for Consistent Care</h2>
      <p className="text-sm text-[#4a5565] text-center max-w-2xl mx-auto mb-10">
        {"Keep your pet happy, clean, and healthy while saving more with our recurring grooming plans."}
        <Link to="/recurring-booking" className="text-[#FF385C] no-underline hover:underline">Why Go Recurring?</Link>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="border border-[#e5e7eb] rounded-2xl p-5 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#F0FFF4] flex items-center justify-center mb-4">
              <img src={b.icon} alt="" className="w-7 h-7" />
            </div>
            <h3 className="ff-inter-semibold text-[#2a2a2a] text-sm mb-2">{b.title}</h3>
            <p className="text-xs text-[#4a5565] leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
