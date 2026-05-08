const serviceAreas = [
  "New York",
  "New Jersey",
  "Colorado",
  "Texas",
  "Florida",
  "Georgia",
  "Arizona",
  "North Carolina",
  "Illinois",
  "Connecticut",
  "Virginia",
  "Maryland & DC",
  "Massachusetts",
  "Pennsylvania",
  "California",
]

export default function ServiceAreas() {
  return (
    <section className="container mx-auto px-4 py-10 md:py-14">
      <div className="bg-[#F7F8FA] p-5 md:p-10 rounded-2xl">
        <div className="md:flex md:items-start md:gap-10">
          <div className="md:w-2/5 shrink-0">
            <h3 className="font-semibold text-2xl md:text-[32px] text-[#1A1A1A] mb-0">
              Service Available Nationwide!
            </h3>
            <p className="text-[#4A5565] text-base mt-2 md:mt-3">
              Groomit brings trusted grooming to pet parents across the United States.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:flex-1">
            {serviceAreas.map((area) => (
              <a
                key={area}
                href="/location"
                className="bg-white text-[#4A5565] text-sm px-4 py-2.5 rounded-xl no-underline hover:bg-[#1A1A1A] hover:text-white transition-colors shadow-sm"
              >
                {area}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
