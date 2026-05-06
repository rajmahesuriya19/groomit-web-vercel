const IMG_BASE = "https://raj.dev.groomit.me"

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
                <div className="border rounded-full p-3 mr-3">
                  <img src={service.icon} width={24} height={24} alt={service.title} />
                </div>
                <div className="ff-inter-semibold fs-20">{service.title}</div>
              </div>
              <ul className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 custom-red-bullets mb-0">
                {service.features.map((feature, i) => (
                  <li key={i} className={`${i === 0 ? "pt-20-px" : ""} ${i < service.features.length - 1 ? "pb-10-px" : ""}`}>
                    <div>{feature}</div>
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
