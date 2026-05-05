import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/navigation"

const IMG_BASE = "https://raj.dev.groomit.me"

const reviews = [
  { name: "Debra L", city: "Glen Ridge", state: "NJ", date: "27 Mar, 2026", petName: "MAC", comment: "Mac looks so adorable, is fluffy and smells amazing", groomer: "Diego" },
  { name: "Marie R", city: "Fresh Meadows", state: "NY", date: "27 Mar, 2026", petName: "Loki Blu", comment: "Diego was excellent! I know my dog is very anxious and scared of being groomed. Diego did a phenomenal job Grooming my Loki B", groomer: "Diego" },
  { name: "Philip M", city: "East Meadow", state: "NY", date: "27 Mar, 2026", petName: "Charlie", comment: "She was great", groomer: "Lisa" },
  { name: "Mary Z", city: "Castle Rock", state: "CO", date: "27 Mar, 2026", petName: "Sam", comment: "Sherry was amazing with Sam! Sam is very anxious and this was his first time getting groomed in a mobile van. Sherry was very", groomer: "Sherry" },
  { name: "Samantha B", city: "Bronx", state: "NY", date: "27 Mar, 2026", petName: "Ein", comment: "Great communication and service! Ein looks great!", groomer: "Newton" },
  { name: "Tracey C", city: "Jacksonville", state: "FL", date: "27 Mar, 2026", petName: "Fancy", comment: "The best groomer in JAX!", groomer: "Kelly" },
  { name: "Eric S", city: "Jenkintown", state: "PA", date: "26 Mar, 2026", petName: "Coco", comment: "Christian is great and Coco loves him!", groomer: "Christian" },
  { name: "dio Y", city: "Boston", state: "MA", date: "25 Mar, 2026", petName: "Prince", comment: "Experience was nice and he was able to see my dog a lil earlier as well. Dog came looking and smelling amazing", groomer: "Derek" },
  { name: "Tony C", city: "Derwood", state: "MD", date: "24 Mar, 2026", petName: "Oscar", comment: "All of the above", groomer: "Dana" },
]

export default function ReviewsSection() {
  const swiperRef = useRef<SwiperType | null>(null)

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
                <div className="ff-inter-semibold fs-24-h2 leading-none">179K+</div>
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
                    {review.groomer} &bull; {review.petName}
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
