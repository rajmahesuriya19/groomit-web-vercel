import { useState } from "react"

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF385C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5" /></svg>
)

const packages = [
  {
    name: "GOLD",
    color: "#C8A400",
    price: "$80",
    tabs: ["Haircut with Bath", "Bath Only"],
    badge: "Anytime booking",
    badgeBg: "#FFF0F2",
    badgeColor: "#FF385C",
    description: "Ultimate flexibility: same-day grooming at your convenience, perfect for pet parents who value time above all.",
    features: ["Haircut", "Blow Dry", "Bath", "Dry Brush Out", "Ear Cleaning", "Cologne", "Nail Trim", "Sanitary trim"],
  },
  {
    name: "ECO",
    color: "#22C55E",
    price: "$80",
    tabs: ["Haircut with Bath", "Bath Only"],
    badge: "Book ahead & save",
    badgeBg: "#F0FFF4",
    badgeColor: "#22C55E",
    description: "Same premium groom at a lower price. Simply book ahead and save without compromising quality.",
    features: ["Haircut", "Blow Dry", "Bath", "Dry Brush Out", "Ear Cleaning", "Cologne", "Nail Trim", "Sanitary trim"],
  },
  {
    name: "SILVER",
    color: "#9CA3AF",
    price: "$60",
    tabs: ["Haircut with Bath", "Bath Only"],
    badge: "Anytime booking",
    badgeBg: "#F7F8FA",
    badgeColor: "#6B7280",
    description: "Quick care for in-between grooms or short-haired pets who just need frequent freshening.",
    features: ["Bath", "Blow Dry", "Ear Cleaning", "Dry Brush Out", "Nail Trim"],
  },
]

export default function PricingCards() {
  const [activeTabs, setActiveTabs] = useState([0, 0, 0])

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {packages.map((pkg, idx) => (
          <div key={pkg.name} className="border border-[#e5e7eb] rounded-2xl p-5 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-1">
              <div>
                <h3 className="ff-inter-bold text-lg" style={{ color: pkg.color }}>{pkg.name}</h3>
                <p className="text-sm text-[#4a5565] mt-0.5">Starting at {pkg.price}</p>
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: pkg.badgeBg, color: pkg.badgeColor }}>{pkg.badge}</span>
            </div>

            {/* Tabs */}
            <div className="flex gap-0 bg-[#f7f8fa] rounded-lg p-1 mt-3 mb-4">
              {pkg.tabs.map((tab, tIdx) => (
                <button
                  key={tab}
                  onClick={() => {
                    const newTabs = [...activeTabs]
                    newTabs[idx] = tIdx
                    setActiveTabs(newTabs)
                  }}
                  className={`flex-1 text-xs py-2 px-2 rounded-md transition-all border-0 cursor-pointer ${activeTabs[idx] === tIdx ? "bg-white font-semibold text-[#2a2a2a] shadow-sm" : "bg-transparent text-[#6b7280]"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-[#4a5565] leading-relaxed mb-4">{pkg.description}</p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mt-auto">
              {pkg.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm text-[#2a2a2a]">
                  <CheckIcon />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Book Service button */}
      <div className="flex justify-center mt-8">
        <a href="/guest/booking/start" className="groomit__button inline-block no-underline text-white text-center px-10">
          Book Service
        </a>
      </div>
    </section>
  )
}
