const IMG_BASE = "https://raj.dev.groomit.me"

const groomers = [
  { name: "Sarah M.", rating: 4.9, reviews: 234, type: "Mobile", pet: "Dogs", area: "Brooklyn", experience: "4 yrs experience", nextAvailable: "Next available today", image: `${IMG_BASE}/v7/images/webapp/icons/profile-squre.svg` },
  { name: "Perry J.", rating: 4.8, reviews: 189, type: "In-Home", pet: "Cats", area: "Queens", experience: "Cats & senior pets", nextAvailable: "Tomorrow at 9:00 AM", image: `${IMG_BASE}/v7/images/webapp/icons/profile-squre.svg` },
  { name: "Maria L.", rating: 5.0, reviews: 312, type: "Mobile", pet: "Dogs & Cats", area: "Manhattan", experience: "6 yrs experience", nextAvailable: "Next available today", image: `${IMG_BASE}/v7/images/webapp/icons/profile-squre.svg` },
  { name: "James K.", rating: 4.9, reviews: 267, type: "In-Home", pet: "Dogs", area: "Bronx", experience: "5 yrs experience", nextAvailable: "Tomorrow at 10:00 AM", image: `${IMG_BASE}/v7/images/webapp/icons/profile-squre.svg` },
]

export default function GroomersSection() {
  return (
    <div className="container mx-auto px-4 pt-60-pb-60">
      <h2 className="ff-inter-semibold fs-32px font-black-2A2A2A text-left md:text-center mb-0">
        Professional Groomers Near You
      </h2>
      <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 text-left md:text-center mb-4 mt-10-px">
        Vetted, reviewed, and trusted by thousands of pet parents
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {groomers.map((groomer, idx) => (
          <div key={idx} className="border border-[#E4E4E8] rounded-2xl p-3 bg-white flex flex-col">
            <div className="flex items-center">
              <img
                src={groomer.image}
                alt={groomer.name}
                width={50}
                height={50}
                className="object-cover mr-3 rounded-full"
              />
              <div>
                <div className="ff-inter-semibold fs-20 leading-none">{groomer.name}</div>
                <div className="ff-inter-regular-400 font-gray-4A5565 fs-16-h4 leading-none flex items-center mt-2">
                  <img src={`${IMG_BASE}/v7/images/home/star-orange.svg`} alt="Star" width={16} height={16} className="mr-2" />
                  <span className="ff-inter-semibold pr-2">{groomer.rating}</span>({groomer.reviews})
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-15-px">
              <div className="ff-inter-regular-400 find-bg-F1F1F3 font-gray-4A5565 fs-16-h4 leading-none px-3 py-3 rounded-full">
                {groomer.type}
              </div>
              <div className="ff-inter-regular-400 find-bg-F1F1F3 font-gray-4A5565 fs-16-h4 leading-none px-3 py-3 rounded-full">
                {groomer.pet}
              </div>
            </div>

            <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 mt-15-px flex items-center">
              <img src={`${IMG_BASE}/v7/images/home/location-gray.svg`} alt="location" width={18} height={18} className="inline mr-2" />
              {groomer.area} &bull; {groomer.experience}
            </div>

            <div className="ff-inter-regular-400 fs-16-h4 mt-10-px flex items-center gap-1.5" style={{ color: "#16a34a" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {groomer.nextAvailable}
            </div>

            <button className="bg-transparent mt-15-px border-0 ff-inter-semibold fs-16-h4 font-red-i cursor-pointer p-0 text-left">
              View Profile
              <img src={`${IMG_BASE}/v7/images/home/arrow-red.svg`} alt="arrow" width={16} height={16} className="inline ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
