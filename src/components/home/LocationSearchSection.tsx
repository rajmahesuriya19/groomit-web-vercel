'use client'

import { useState } from 'react'

export function LocationSearchSection() {
  const [zip, setZip] = useState('')

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="w-full max-w-330 mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center">

          {/* Left — text + search */}
          <div className="flex-1 w-full">
            <h2 className="text-[#2E2E2E] font-bold text-2xl lg:text-4xl leading-tight mb-4">
              Mobile Grooming for Dog &amp; Cat in&nbsp;
              <span className="text-[#FF314A]">[City]</span>
            </h2>
            <p className="text-[#4A5565] text-base mb-6">
              Professional, certified groomers come to you. No stress, no cages — just a happy pet.
            </p>

            {/* ZIP search */}
            <div className="flex gap-2 mb-4 max-w-md">
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="Enter your ZIP code"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#FF314A] transition-colors"
              />
              <button
                onClick={() => { window.location.href = `/guest/booking/start?zip=${zip}` }}
                className="bg-[#2E2E2E] text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-black transition-colors whitespace-nowrap"
              >
                Book Now
              </button>
            </div>

            <p className="text-sm text-[#4A5565]">
              Ready to Book By Phone?{' '}
              <a href="tel:+16467185360" className="font-semibold text-[#FF314A] no-underline hover:underline">
                +1(646) 718 5360
              </a>
            </p>
          </div>

          {/* Right — cat image */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <img
              src="/v7/images/home/cat.jpg"
              alt="Cat"
              className="w-full max-w-sm lg:max-w-md rounded-2xl object-cover h-[280px] lg:h-[360px] bg-gray-100"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
