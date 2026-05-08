import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/navigation"

const IMG_BASE = "https://raj.dev.groomit.me"

const reviews = [
  { name: "Vera G", city: "Bronx", state: "NY", petName: "Maki", comment: "Danny was very kind pleasant and professional! He did a phenomenal job washing my cats Maki and Aslan!", serviceType: "Mobile Grooming" },
  { name: "Vera G", city: "Bronx", state: "NY", petName: "Maki", comment: "Danny was very kind pleasant and professional! He did a phenomenal job washing my cats Maki and Aslan!", serviceType: "Mobile Grooming" },
  { name: "Vera G", city: "Bronx", state: "NY", petName: "Maki", comment: "Danny was very kind pleasant and professional! He did a phenomenal job washing my cats Maki and Aslan!", serviceType: "Mobile Grooming" },
  { name: "Sarah M", city: "Manhattan", state: "NY", petName: "Bella", comment: "Absolutely wonderful service! My dog looks amazing and was so calm throughout the grooming session.", serviceType: "In-Home Grooming" },
  { name: "John D", city: "Brooklyn", state: "NY", petName: "Max", comment: "Best grooming service we've ever used. The mobile van is so convenient and our pup loves it!", serviceType: "Mobile Grooming" },
]

export default function ReviewsSection() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeTab, setActiveTab] = useState<"reviews" | "ratings">("reviews")

  return (
    <section className="bg-[#F7F8FA] py-10 md:py-14">
      <div className="container mx-auto px-4">
        <h2 className="font-semibold text-2xl md:text-[32px] text-[#1A1A1A] text-left md:text-center mb-0">
          {"America's Most Reviewed "}
          <span className="md:inline block">Pet Grooming Service</span>
        </h2>
        <p className="text-[#4A5565] text-base text-left md:text-center mt-2">
          Real reviews from verified pet parents
        </p>

        {/* Reviews / Ratings tabs */}
        <div className="flex justify-start md:justify-center mt-5">
          <div className="flex bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-1">
            {["reviews", "ratings"].map((tab) => (
              <button
                key={tab}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all capitalize ${
                  activeTab === tab 
                    ? "bg-white shadow-sm text-[#1A1A1A]" 
                    : "text-[#4A5565] hover:text-[#1A1A1A]"
                }`}
                onClick={() => setActiveTab(tab as "reviews" | "ratings")}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Rating badge - scrollable on mobile */}
        <div className="flex justify-start md:justify-center mt-5 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="bg-white border border-[#E5E7EB] p-4 md:p-5 flex items-center gap-4 md:gap-6 rounded-2xl shrink-0">
            <div className="flex items-center gap-3">
              <div className="text-4xl md:text-5xl font-semibold text-[#1A1A1A]">4.8</div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`${IMG_BASE}/v7/images/home/star-orange.svg`} alt="Star" width={18} height={18} className="md:w-6 md:h-6" />
                  ))}
                  <img src={`${IMG_BASE}/v7/images/home/half-star.svg`} alt="Half Star" width={18} height={18} className="md:w-6 md:h-6" />
                </div>
                <div className="text-[#4A5565] text-xs md:text-sm mt-1">Excellent</div>
              </div>
            </div>
            <div className="w-px h-10 bg-[#E5E7EB]" />
            <div>
              <div className="font-semibold text-lg md:text-xl text-[#1A1A1A]">45K+</div>
              <div className="text-[#4A5565] text-xs md:text-sm mt-0.5">Reviews</div>
            </div>
            <div className="w-px h-10 bg-[#E5E7EB]" />
            <div>
              <div className="font-semibold text-lg md:text-xl text-[#1A1A1A]">200K+</div>
              <div className="text-[#4A5565] text-xs md:text-sm mt-0.5">Pets groomed</div>
            </div>
          </div>
        </div>

        {/* Reviews swiper with arrows */}
        <div className="relative mt-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center border border-[#E5E7EB] cursor-pointer hover:shadow-lg transition-shadow"
            aria-label="Previous reviews"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center border border-[#E5E7EB] cursor-pointer hover:shadow-lg transition-shadow"
            aria-label="Next reviews"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            spaceBetween={12}
            slidesPerView={1.1}
            breakpoints={{
              480: { slidesPerView: 1.3, spaceBetween: 14 },
              640: { slidesPerView: 2.2, spaceBetween: 16 },
              1024: { slidesPerView: 3.5, spaceBetween: 16 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={true}
            className="review-swiper"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="border border-[#E5E7EB] rounded-2xl p-4 bg-white h-full flex flex-col min-h-[180px]">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-base text-[#1A1A1A]">{review.name}</div>
                    <div className="font-semibold text-sm flex items-center gap-0.5">
                      5
                      {[1, 2, 3, 4, 5].map((i) => (
                        <img key={i} src={`${IMG_BASE}/v7/images/home/star-orange.svg`} alt="Star" width={14} height={14} />
                      ))}
                    </div>
                  </div>

                  <div className="text-[#4A5565] text-sm mt-0.5">
                    {review.city}, {review.state}
                  </div>

                  <div className="text-[#4A5565] text-sm mt-3 flex-1 line-clamp-3">
                    {review.comment.length > 126 ? (
                      <>
                        {review.comment.slice(0, 126)}
                        <a href="/reviews" className="text-[#FF385C] no-underline font-medium"> Read More</a>
                      </>
                    ) : review.comment}
                  </div>

                  <div className="text-[#4A5565] text-sm mt-3 pt-3 border-t border-[#E5E7EB]">
                    {review.serviceType} &bull; {review.petName}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="/reviews"
            className="inline-flex items-center gap-1.5 font-semibold text-[#FF385C] no-underline text-sm"
          >
            Read more reviews
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
