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
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF7631" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
)

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h2 className="ff-inter-semibold text-[#2a2a2a] text-2xl md:text-[1.75rem] text-center mb-10">What our customers say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((review, idx) => (
          <div key={idx} className="border border-[#e5e7eb] rounded-2xl p-6">
            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} />)}
            </div>

            {/* Review text */}
            <p className="text-sm text-[#4a5565] leading-relaxed mb-4">{review.text}</p>

            {/* Reviewer info */}
            <div className="flex items-center gap-3 border-t border-[#e5e7eb] pt-4">
              <div className="w-10 h-10 rounded-full bg-[#f5f0ec] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <div>
                <p className="text-xs text-[#9ca3af] mb-0.5">{review.parent}</p>
                <p className="text-sm font-semibold text-[#2a2a2a]">
                  {review.name} <span className="text-xs font-normal text-[#9ca3af]">{review.location} | {review.date}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Reviews button */}
      <div className="flex justify-center mt-8">
        <Link to="/reviews" className="groomit__button inline-block no-underline text-white text-center px-8">
          View All Reviews
        </Link>
      </div>
    </section>
  )
}
