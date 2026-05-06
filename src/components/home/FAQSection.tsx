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
    <section
      className="find-bg-F1F1F3 pt-60-pb-60"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-6">
          <h2
            id="faq-heading"
            className="ff-inter-semibold fs-32px font-black-2A2A2A mb-2"
          >
            {"Questions, Answered"}
          </h2>
          <p className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 max-w-2xl mx-auto">
            Everything you need to know before booking
          </p>
        </header>

        {/* Search FAQs */}
        <div className="max-w-4xl mx-auto mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-groomit-border rounded-2xl px-4 py-3 ff-inter-regular-400 fs-16-h4 bg-white outline-none focus:border-[#FF385C] transition-colors pr-10"
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
        <div className="faqbox bg-white border rounded-3xl max-w-4xl mx-auto">
          <div className="faqs-card" role="list">
            {filteredFaqs.map((faq, i) => (
              <article
                key={faq.q}
                className={`${i < filteredFaqs.length - 1 ? "border-b border-groomit-border" : ""} pb-5 ${i > 0 ? "pt-5" : ""}`}
                role="listitem"
              >
                <h3 className="m-0">
                  <button
                    className="w-full flex justify-between items-center text-left cursor-pointer bg-transparent border-0 p-0 ff-inter-semibold fs-20-h3 font-black-2A2A2A hover:text-[#FF385C] transition-colors"
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="pr-12">{faq.q}</span>
                    {/* +/- icon */}
                    <span className="w-6 h-6 rounded-full border border-groomit-border flex items-center justify-center shrink-0">
                      {openIndex === i ? (
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" aria-hidden="true">
                          <path d="M1 1h10" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" />
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
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-125 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 leading-relaxed m-0">
                    {faq.a}
                  </p>
                </div>
              </article>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-8 ff-inter-regular-400 fs-16-h4 font-gray-4A5565">
                No FAQs match your search.
              </div>
            )}

            {!showAll && !search.trim() && faqs.length > 5 && (
              <div className="flex justify-center mt-15-px pt-4">
                <button
                  className="bg-transparent border-0 ff-inter-semibold fs-16 font-red-i cursor-pointer hover:underline p-0"
                  onClick={() => setShowAll(true)}
                  aria-label="Show all frequently asked questions"
                >
                  See all FAQs
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
