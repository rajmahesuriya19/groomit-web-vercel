const IMG_BASE = "https://raj.dev.groomit.me"

const serviceOptions = [
  {
    icon: `${IMG_BASE}/v7/images/home/mobile-van.svg`,
    title: "Mobile Spa",
    description: "Fully equipped van comes to you. Private, one-on-one grooming at your doorstep.",
    highlights: ["At your location", "No travel needed", "Same-day available"],
  },
  {
    icon: `${IMG_BASE}/v7/images/home/in-home.svg`,
    title: "In-Home",
    description: "Groomer visits your home. Perfect for pets who prefer familiar surroundings.",
    highlights: ["Comfort of home", "Less stress", "Flexible scheduling"],
  },
  {
    icon: `${IMG_BASE}/v7/images/home/salon.svg`,
    title: "Salon",
    description: "Visit a professional salon. Structured environment with specialized tools.",
    highlights: ["Pro equipment", "Quick service", "Walk-in options"],
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
          Compare grooming options and choose the experience that suits your pet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {serviceOptions.map((service) => (
            <div key={service.title} className="bg-white border border-[#E5E7EB] rounded-2xl p-5 hover:border-[#FF385C]/30 hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="rounded-full p-3 bg-[#FFF0F2]">
                  <img src={service.icon} width={24} height={24} alt={service.title} />
                </div>
                <span className="font-semibold text-lg text-[#1A1A1A]">{service.title}</span>
              </div>
              <p className="text-[#4A5565] text-sm mt-3 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {service.highlights.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-[#FF385C] bg-[#FFF0F2] px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
