const IMG_BASE = "https://raj.dev.groomit.me"

const groomers = [
  { name: "Sarah M.", rating: 4.9, reviews: 234, type: "Mobile", pet: "Dogs", area: "Brooklyn", experience: "4 yrs experience", nextAvailable: "Next available today", image: `${IMG_BASE}/v7/images/webapp/icons/profile-squre.svg` },
  { name: "Perry J.", rating: 4.8, reviews: 189, type: "In-Home", pet: "Cats", area: "Queens", experience: "Cats & senior pets", nextAvailable: "Tomorrow at 9:00 AM", image: `${IMG_BASE}/v7/images/webapp/icons/profile-squre.svg` },
  { name: "Maria L.", rating: 5.0, reviews: 312, type: "Mobile", pet: "Dogs & Cats", area: "Manhattan", experience: "6 yrs experience", nextAvailable: "Next available today", image: `${IMG_BASE}/v7/images/webapp/icons/profile-squre.svg` },
  { name: "James K.", rating: 4.9, reviews: 267, type: "In-Home", pet: "Dogs", area: "Bronx", experience: "5 yrs experience", nextAvailable: "Tomorrow at 10:00 AM", image: `${IMG_BASE}/v7/images/webapp/icons/profile-squre.svg` },
]

export default function GroomersSection() {
  return (
    <section className="container mx-auto px-4 py-10 md:py-14">
      <h2 className="font-semibold text-2xl md:text-[32px] text-[#1A1A1A] text-left md:text-center mb-0">
        Professional Groomers Near You
      </h2>
      <p className="text-[#4A5565] text-base text-left md:text-center mt-2 mb-6">
        Vetted, reviewed, and trusted by thousands of pet parents
      </p>

      {/* Mobile: horizontal scroll, Desktop: grid */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible">
        {groomers.map((groomer, idx) => (
          <div key={idx} className="border border-[#E5E7EB] rounded-2xl p-4 bg-white flex flex-col min-w-[260px] md:min-w-0 shrink-0 md:shrink">
            <div className="flex items-center gap-3">
              <img
                src={groomer.image}
                alt={groomer.name}
                width={48}
                height={48}
                className="object-cover rounded-full"
              />
              <div>
                <div className="font-semibold text-base text-[#1A1A1A]">{groomer.name}</div>
                <div className="text-[#4A5565] text-sm flex items-center gap-1.5 mt-1">
                  <img src={`${IMG_BASE}/v7/images/home/star-orange.svg`} alt="Star" width={14} height={14} />
                  <span className="font-semibold text-[#1A1A1A]">{groomer.rating}</span>
                  <span>({groomer.reviews})</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-[#F7F8FA] text-[#4A5565] text-xs px-3 py-1.5 rounded-full">
                {groomer.type}
              </span>
              <span className="bg-[#F7F8FA] text-[#4A5565] text-xs px-3 py-1.5 rounded-full">
                {groomer.pet}
              </span>
            </div>

            <div className="text-[#4A5565] text-sm mt-3 flex items-center gap-2">
              <img src={`${IMG_BASE}/v7/images/home/location-gray.svg`} alt="location" width={16} height={16} />
              {groomer.area} &bull; {groomer.experience}
            </div>

            <div className="text-[#16a34a] text-sm mt-2 flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {groomer.nextAvailable}
            </div>

            <button className="bg-transparent mt-4 border-0 font-semibold text-sm text-[#FF385C] cursor-pointer p-0 text-left inline-flex items-center gap-1">
              View Profile
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
