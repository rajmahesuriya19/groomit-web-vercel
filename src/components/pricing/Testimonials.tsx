import { Link } from "react-router-dom"

const reviews = [
  {
    text: "Kelly is the greatest groomer. She takes so much care in grooming my dog. It makes me feel good knowing she will take good care of her. Thank you Kelly.",
    parent: "Thor's Pet Parent",
    name: "Vera G",
    location: "Bronx, NY",
    date: "15 Sep, 2025",
  },
  {
    text: "Kelly is the greatest groomer. She takes so much care in grooming my dog. It makes me feel good knowing she will take good care of her. Thank you Kelly.",
    parent: "Thor's Pet Parent",
    name: "Vera G",
    location: "Bronx, NY",
    date: "15 Sep, 2025",
  },
]

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF7631" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
)

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-14 md:py-20">
      <h2 className="text-[#2a2a2a] text-2xl md:text-[1.85rem] font-semibold text-center mb-10">What our customers say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((review, idx) => (
          <div key={idx} className="border border-[#e5e7eb] rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} />)}
            </div>

            {/* Review text */}
            <p className="text-sm text-[#4a5565] leading-relaxed mb-5">{review.text}</p>

            {/* Divider */}
            <div className="border-t border-[#e5e7eb] pt-4">
              {/* Reviewer info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f0ec] flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <div>
                  <p className="text-[11px] text-[#9ca3af] mb-0.5">{review.parent}</p>
                  <p className="text-sm text-[#2a2a2a]">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-xs text-[#9ca3af] ml-2">{review.location} | {review.date}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Reviews button */}
      <div className="flex justify-center mt-10">
        <Link to="/reviews" className="groomit__button inline-block no-underline text-white text-center px-10 py-3 text-sm font-semibold">
          View All Reviews
        </Link>
      </div>
    </section>
  )
}
