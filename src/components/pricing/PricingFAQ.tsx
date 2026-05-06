import { useState } from "react"

const IMG_BASE = "https://raj.dev.groomit.me"

const faqs = [
  {
    q: "How do I book a grooming appointment?",
    a: "Simply download the Groomit app or use our website, create your pet's profile, choose your service, and book instantly, 24/7 with no calls and back-and-forth.",
    defaultOpen: true,
  },
  { q: "How quickly can I get a groomer?", a: "You can often book a same-day appointment with Gold package, or plan ahead with Eco to save." },
  { q: "Can I choose my own groomer?", a: "Yes! Use our 'Choose Your Groomer' option to browse profiles, ratings, and reviews." },
  { q: "Are your groomers vetted and certified?", a: "All Groomit groomers go through a thorough vetting process including background checks and skill assessments." },
  { q: "How much does grooming cost?", a: "Prices start at $60 for the Silver package. Final pricing depends on breed, size, and service type." },
  { q: "What makes Groomit different from other grooming services?", a: "Groomit offers both mobile van and in-home grooming with transparent pricing, verified reviews, and a seamless booking experience." },
]

export default function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h2 className="ff-inter-semibold text-[#2a2a2a] text-2xl md:text-[1.75rem] text-center mb-10">FAQ</h2>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left image */}
        <div className="hidden md:block flex-shrink-0 w-[200px]">
          <img src={`${IMG_BASE}/v7/images/home/dog-black.png`} alt="Dog" className="w-full rounded-2xl object-cover" />
        </div>

        {/* FAQ accordion */}
        <div className="flex-1">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#e5e7eb]">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full flex items-center justify-between py-4 bg-transparent border-0 cursor-pointer text-left"
              >
                <span className="ff-inter-semibold text-[#2a2a2a] text-sm md:text-base pr-4">{faq.q}</span>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIdx === idx ? "bg-[#2a2a2a]" : "bg-[#FF385C]"}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {openIdx === idx ? (
                      <path d="M5 12h14" />
                    ) : (
                      <><path d="M12 5v14" /><path d="M5 12h14" /></>
                    )}
                  </svg>
                </span>
              </button>
              {openIdx === idx && faq.a && (
                <div className="pb-4 pr-12">
                  <p className="text-sm text-[#4a5565] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
