import { useState } from "react"

const IMG = "https://qa.groomit.me/v7/images"

const faqs = [
  { q: "What is Recurring with Groomit?", a: "Recurring keeps your pet on a consistent grooming cadence. Choose every 4, 6, 8, or 12 weeks and we'll automatically create your next appointment -- so you never forget." },
  { q: "How does billing work on the Flexible plan?", a: "With the Flexible plan, you're charged per appointment only when your grooming session is confirmed. There are no upfront costs or long-term commitments." },
  { q: "How does billing work on the Annual plan?", a: "With the Annual plan, you pay upfront for a full year of grooming at a locked-in rate. Any unused appointments are fully refundable." },
  { q: "Will my price change?", a: "On the Flexible plan, prices may adjust based on demand. On the Annual plan, your rate is locked for the full 12 months -- no seasonal or surge increases." },
  { q: "Do I keep the same groomer?", a: "Yes! Your preferred groomer is automatically assigned to each recurring appointment. If they are unavailable, we'll match you with another top-rated groomer." },
  { q: "Can I reschedule or cancel?", a: "Absolutely. You can skip, reschedule, or cancel individual appointments at any time without penalty." },
  { q: "Can I switch between Flexible and Annual?", a: "Yes. Simply cancel your current Flexible plan and select the Annual option during your next booking to switch." },
]

export default function RecurringFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left: FAQ accordion */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8">FAQ</h2>
            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <div key={faq.q} className={`border-b border-[#E4E4E8] ${i === 0 ? "border-t" : ""}`}>
                  <button
                    className="w-full flex justify-between items-center py-5 text-left bg-transparent border-0 cursor-pointer"
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    aria-expanded={openIndex === i}
                    type="button"
                  >
                    <span className="text-base font-semibold text-[#1A1A1A] pr-4">{faq.q}</span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${openIndex === i ? "bg-[#1A1A1A]" : "bg-[#F7F8FA] border border-[#E4E4E8]"}`}>
                      {openIndex === i ? (
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none"><path d="M1 1h10" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-5" : "max-h-0"}`}>
                    <p className="text-sm text-[#4a5565] leading-relaxed m-0">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 text-sm font-semibold text-[#FF385C] bg-transparent border border-[#FF385C] rounded-xl px-5 py-2.5 cursor-pointer hover:bg-[#FFF0F2] transition-colors">
              Read more FAQs
            </button>
          </div>

          {/* Right: Image */}
          <div className="flex-1 hidden lg:flex items-start justify-end">
            <img
              src={`${IMG}/home/recurring-home-banner.png`}
              alt="Pet grooming"
              className="w-full max-w-[480px] h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
