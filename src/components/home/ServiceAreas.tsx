const serviceAreas = [
  "New York",
  "New Jersey",
  "Connecticut",
  "DC - Maryland - Virginia",
  "Massachusetts",
  "Pennsylvania",
  "Florida",
  "Texas",
  "Colorado",
  "Georgia",
  "Arizona",
  "North Carolina",
  "Illinois",
  "Virginia",
  "California",
  "Utah",
  "Tennessee",
  "Ohio",
]

export default function ServiceAreas() {
  return (
    <div className="container mx-auto px-4 pt-60-pb-60">
      <div className="find-bg-F1F1F3 bg-transparent-mobile p-3 md:p-12 rounded-2xl md:flex items-center">
        <div className="w-full px-0">
          <h3 className="ff-inter-semibold fs-32px mb-0">Service Available Nationwide!</h3>
          <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 pt-3 md:pt-0">
            Groomit brings trusted grooming to pet parents across the United States. Comfort, Flexibility, and value, all in one service.
          </div>
        </div>

        <div className="w-full mt-3 md:mt-0 flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <a
              key={area}
              href="/location"
              className="bg-white border-0 ff-inter-regular-400 font-gray-4A5565 fs-16-h4 leading-none px-4 py-3 rounded-2xl no-underline inline-block hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {area}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
