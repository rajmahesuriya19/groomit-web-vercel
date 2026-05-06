const IMG_BASE = "https://raj.dev.groomit.me"

function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill="#ECFDF5" />
      <path d="M6 10l2.5 2.5L14 7.5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const serviceOptions = [
  {
    icon: `${IMG_BASE}/v7/images/home/mobile-van.svg`,
    title: "Mobile Spa",
    features: [
      "Fully equipped van at your doorstep",
      "Private, one-on-one experience",
      "Convenient for busy schedules",
      "Book easily through Groomit",
    ],
  },
  {
    icon: `${IMG_BASE}/v7/images/home/in-home.svg`,
    title: "In-Home",
    features: [
      "For pets who prefer familiar surroundings",
      "Grooming in the comfort of your home",
      "Less travel and minimal disruption",
      "Book easily through Groomit",
    ],
  },
  {
    icon: `${IMG_BASE}/v7/images/home/salon.svg`,
    title: "Salon",
    features: [
      "Ideal for pets comfortable with salon",
      "Structured grooming environment",
      "Access to specialized tools",
      "Book easily through Groomit",
    ],
  },
]

export default function FindBestFit() {
  return (
    <section className="find-bg-F1F1F3 pt-60-pb-60">
      <div className="container mx-auto px-4">
        <div className="ff-inter-semibold fs-32px font-black-2A2A2A text-left md:text-center">
          Find the Best Fit for Your Pet
        </div>
        <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 text-left md:text-center mt-2 md:mt-0 pb-20-px">
          Compare grooming options and choose the experience that suits your pet&apos;s needs and your schedule.
        </div>

        <div className="pet-box gap-2 md:gap-12 overflow-x-auto">
          {serviceOptions.map((service) => (
            <div key={service.title} className="bg-white border w-full min-w-[280px] rounded-2xl p-20">
              <div className="flex items-center">
                <div className="border rounded-full p-3 mr-3 bg-[#FFF0F2]">
                  <img src={service.icon} width={24} height={24} alt={service.title} />
                </div>
                <div className="ff-inter-semibold fs-20">{service.title}</div>
              </div>
              <ul className="list-none mb-0 p-0 mt-5">
                {service.features.map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 ${i < service.features.length - 1 ? "pb-3" : ""}`}>
                    <CheckCircle />
                    <span className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
