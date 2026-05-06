import { Link } from "react-router-dom"

const IMG = "https://qa.groomit.me/v7/images"

const flexibleFeatures = [
  { icon: `${IMG}/webapp/icons/menu-new/calendar.svg`, title: "Auto-scheduled, 1 week in advance", desc: "We create your next appointment automatically" },
  { icon: `${IMG}/icons/card-black.svg`, title: "Charged only when confirmed", desc: "No upfront payment, Billed Only when next appt is schedule & confirm" },
  { icon: `${IMG}/webapp/icons/refresh-back.svg`, title: "Skip or reschedule anytime", desc: "Plans changed? You can modify or skip without hassle" },
]

const flexibleWho = [
  "Who want auto-scheduling with pay per visit",
  "New to Groomit or trying different cadences",
  "Varied schedules / travel often",
]

const annualFeatures = [
  { icon: `${IMG}/pet-grooming-prices/lock.svg`, title: "Price locked for 12 months", desc: "Enjoy the same rates all year, No seasonal or surge increases" },
  { icon: `${IMG}/pet-grooming-prices/shield-tick.svg`, title: "Refundable for unused appointments", desc: "Any remaining appointments are fully refundable" },
  { icon: `${IMG}/webapp/icons/menu-new/calendar.svg`, title: "Auto-scheduled for the whole year", desc: "Get your frequency once and we'll handle your entire year" },
]

const annualWho = [
  "Pet parents who love routine and reliability",
  "Want protection from seasonal surges",
  "Owners who prefer to \"set it and forget it\"",
]

export default function PlanComparison() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1A1A1A] mb-2">Choose the Recurring Plan That Fits You</h2>
        <p className="text-center text-[#4a5565] text-sm mb-4">Book Recurring &amp; Get up to <span className="font-semibold text-[#1A1A1A]">30% OFF</span></p>

        {/* Fi GPS link */}
        <div className="flex justify-center mb-8">
          <Link to="/recurring-booking" className="inline-flex items-center gap-2 border border-[#E4E4E8] rounded-full px-5 py-2.5 text-sm font-medium text-[#1A1A1A] hover:border-[#FF385C] transition-colors no-underline">
            <img src={`${IMG}/webapp/icons/arrow-right-blackr.svg`} alt="" className="w-4 h-4" />
            FREE Fi GPS Collar + 6 Months of Membership
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Flexible Plan */}
          <div className="border border-[#E4E4E8] rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">Flexible Plan</h3>
            <p className="text-sm text-[#4a5565] mb-6 mt-0">Pay Per Appointment</p>

            <div className="flex flex-col gap-5 mb-6">
              {flexibleFeatures.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <img src={f.icon} alt="" className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#1A1A1A] mb-0.5">{f.title}</h4>
                    <p className="text-xs text-[#4a5565] m-0">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E4E4E8] pt-5">
              <h4 className="text-sm font-semibold text-[#1A1A1A] mb-3">Who Loves Flexible</h4>
              <ul className="space-y-2 mb-0 pl-0 list-none">
                {flexibleWho.map((w) => (
                  <li key={w} className="text-sm text-[#4a5565] flex items-start gap-2">
                    <span className="text-[#FF385C] mt-1">{"•"}</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Annual Plan */}
          <div className="border border-[#E4E4E8] rounded-2xl p-6 md:p-8 relative">
            <div className="absolute top-6 right-6">
              <span className="bg-[#1A1A1A] text-white text-xs font-semibold px-3 py-1.5 rounded-full">Best Value</span>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">Annual Plan</h3>
            <p className="text-sm text-[#4a5565] mb-6 mt-0">Pay In Advance for a Year</p>

            <div className="flex flex-col gap-5 mb-6">
              {annualFeatures.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <img src={f.icon} alt="" className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#1A1A1A] mb-0.5">{f.title}</h4>
                    <p className="text-xs text-[#4a5565] m-0">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E4E4E8] pt-5">
              <h4 className="text-sm font-semibold text-[#1A1A1A] mb-3">Who Loves Annual</h4>
              <ul className="space-y-2 mb-0 pl-0 list-none">
                {annualWho.map((w) => (
                  <li key={w} className="text-sm text-[#4a5565] flex items-start gap-2">
                    <span className="text-[#FF385C] mt-1">{"•"}</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA + note */}
        <div className="text-center mt-8">
          <Link
            to="/guest/booking/start"
            className="inline-flex items-center justify-center bg-[#FF385C] text-white font-semibold text-base px-10 py-3.5 rounded-xl hover:bg-[#E62E4F] transition-colors no-underline"
          >
            Book &amp; Start Saving
          </Link>
          <p className="text-xs text-[#4a5565] mt-4 italic">
            *To switch from Flexible to Annual, simply cancel your Flexible plan and select the Annual option during booking
          </p>
        </div>
      </div>
    </section>
  )
}
