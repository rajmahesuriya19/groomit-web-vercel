import { useState } from "react"
import { Link } from "react-router-dom"

const CheckIcon = ({ color = "#22C55E" }: { color?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-px"><path d="M20 6 9 17l-5-5" /></svg>
)

const packages = [
  {
    name: "GOLD",
    color: "#C8A400",
    headerBg: "linear-gradient(135deg, #FFF8E1 0%, #FFF3CD 100%)",
    price: "$80",
    tabs: ["Haircut with Bath", "Bath Only"],
    badge: "Anytime booking",
    badgeBg: "#FFF0F2",
    badgeColor: "#FF385C",
    description: "Ultimate flexibility: same-day grooming at your convenience, perfect for pet parents who value time above all.",
    features: ["Haircut", "Blow Dry", "Bath", "Dry Brush Out", "Ear Cleaning", "Cologne", "Nail Trim", "Sanitary trim"],
    checkColor: "#C8A400",
  },
  {
    name: "ECO",
    color: "#22C55E",
    headerBg: "linear-gradient(135deg, #F0FFF4 0%, #DCFCE7 100%)",
    price: "$80",
    tabs: ["Haircut with Bath", "Bath Only"],
    badge: "Book ahead & save",
    badgeBg: "#F0FFF4",
    badgeColor: "#22C55E",
    description: "Same premium groom at a lower price. Simply book ahead and save without compromising quality.",
    features: ["Haircut", "Blow Dry", "Bath", "Dry Brush Out", "Ear Cleaning", "Cologne", "Nail Trim", "Sanitary trim"],
    checkColor: "#22C55E",
  },
  {
    name: "SILVER",
    color: "#9CA3AF",
    headerBg: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)",
    price: "$60",
    tabs: ["Haircut with Bath", "Bath Only"],
    badge: "Anytime booking",
    badgeBg: "#F7F8FA",
    badgeColor: "#6B7280",
    description: "Quick care for in-between grooms or short-haired pets who just need frequent freshening.",
    features: ["Bath", "Blow Dry", "Ear Cleaning", "Dry Brush Out", "Nail Trim"],
    checkColor: "#9CA3AF",
  },
]

export default function PricingCards() {
  const [activeTabs, setActiveTabs] = useState([0, 0, 0])

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {packages.map((pkg, idx) => (
          <div key={pkg.name} className="border border-[#e5e7eb] rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
            {/* Color header bar */}
            <div className="px-5 pt-5 pb-3" style={{ background: pkg.headerBg }}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-xl tracking-wide" style={{ color: pkg.color }}>{pkg.name}</h3>
                  <p className="text-sm text-[#4a5565] mt-1">Starting at <span className="font-semibold text-[#2a2a2a]">{pkg.price}</span></p>
                </div>
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap" style={{ backgroundColor: pkg.badgeBg, color: pkg.badgeColor }}>{pkg.badge}</span>
              </div>
            </div>

            <div className="px-5 pb-5 flex flex-col flex-1">
              {/* Tabs */}
              <div className="flex gap-0 bg-[#f3f4f6] rounded-lg p-1 mt-4 mb-4">
                {pkg.tabs.map((tab, tIdx) => (
                  <button
                    key={tab}
                    onClick={() => {
                      const newTabs = [...activeTabs]
                      newTabs[idx] = tIdx
                      setActiveTabs(newTabs)
                    }}
                    className={`flex-1 text-xs py-2.5 px-3 rounded-md transition-all border-0 cursor-pointer font-medium ${activeTabs[idx] === tIdx ? "bg-white text-[#2a2a2a] shadow-sm" : "bg-transparent text-[#6b7280] hover:text-[#4a5565]"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-[#4a5565] leading-relaxed mb-5">{pkg.description}</p>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-auto">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-[#2a2a2a]">
                    <CheckIcon color={pkg.checkColor} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Book Service button */}
      <div className="flex justify-center mt-10">
        <Link to="/guest/booking/start" className="groomit__button inline-block no-underline text-white text-center px-12 py-3.5 text-base font-semibold">
          Book Service
        </Link>
      </div>
    </section>
  )
}
