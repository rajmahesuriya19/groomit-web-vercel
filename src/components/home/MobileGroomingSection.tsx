const BENEFITS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#FF314A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 22 9 12 15 12 15 22" stroke="#FF314A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'At your home or curbside',
    desc: 'Choose in-home or mobile grooming',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#FF314A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Less stress for your pet',
    desc: 'No cages, one-on-one service',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#FF314A" strokeWidth="2" />
        <polyline points="12 6 12 12 16 14" stroke="#FF314A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Same-day availability',
    desc: 'Find slots that work today',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#FF314A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Top-rated groomers',
    desc: 'Verified, reviewed, and trusted',
  },
]

export function MobileGroomingSection() {
  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="w-full max-w-330 mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center">

          {/* Left — dog image */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden bg-gray-200 h-75 lg:h-105">
              <img
                src="/v7/images/home/dog-mobile.jpg"
                alt="Mobile grooming for dogs and cats"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — text + benefit cards */}
          <div className="flex-1 w-full">
            <p className="text-[#FF314A] font-semibold text-sm mb-2 uppercase tracking-wide">Our Service</p>
            <h2 className="text-[#2E2E2E] font-bold text-2xl lg:text-4xl leading-tight mb-4">
              Mobile Grooming<br />for Dogs &amp; Cats
            </h2>
            <p className="text-[#4A5565] text-base mb-8">
              No travel. No waiting. Just book and relax while your pet gets groomed at home or in a mobile spa.
            </p>

            {/* Benefit cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {BENEFITS.map((b) => (
                <div key={b.title} className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#FFF0F2] flex items-center justify-center">
                    {b.icon}
                  </div>
                  <div className="font-semibold text-[#2E2E2E] text-sm">{b.title}</div>
                  <div className="text-[#4A5565] text-xs">{b.desc}</div>
                </div>
              ))}
            </div>

            <a
              href="/pet-grooming-prices"
              className="inline-block bg-[#2E2E2E] text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-black transition-colors no-underline"
            >
              See Services &amp; Pricing
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
