const IMG_BASE = "https://raj.dev.groomit.me"

const features = [
  { icon: `${IMG_BASE}/v7/images/home/in-home.svg`, title: "At your home or curbside", desc: "Choose in-home or mobile grooming" },
  { icon: `${IMG_BASE}/v7/images/home/heart.svg`, title: "Less stress for your pet", desc: "No cages, One on one service" },
  { icon: `${IMG_BASE}/v7/images/home/clock.svg`, title: "Same-day availability", desc: "Find slots that work today" },
  { icon: `${IMG_BASE}/v7/images/home/star-red.svg`, title: "Top-rated groomers", desc: "Verified, reviewed, and trusted" },
]

export default function MobileGrooming() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row items-center gap-3 md:gap-12 justify-between pt-60-pb-60">
        <img
          className="responsive-image"
          src={`${IMG_BASE}/v7/images/home/black-dog.png`}
          alt="Black Dog"
        />
        <div>
          <h2 className="ff-inter-semibold fs-32px font-black-2A2A2A text-center md:text-left mb-0">
            {"Mobile Grooming for "}
            <br className="md:hidden" />
            {"Dogs & Cats"}
          </h2>
          <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 text-center md:text-left mt-3 md:mt-0">
            No travel. No waiting. Just book and relax while your pet gets groomed at home or in a mobile spa.
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-2.5 pt-10-px">
              {features.map((f) => (
                <div key={f.title} className="flex flex-col items-start border p-3 rounded-2xl w-full">
                  <div className="border rounded-full p-3">
                    <img src={f.icon} width={24} height={24} alt={f.title} />
                  </div>
                  <div className="ff-inter-semibold fs-16-h4 font-black-2A2A2A pt-10-px">{f.title}</div>
                  <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 pt-1">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
