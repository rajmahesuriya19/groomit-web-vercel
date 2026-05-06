const IMG = "https://qa.groomit.me/v7/images"

export default function WaysToSave() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        {/* Left content */}
        <div className="flex-1">
          <h2 className="text-[#2a2a2a] text-2xl md:text-[1.85rem] font-semibold mb-8">Ways to Save on Grooming</h2>

          <div className="flex items-start gap-4 mb-7">
            <div className="w-11 h-11 rounded-xl bg-[#F3F4F6] flex items-center justify-center shrink-0">
              <img src={`${IMG}/pet-grooming-prices/calendar.svg`} alt="" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-[#2a2a2a] text-[15px] mb-1.5">Eco Package, Book Ahead</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">Plan 7 days in advance and enjoy discounted rates.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#F0FFF4] flex items-center justify-center shrink-0">
              <img src={`${IMG}/webapp/icons/green-groomit.svg`} alt="" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-[#2a2a2a] text-[15px] mb-1.5">Recurring Booking</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{"Set a regular schedule & save on every appointment."}</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center">
          <img
            src={`${IMG}/pet-grooming-prices/dog-hair.png`}
            alt="Dog being groomed"
            className="w-full max-w-[480px] rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
