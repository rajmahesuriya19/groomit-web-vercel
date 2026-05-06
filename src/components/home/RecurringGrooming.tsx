const IMG_BASE = "https://raj.dev.groomit.me"

export default function RecurringGrooming() {
  return (
    <section className="find-bg-F1F1F3 pt-60-px pt-30-mobile pb-5">
      <div className="container mx-auto px-4">
        <div className="flex md:justify-center">
          <div className="ff-inter-semibold fs-16-h4 light-red px-4 py-3 rounded-2xl inline-flex items-center">
            <span className="font-red">Recurring Grooming</span>
            <span className="border-r border-gray-300 mx-3 inline-block h-4"></span>
            <span>Save up-to 30%</span>
          </div>
        </div>
        <h2 className="ff-inter-semibold fs-32px font-black-2A2A2A text-left md:text-center pt-10-px mt-2 md:mt-0 mb-0">
          Stay Fresh, Always
        </h2>
        <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 md:justify-center pb-0 md:pb-4 mt-3 md:mt-0 flex">
          Stay fresh without thinking about it. Same grooming experience, just choose how you want to pay
          <div className="text-right md:hidden pl-3 shrink-0">
            <img className="responsive-image" alt="" src={`${IMG_BASE}/v7/images/home/gray-dog.png`} width={157} height={127} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-12">
          {/* Pay As You Go */}
          <div className="bg-white border w-full rounded-2xl p-20">
            <div className="ff-inter-semibold fs-20">Pay As You Go</div>
            <ul className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 custom-red-bullets mb-0">
              <li className="pb-10-px pt-20-px">Auto-scheduled</li>
              <li className="pb-10-px">Pay per visit</li>
              <li className="pb-10-px">No commitment</li>
              <li>Adjust anytime</li>
            </ul>
          </div>

          {/* Prepaid */}
          <div className="bg-white border border-red w-full rounded-2xl p-20 mt-0 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="ff-inter-semibold fs-20">Prepaid</div>
              <div className="ff-inter-semibold text-sm bg-red text-white px-3 py-1 rounded-lg">Best Value</div>
            </div>
            <div className="flex">
              <ul className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 custom-red-bullets mb-0">
                <li className="pb-10-px pt-20-px">Auto-scheduled</li>
                <li className="pb-10-px">Price locked</li>
                <li className="pb-10-px">Pay upfront &amp; save</li>
                <li>Unused visits refundable</li>
              </ul>
              <div className="hidden md:block ml-auto shrink-0">
                <img className="responsive-image" alt="" src={`${IMG_BASE}/v7/images/home/gray-dog.png`} width={120} height={97} />
              </div>
            </div>
          </div>
        </div>

        <div className="text-right hidden md:hidden">
          <img className="responsive-image" alt="" src={`${IMG_BASE}/v7/images/home/gray-dog.png`} width={157} height={127} />
        </div>
      </div>
    </section>
  )
}
