'use client'

import { useState } from 'react'

type Tab = 'mobile' | 'home' | 'salon'

const TABS: { key: Tab; label: string }[] = [
  { key: 'mobile', label: 'Mobile Spa' },
  { key: 'home', label: 'In-Home' },
  { key: 'salon', label: 'Salon' },
]

const FEATURES: Record<Tab, { label: string; items: string[] }[]> = {
  mobile: [
    {
      label: 'Mobile Van Setup',
      items: [
        'Fully equipped van at your doorstep',
        'Private, one-on-one experience',
        'Convenient for busy schedules',
        'Book easily through Groomit',
      ],
    },
    {
      label: 'Convenience',
      items: [
        'No drop-off or pick-up needed',
        'Book online in minutes',
        'Real-time updates via app',
        'Same groomer every visit',
      ],
    },
    {
      label: 'Safety',
      items: [
        'Certified & insured groomers',
        'Background-checked professionals',
        'One pet groomed at a time',
        'Cage-free experience',
      ],
    },
  ],
  home: [
    {
      label: 'In-Home Setup',
      items: [
        'For pets who prefer familiar surroundings',
        'Grooming in the comfort of your home',
        'Less travel and minimal disruption',
        'Book easily through Groomit',
      ],
    },
    {
      label: 'Convenience',
      items: [
        'No travel stress for your pet',
        'Book online in minutes',
        'Real-time updates via app',
        'Same groomer every visit',
      ],
    },
    {
      label: 'Safety',
      items: [
        'Certified & insured groomers',
        'Background-checked professionals',
        'Personalized one-on-one attention',
        'Cage-free experience',
      ],
    },
  ],
  salon: [
    {
      label: 'Salon Environment',
      items: [
        'Comfortable salon environment',
        'Easy drop-off and pick-up',
        'Flexible timing for busy days',
        'Fast online booking with Groomit',
      ],
    },
    {
      label: 'Convenience',
      items: [
        'Drop off and go',
        'Book online in minutes',
        'Real-time updates via app',
        'Flexible scheduling options',
      ],
    },
    {
      label: 'Safety',
      items: [
        'Certified & insured groomers',
        'Background-checked professionals',
        'Professional salon equipment',
        'Quality-guaranteed service',
      ],
    },
  ],
}

export function FindBestFitSection() {
  const [activeTab, setActiveTab] = useState<Tab>('mobile')

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="w-full max-w-330 mx-auto px-4 lg:px-6">
        <h2 className="text-[#2E2E2E] font-bold text-2xl lg:text-4xl text-center mb-3">
          Find the Best Fit for Your Pet
        </h2>
        <p className="text-[#4A5565] text-center text-base mb-8">
          Compare grooming options and choose the experience that suits your pet's needs and your schedule.
        </p>

        {/* Tab toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
            {TABS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={[
                  'px-6 py-2.5 rounded-lg text-sm font-semibold transition-all',
                  activeTab === key
                    ? 'bg-white text-[#2E2E2E] shadow-sm'
                    : 'text-[#4A5565] hover:text-[#2E2E2E]',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES[activeTab].map((col) => (
            <div
              key={col.label}
              className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-[#2E2E2E] text-lg">{col.label}</h3>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#4A5565]">
                    <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L2.83 4.83L7 1" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
