const AREAS = [
  { label: 'New York',               href: '/location/new-york' },
  { label: 'New Jersey',             href: '/location/new-jersey' },
  { label: 'Colorado',               href: '/location/colorado' },
  { label: 'Texas',                  href: '/location/texas' },
  { label: 'Tennessee',              href: '/location/tennessee' },
  { label: 'Florida',                href: '/location/florida' },
  { label: 'Georgia',                href: '/location/georgia' },
  { label: 'Arizona',                href: '/location/arizona' },
  { label: 'North Carolina',         href: '/location/north-carolina' },
  { label: 'Illinois',               href: '/location/illinois' },
  { label: 'Connecticut',            href: '/location/connecticut' },
  { label: 'Virginia',               href: '/location/virginia' },
  { label: 'DC - Maryland - Virginia', href: '/location/dc-maryland-virginia' },
  { label: 'Massachusetts',          href: '/location/massachusetts' },
  { label: 'Pennsylvania',           href: '/location/pennsylvania' },
  { label: 'California',             href: '/location/california' },
  { label: 'Utah',                   href: '/location/utah' },
]

export function ServiceAreasSection() {
  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="w-full max-w-330 mx-auto px-4 lg:px-6">
        <h2 className="text-[#2E2E2E] font-bold text-2xl lg:text-4xl text-center mb-3">
          Service Available Nationwide!
        </h2>
        <p className="text-[#4A5565] text-center text-base mb-10">
          Groomit brings trusted grooming to pet parents across the United States. Comfort, Flexibility, and value, all in one service.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {AREAS.map((area) => (
            <a
              key={area.label}
              href={area.href}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#2E2E2E] font-medium text-center no-underline hover:border-[#FF314A] hover:text-[#FF314A] transition-colors"
            >
              {area.label}
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/location"
            className="inline-block border border-gray-300 text-[#2E2E2E] font-semibold px-6 py-2.5 rounded-lg text-sm no-underline hover:bg-gray-50 transition-colors"
          >
            View All Locations
          </a>
        </div>
      </div>
    </section>
  )
}
