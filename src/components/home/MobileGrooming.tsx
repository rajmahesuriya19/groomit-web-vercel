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
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 justify-between py-10 md:py-14">
        <img
          className="w-full max-w-[320px] md:max-w-none md:w-auto h-auto"
          src={`${IMG_BASE}/v7/images/home/black-dog.png`}
          alt="Black poodle dog"
        />
        <div className="w-full">
          <h2 className="font-semibold text-2xl md:text-[32px] text-[#1A1A1A] text-center md:text-left mb-0">
            Mobile Grooming for Dogs & Cats
          </h2>
          <p className="text-[#4A5565] text-base text-center md:text-left mt-2">
            No travel. No waiting. Just book and relax while your pet gets groomed at home or in a mobile spa.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-5">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-start border border-[#E5E7EB] bg-white p-4 rounded-2xl">
                <div className="border border-[#E5E7EB] rounded-full p-2.5">
                  <img src={f.icon} width={22} height={22} alt={f.title} />
                </div>
                <div className="font-semibold text-sm text-[#1A1A1A] mt-3 capitalize">{f.title}</div>
                <div className="text-[#4A5565] text-sm mt-1">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
