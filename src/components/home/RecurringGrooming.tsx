const IMG_BASE = "https://raj.dev.groomit.me"

export default function RecurringGrooming() {
  return (
    <section className="bg-[#F7F8FA] py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="flex justify-start md:justify-center">
          <div className="bg-[#FFF0F2] px-4 py-2.5 rounded-full inline-flex items-center gap-3 text-sm font-medium">
            <span className="text-[#FF385C]">Recurring Grooming</span>
            <span className="w-px h-4 bg-[#E5E7EB]" />
            <span className="text-[#1A1A1A]">Save up to 30%</span>
          </div>
        </div>
        
        <h2 className="font-semibold text-2xl md:text-[32px] text-[#1A1A1A] text-left md:text-center mt-4 mb-0">
          Stay Fresh, Always
        </h2>
        
        <div className="flex items-start gap-4 mt-3">
          <p className="text-[#4A5565] text-base text-left md:text-center flex-1 md:mx-auto md:max-w-xl">
            Stay fresh without thinking about it. Same grooming experience, just choose how you want to pay
          </p>
          <img 
            className="md:hidden shrink-0 -mt-4" 
            alt="" 
            src={`${IMG_BASE}/v7/images/home/gray-dog.png`} 
            width={100} 
            height={81} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Pay As You Go */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5">
            <div className="font-semibold text-lg text-[#1A1A1A]">Pay As You Go</div>
            <ul className="mt-4 space-y-2.5">
              {["Auto-scheduled", "Pay per visit", "No commitment", "Adjust anytime"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[#4A5565] text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF385C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Prepaid */}
          <div className="bg-white border-2 border-[#FF385C] rounded-2xl p-5 relative">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-lg text-[#1A1A1A]">Prepaid</div>
              <div className="bg-[#FF385C] text-white text-xs font-semibold px-3 py-1.5 rounded-lg">Best Value</div>
            </div>
            <div className="flex items-start justify-between">
              <ul className="mt-4 space-y-2.5">
                {["Auto-scheduled", "Price locked", "Pay upfront & save", "Unused visits refundable"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[#4A5565] text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF385C] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <img 
                className="hidden md:block shrink-0 -mb-5" 
                alt="" 
                src={`${IMG_BASE}/v7/images/home/gray-dog.png`} 
                width={100} 
                height={81} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
