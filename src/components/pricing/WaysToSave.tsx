const IMG = "https://qa.groomit.me/v7/images"

export default function WaysToSave() {
  return (
    <section className="bg-[#f5f0ec]/40 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Left content */}
        <div className="flex-1">
          <h2 className="ff-inter-semibold text-[#2a2a2a] text-2xl md:text-[1.75rem] mb-8">Ways to Save on Grooming</h2>

          <div className="flex items-start gap-3 mb-6">
            <img src={`${IMG}/pet-grooming-prices/calendar.svg`} alt="" className="w-10 h-10 shrink-0 mt-0.5" />
            <div>
              <h3 className="ff-inter-semibold text-[#2a2a2a] text-base mb-1">Eco Package, Book Ahead</h3>
              <p className="text-sm text-[#4a5565] leading-relaxed">Plan 7 days in advance and enjoy discounted rates.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <img src={`${IMG}/webapp/icons/green-groomit.svg`} alt="" className="w-10 h-10 shrink-0 mt-0.5" />
            <div>
              <h3 className="ff-inter-semibold text-[#2a2a2a] text-base mb-1">Recurring Booking</h3>
              <p className="text-sm text-[#4a5565] leading-relaxed">{"Set a regular schedule & save on every appointment."}</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center">
          <img
            src={`${IMG}/pet-grooming-prices/dog-hair.png`}
            alt="Dog being groomed"
            className="w-full max-w-[500px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
