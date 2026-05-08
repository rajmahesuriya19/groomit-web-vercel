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
    <section className="bg-[#F7F8FA] py-10 md:py-14">
      <div className="container mx-auto px-4">
        <h2 className="font-semibold text-2xl md:text-[32px] text-[#1A1A1A] text-left md:text-center">
          Find the Best Fit for Your Pet
        </h2>
        <p className="text-[#4A5565] text-base text-left md:text-center mt-2 mb-6">
          Compare grooming options and choose the experience that suits your pet&apos;s needs and your schedule.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {serviceOptions.map((service) => (
            <div key={service.title} className="bg-white border border-[#E5E7EB] rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-full p-3 bg-[#FFF0F2]">
                  <img src={service.icon} width={24} height={24} alt={service.title} />
                </div>
                <span className="font-semibold text-lg text-[#1A1A1A]">{service.title}</span>
              </div>
              <ul className="list-none mb-0 p-0 mt-4 space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle />
                    <span className="text-[#4A5565] text-sm">{feature}</span>
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
