const PLANS = [
  {
    key: 'paygo',
    label: 'Pay As You Go',
    badge: null,
    features: [
      'Auto-scheduled',
      'Pay per visit',
      'No commitment',
      'Adjust anytime',
    ],
    cta: 'Book Now',
    href: '/guest/booking/start',
    highlight: false,
  },
  {
    key: 'prepaid',
    label: 'Prepaid Plan',
    badge: 'Best Value',
    features: [
      'Auto-scheduled',
      'Price locked',
      'Pay upfront & save',
      'Unused visits refundable',
    ],
    cta: 'Subscribe & Save',
    href: '/recurring-booking',
    highlight: true,
  },
]

export function StayFreshSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="w-full max-w-330 mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center">

          {/* Left — text + plan cards */}
          <div className="flex-1 w-full">
            <div className="w-16 h-1 bg-[#FF314A] rounded mb-4" />
            <p className="text-[#FF314A] font-semibold text-sm mb-1 uppercase tracking-wide">Recurring Grooming</p>
            <h2 className="text-[#2E2E2E] font-bold text-2xl lg:text-4xl leading-tight mb-1">
              Save up-to 30%
            </h2>
            <h3 className="text-[#2E2E2E] font-bold text-xl lg:text-2xl leading-tight mb-3">
              Stay Fresh, Always
            </h3>
            <p className="text-[#4A5565] text-base mb-8">
              Stay fresh without thinking about it. Same grooming experience, just choose how you want to pay.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {PLANS.map((plan) => (
                <div
                  key={plan.key}
                  className={[
                    'flex-1 rounded-2xl border p-6 flex flex-col gap-4',
                    plan.highlight
                      ? 'border-[#FF314A] bg-[#FFF0F2]'
                      : 'border-gray-200 bg-white',
                  ].join(' ')}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#2E2E2E] text-base">{plan.label}</span>
                    {plan.badge && (
                      <span className="bg-[#FF314A] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <ul className="flex flex-col gap-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#4A5565]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                          <circle cx="7" cy="7" r="7" fill={plan.highlight ? '#FF314A' : '#22c55e'} />
                          <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.href}
                    className={[
                      'mt-auto block text-center font-semibold px-4 py-2.5 rounded-lg text-sm no-underline transition-colors',
                      plan.highlight
                        ? 'bg-[#FF314A] text-white hover:bg-[#e0304e]'
                        : 'bg-[#2E2E2E] text-white hover:bg-black',
                    ].join(' ')}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dog image */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden bg-gray-100 w-full max-w-sm h-80 lg:h-105">
              <img
                src="/v7/images/home/dog-subscription.jpg"
                alt="Happy groomed dog"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
