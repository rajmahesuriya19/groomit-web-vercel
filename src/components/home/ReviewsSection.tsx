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
    <section className="find-bg-F1F1F3 pt-60-pb-60">
      <div className="container mx-auto px-4">
        <h2 className="ff-inter-semibold fs-32px font-black-2A2A2A text-left md:text-center px-3 md:px-0 mb-0">
          {"America's Most Reviewed "}
          <br className="md:hidden" />
          Pet Grooming Service
        </h2>
        <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 text-left md:text-center pb-20-px px-3 md:px-0">
          Real reviews from verified pet parents
        </div>

        {/* Reviews / Ratings tabs */}
        <div className="flex justify-start md:justify-center mt-10-px">
          <div className="tab-container ff-inter-regular-400 fs-16-h4 w-200px">
            <button
              className={`${activeTab === "reviews" ? "active" : ""} transition-all duration-200`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
            <button
              className={`${activeTab === "ratings" ? "active" : ""} transition-all duration-200`}
              onClick={() => setActiveTab("ratings")}
            >
              Ratings
            </button>
          </div>
        </div>

        {/* Rating badge */}
        <div className="flex justify-start md:justify-center mt-20-px">
          <div className="bg-white border review-space w-fit flex items-center rounded-2xl">
            <div className="flex items-center">
              <div className="fs-55px ff-inter-semibold leading-none">4.8</div>
              <div className="pl-3">
                <div className="review_star">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`${IMG_BASE}/v7/images/home/star-orange.svg`} alt="Star" width={24} height={24} />
                  ))}
                  <img src={`${IMG_BASE}/v7/images/home/half-star.svg`} alt="Half Star" width={24} height={24} />
                </div>
                <div className="ff-inter-regular-400 font-gray-4A5565 fs-16-h4 pt-2">Excellent</div>
              </div>
            </div>
            <div className="flex items-center border-l pl-3 md:pl-5">
              <div>
                <div className="ff-inter-semibold fs-24-h2 leading-none">45K+</div>
                <div className="ff-inter-regular-400 font-gray-4A5565 fs-16-h4 pt-2">Reviews</div>
              </div>
            </div>
            <div className="flex items-center border-l pl-3 md:pl-5">
              <div>
                <div className="ff-inter-semibold fs-24-h2 leading-none">200K+</div>
                <div className="ff-inter-regular-400 font-gray-4A5565 fs-16-h4 pt-2">Pets groomed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews swiper with arrows */}
        <div className="relative mt-20-px">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center border border-groomit-border cursor-pointer hover:shadow-lg transition-shadow"
            aria-label="Previous reviews"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center border border-groomit-border cursor-pointer hover:shadow-lg transition-shadow"
            aria-label="Next reviews"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            spaceBetween={16}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={true}
            className="review-swiper"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="border rounded-2xl p-3 bg-white h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="ff-inter-semibold fs-20-h3 leading-none">{review.name}</div>
                    <div className="ff-inter-semibold fs-16 flex items-center gap-0.5">
                      5
                      {[1, 2, 3, 4, 5].map((i) => (
                        <img key={i} src={`${IMG_BASE}/v7/images/home/star-orange.svg`} alt="Star" width={16} height={16} />
                      ))}
                    </div>
                  </div>

                  <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565">
                    {review.city}, {review.state}
                  </div>

                  <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 mt-15-px review-content-h flex-1">
                    {review.comment.length > 126 ? (
                      <>
                        {review.comment.slice(0, 126)}
                        <a href="/reviews" className="text-[#FF385C] no-underline"> Read More</a>
                      </>
                    ) : review.comment}
                  </div>

                  <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 mt-15-px">
                    {review.serviceType} &bull; {review.petName}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-20-px">
          <a
            href="/reviews"
            className="bg-transparent border-0 ff-inter-semibold fs-16-h4 font-red-i no-underline cursor-pointer"
          >
            Read more reviews
            <img src={`${IMG_BASE}/v7/images/home/arrow-red.svg`} alt="arrow" width={16} height={16} className="inline ml-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
