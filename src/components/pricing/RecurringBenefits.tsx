const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF385C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /></svg>
    ),
    title: "Stay on Schedule, Stress-Free",
    desc: "Regular grooming keeps your pet looking and feeling their best.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF385C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
    title: "Lock In Your Preferred Groomer",
    desc: "Secure your favourite groomer at your best times",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" /></svg>
    ),
    title: "Hassle-Free Auto-Scheduling",
    desc: "No need to rebook every time, we'll handle it for you.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF385C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
    ),
    title: "Flexible & Risk-Free",
    desc: "Modify or cancel anytime without stress.",
  },
]

export default function RecurringBenefits() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h2 className="ff-inter-semibold text-[#2a2a2a] text-2xl md:text-[1.75rem] text-center mb-2">Recurring Grooming for Consistent Care</h2>
      <p className="text-sm text-[#4a5565] text-center max-w-2xl mx-auto mb-10">
        Keep your pet happy, clean, and healthy while saving more with our recurring grooming plans. <a href="/recurring-booking" className="text-[#FF385C] no-underline hover:underline">Why Go Recurring?</a>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="border border-[#e5e7eb] rounded-2xl p-5 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#FFF0F2] flex items-center justify-center mb-4">
              {b.icon}
            </div>
            <h3 className="ff-inter-semibold text-[#2a2a2a] text-sm mb-2">{b.title}</h3>
            <p className="text-xs text-[#4a5565] leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
