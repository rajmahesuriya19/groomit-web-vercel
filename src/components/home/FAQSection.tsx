import { useState } from "react"

const IMG_BASE = "https://raj.dev.groomit.me"

const faqs = [
  {
    q: "What is Groomit?",
    a: "Groomit is America's first on-demand, verified pet-grooming marketplace. We connect pet parents with trusted professionals who deliver salon-quality care right at your doorstep. Book instantly, see transparent pricing by ZIP code, and choose between mobile van, in-home, or salon services.",
  },
  {
    q: "How do I book a grooming?",
    a: "Enter your address, select your pet's details and service type, and you'll see instant pricing and available times. You can either choose your groomer manually or let the Best Match Algorithm confirm the ideal professional automatically.",
  },
  {
    q: "Can I choose my own groomer?",
    a: "Yes! View nearby groomers, check their photos, experience, and verified reviews, and select your favorite. Most clients start with Best Match for speed, then rebook their preferred groomer next time.",
  },
  {
    q: "How does pricing work?",
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

  const initialCount = 5
  const filteredFaqs = search
    ? faqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(search.toLowerCase()) ||
          faq.a.toLowerCase().includes(search.toLowerCase())
      )
    : showAll
      ? faqs
      : faqs.slice(0, initialCount)

  return (
    <section className="find-bg-F1F1F3 pt-60-pb-60">
      <div className="container mx-auto px-4">
        <h2 className="ff-inter-semibold fs-32px text-left md:text-center mb-0">Questions, Answered</h2>
        <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 text-left md:text-center mt-3 md:mt-0">
          Everything you need to know before booking
        </div>

        {/* Search */}
        <div className="flex items-center bg-white border border-groomit-border justify-between pr-4 rounded-2xl mt-20-px">
          <div className="relative form-group">
            <input
              type="text"
              className="input-control border-0 bg-transparent ff-inter-regular-400 fs-16"
              id="js-input-faq"
              placeholder=" "
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label htmlFor="js-input-faq" className="ff-inter-regular-400 fs-14-h5 floating-label">Search FAQs</label>
          </div>
          <img src={`${IMG_BASE}/v7/images/home/search.svg`} alt="Search" width={22} height={22} />
        </div>

        {/* FAQ accordion */}
        <div className="faqbox bg-white border rounded-3xl mt-20-px">
          <div className="faqs-card">
            {filteredFaqs.map((faq, i) => (
              <div key={i} className={`accordion-item border-0 ${i < filteredFaqs.length - 1 ? "border-b" : ""} pb-5 ${i > 0 ? "pt-5" : ""}`}>
                <h2>
                  <button
                    className="accordion-button faqs-button bg-white ff-inter-regular-400 fs-20-h3 text-black shadow-none w-full flex justify-between items-center text-left cursor-pointer border-0 p-0"
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    aria-expanded={openIndex === i}
                  >
                    <span className="pr-12">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-125 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}

            {!showAll && !search && faqs.length > initialCount && (
              <div className="flex justify-center mt-15-px">
                <button
                  className="bg-transparent mt-10-px border-0 ff-inter-semibold fs-16-h4 font-red-i cursor-pointer"
                  onClick={() => setShowAll(true)}
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
