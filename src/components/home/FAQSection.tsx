import { useState, useMemo } from "react"

const faqs = [
  {
    q: "What is Groomit?",
    a: "Groomit is America's first on-demand, verified pet-grooming marketplace. We connect pet parents with trusted professionals who deliver salon-quality care right at your doorstep. Book instantly, see transparent pricing by ZIP code, and choose between mobile van, in-home, or salon services.",
  },
  {
    q: "How do I book a groomer?",
    a: "Enter your address, select your pet's details and service type, and you'll see instant pricing and available times. You can either choose your groomer manually or let the Best Match Algorithm confirm the ideal professional automatically.",
  },
  {
    q: "Can I choose my own groomer?",
    a: "Yes! View nearby groomers, check their photos, experience, and verified reviews, and select your favorite. Most clients start with Best Match for speed, then rebook their preferred groomer next time.",
  },
  {
    q: "How does pricing works?",
    a: "Pricing is fully transparent; it is shown before booking based on your pet's breed, size, and location. Groomers set their own rates, and Groomit adds a small service fee for support and protection. No hidden costs.",
  },
  {
    q: "Are Groomit groomers employees?",
    a: "No. Groomit professionals are independent contractors (ICs) who use the Groomit platform to provide their services. This model gives groomers flexibility and control while allowing Groomit to offer more availability, competitive pricing, and nationwide coverage than employee-based companies.",
  },
  {
    q: "Is it safe to book with an independent groomer?",
    a: "Yes — safety is built into Groomit's system. All professionals pass background and identity checks before joining. Every booking is protected by Groomit's platform-level insurance. Our support team monitors performance and service quality continuously. You enjoy the personal attention of an independent groomer with the security of a national brand.",
  },
  {
    q: "How is Groomit different from traditional grooming companies?",
    a: "Traditional mobile or salon chains use fixed routes, limited vans, and employee groomers with little flexibility. Groomit operates as a technology-driven marketplace, giving you: Transparent pricing and real-time availability; Verified reviews from actual customers; The Best Match Algorithm for smarter pairing; Platform-level protection and support; Nationwide coverage with local convenience.",
  },
  {
    q: "Why should I trust Groomit with my pets?",
    a: "Safety is built into Groomit's system. All professionals pass background and identity checks before joining. Every booking is protected by Groomit's platform-level insurance. Our support team monitors performance and service quality continuously. You enjoy the personal attention of an independent groomer with the security of a national brand.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [search, setSearch] = useState("")

  const filteredFaqs = useMemo(() => {
    let result = faqs
    if (search.trim()) {
      const term = search.toLowerCase()
      result = result.filter(
        (f) => f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term)
      )
    }
    if (!showAll && !search.trim()) {
      result = result.slice(0, 5)
    }
    return result
  }, [search, showAll])

  return (
    <section className="bg-[#F7F8FA] py-10 md:py-14" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-left md:text-center mb-6">
          <h2
            id="faq-heading"
            className="font-semibold text-2xl md:text-[32px] text-[#1A1A1A] mb-2"
          >
            Questions, Answered
          </h2>
          <p className="text-[#4A5565] text-base max-w-2xl md:mx-auto">
            Everything you need to know before booking
          </p>
        </header>

        {/* Search FAQs */}
        <div className="max-w-4xl mx-auto mb-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-base bg-white outline-none focus:border-[#FF385C] focus:ring-2 focus:ring-[#FF385C]/10 transition-all pr-12"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path d="m21 21-4.3-4.3" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl md:rounded-3xl max-w-4xl mx-auto p-4 md:p-6">
          <div role="list">
            {filteredFaqs.map((faq, i) => (
              <article
                key={faq.q}
                className={`${i < filteredFaqs.length - 1 ? "border-b border-[#E5E7EB]" : ""} py-4 first:pt-0 last:pb-0`}
                role="listitem"
              >
                <h3 className="m-0">
                  <button
                    className="w-full flex justify-between items-start gap-4 text-left cursor-pointer bg-transparent border-0 p-0 font-semibold text-base md:text-lg text-[#1A1A1A] hover:text-[#FF385C] transition-colors"
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="flex-1">{faq.q}</span>
                    <span className={`w-7 h-7 rounded-full border border-[#E5E7EB] flex items-center justify-center shrink-0 transition-transform ${openIndex === i ? 'bg-[#FF385C] border-[#FF385C]' : ''}`}>
                      {openIndex === i ? (
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" aria-hidden="true">
                          <path d="M1 1h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M6 1v10M1 6h10" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`grid transition-all duration-300 ${
                    openIndex === i ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#4A5565] text-sm md:text-base leading-relaxed m-0 pr-11">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-8 text-[#4A5565] text-base">
                No FAQs match your search.
              </div>
            )}

            {!showAll && !search.trim() && faqs.length > 5 && (
              <div className="flex justify-center mt-4 pt-4 border-t border-[#E5E7EB]">
                <button
                  className="bg-transparent border-0 font-semibold text-[#FF385C] cursor-pointer hover:underline p-0 inline-flex items-center gap-1.5"
                  onClick={() => setShowAll(true)}
                  aria-label="Show all frequently asked questions"
                >
                  See all FAQs
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
