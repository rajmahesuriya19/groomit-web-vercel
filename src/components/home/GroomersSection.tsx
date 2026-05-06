import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/navigation"

const IMG_BASE = "https://raj.dev.groomit.me"

const groomers = [
  { name: "Sarah M.", rating: 4.8, reviews: 120, type: "Mobile", pet: "Dogs", area: "Brooklyn", experience: "4 yrs experience", nextAvailable: "Next available today", image: `${IMG_BASE}/v7/images/webapp/icons/profile-squre.svg` },
  { name: "Perry J.", rating: 4.9, reviews: 312, type: "In-Home", pet: "Cats", area: "Queens", experience: "Cats & senior pets", nextAvailable: "Tomorrow at 9:00 AM", image: `${IMG_BASE}/v7/images/webapp/icons/profile-squre.svg` },
  { name: "Sarah M.", rating: 4.8, reviews: 120, type: "Mobile", pet: "Dogs", area: "Brooklyn", experience: "4 yrs experience", nextAvailable: "Next available today", image: `${IMG_BASE}/v7/images/webapp/icons/profile-squre.svg` },
  { name: "Perry J.", rating: 4.9, reviews: 312, type: "In-Home", pet: "Cats", area: "Queens", experience: "Cats & senior pets", nextAvailable: "Tomorrow at 9:00 AM", image: `${IMG_BASE}/v7/images/webapp/icons/profile-squre.svg` },
]

export default function GroomersSection() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div className="container mx-auto px-4 pt-60-pb-60">
      <h2 className="ff-inter-semibold fs-32px font-black-2A2A2A text-left md:text-center mb-0">
        Professional Groomers Near You
      </h2>
      <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 text-left md:text-center mb-4 mt-10-px">
        Verified, reviewed, and ready to book
      </div>

      <div className="relative">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center border border-groomit-border cursor-pointer hover:shadow-lg transition-shadow"
          aria-label="Previous groomers"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center border border-groomit-border cursor-pointer hover:shadow-lg transition-shadow"
          aria-label="Next groomers"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => { swiperRef.current = swiper }}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop={true}
          className="groomer-swiper"
        >
          {groomers.map((groomer, idx) => (
            <SwiperSlide key={idx}>
              <div className="border rounded-2xl p-3 bg-white h-full">
                <div className="flex items-center">
                  <img
                    src={groomer.image}
                    alt={groomer.name}
                    width={50}
                    height={50}
                    className="object-cover mr-3 rounded-full"
                  />
                  <div>
                    <div className="ff-inter-semibold fs-20 leading-none">{groomer.name}</div>
                    <div className="ff-inter-regular-400 font-gray-4A5565 fs-16-h4 leading-none flex items-center mt-2">
                      <img src={`${IMG_BASE}/v7/images/home/star-orange.svg`} alt="Star" width={16} height={16} className="mr-2" />
                      <span className="ff-inter-semibold pr-2">{groomer.rating}</span>({groomer.reviews})
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-15-px">
                  <div className="ff-inter-regular-400 find-bg-F1F1F3 font-gray-4A5565 fs-16-h4 leading-none px-3 py-3 rounded-full">
                    {groomer.type}
                  </div>
                  <div className="ff-inter-regular-400 find-bg-F1F1F3 font-gray-4A5565 fs-16-h4 leading-none px-3 py-3 rounded-full">
                    {groomer.pet}
                  </div>
                </div>

                <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 mt-15-px">
                  <img src={`${IMG_BASE}/v7/images/home/location-gray.svg`} alt="location" width={18} height={18} className="inline mr-2" />
                  {groomer.area} &bull; {groomer.experience}
                </div>

                <div className="ff-inter-regular-400 fs-16-h4 font-gray-4A5565 mt-10-px">
                  {groomer.nextAvailable}
                </div>

                <button className="bg-transparent mt-15-px border-0 ff-inter-semibold fs-16-h4 font-red-i cursor-pointer p-0">
                  View Profile
                  <img src={`${IMG_BASE}/v7/images/home/arrow-red.svg`} alt="arrow" width={16} height={16} className="inline ml-1" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
