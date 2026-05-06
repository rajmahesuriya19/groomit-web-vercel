import { useState } from "react"

const IMG = "https://qa.groomit.me/v7/images"

const faqs = [
  {
    q: "How does Groomit pricing work?",
    a: "Groomit's pricing is transparent and convenience-based. The more flexible you are, the more you save \u2014 like booking Eco (2\u20137 days in advance) or setting up recurring appointments. If you need same-day or last-minute service, you'll see the exact cost upfront before booking. No hidden fees, no surprises.",
    defaultOpen: true,
  },
  { q: "How do I know Groomit's groomers are qualified?", a: "All Groomit groomers go through a thorough vetting process including background checks and skill assessments." },
  { q: "What makes Groomit different from other grooming services?", a: "Groomit offers both mobile van and in-home grooming with transparent pricing, verified reviews, and a seamless booking experience." },
  { q: "Can I talk directly to my groomer?", a: "Yes! You can communicate with your groomer through the Groomit app." },
  { q: "How do I become a groomer on Groomit?", a: "Visit our Apply as Groomer page to start the application process." },
  { q: "Why should I trust Groomit for mobile or in-home grooming?", a: "All our groomers are vetted, insured, and reviewed by real customers." },
]

export default function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-start">
          {/* Left image */}
          <div className="hidden md:block flex-shrink-0 w-[280px] lg:w-[320px]">
            <img src={`${IMG}/pet-grooming-prices/faqs-web.png`} alt="FAQs" className="w-full object-contain" />
          </div>
          <div className="md:hidden w-full flex justify-center mb-2">
            <img src={`${IMG}/pet-grooming-prices/faqs-mobile.png`} alt="FAQs" className="w-full max-w-[260px] object-contain" />
          </div>

          {/* FAQ accordion */}
          <div className="flex-1 min-w-0">
            <h2 className="text-[#2a2a2a] text-2xl md:text-[1.85rem] font-semibold mb-6">FAQ</h2>
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#e5e7eb]">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between py-5 bg-transparent border-0 cursor-pointer text-left group"
                >
                  <span className="font-medium text-[#2a2a2a] text-sm md:text-[15px] pr-4 group-hover:text-[#FF385C] transition-colors">{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${openIdx === idx ? "bg-[#2a2a2a] rotate-0" : "bg-[#f5f5f5] border border-[#e5e7eb] hover:border-[#ccc]"}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={openIdx === idx ? "white" : "#6b7280"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      {openIdx === idx ? (
                        <path d="M5 12h14" />
                      ) : (
                        <><path d="M12 5v14" /><path d="M5 12h14" /></>
                      )}
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? "max-h-60 pb-5" : "max-h-0"}`}>
                  {faq.a && (
                    <p className="text-sm text-[#6b7280] leading-relaxed pr-12">{faq.a}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
