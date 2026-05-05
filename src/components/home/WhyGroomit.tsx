const IMG_BASE = "https://raj.dev.groomit.me"

const bulletItems = [
  "Easy online booking in minutes",
  "Real-time availability across all service types",
  "Choose your groomer or get matched automatically",
  "In-home, mobile van, and salon options",
  "Upfront pricing with verified reviews",
  "Same-day appointments available on select services",
]

export default function WhyGroomit() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between pt-60-pb-60 gap-4 md:gap-12">
        <div className="w-full">
          <a className="groomit__overLap__a groomit__overLap__a--left block rounded-2xl overflow-hidden" href="#">
            <img
              className="responsive-image w-full"
              height={350}
              src={`${IMG_BASE}/v7/images/home/mobile-van-video.webp`}
              alt="Groomit Mobile Van Service"
            />
          </a>
        </div>

        <div className="w-full mt-4 md:mt-0">
          <h2 className="ff-inter-semibold fs-32px font-black-2A2A2A mb-0">Why Groomit</h2>
          <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 pb-20-px pt-10-px">
            Book pet grooming the way that works best for you - whether at home, in a mobile van, or at a salon - all in one place.
          </div>

          <ul className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 list-none mb-0 p-0">
            {bulletItems.map((item, i) => (
              <li key={i} className={`flex items-start ${i < bulletItems.length - 1 ? "pb-4" : ""}`}>
                <img
                  className="responsive-image mr-2 mt-0.5 shrink-0"
                  src={`${IMG_BASE}/v7/images/home/tick-circle.svg`}
                  alt="List"
                  width={20}
                  height={20}
                />
                <div>{item}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
