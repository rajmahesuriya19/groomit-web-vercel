import { Link } from "react-router-dom"

const IMG = "https://qa.groomit.me/v7/images"

export default function HeroSection() {
  return (
    <section className="w-full flex items-center justify-center md:justify-around border border-[#E4E4E8] rounded-[20px] pt-4 pb-5 mb-[50px] px-4 md:px-8">
      {/* Left: Title + Rating */}
      <div className="flex flex-col items-center md:items-start md:block">
        <h1 className="font-bold text-[28px] md:text-[36px] leading-tight mb-0 text-center md:text-left">
          {"Best-Priced Mobile &"}
          <br />
          In-Home Pet Grooming
        </h1>
        <div className="flex items-center pt-5 gap-2">
          <img
            src={`${IMG}/home/pet-group.webp`}
            width={78}
            height={27}
            className="h-[27px] w-auto"
            alt="Pet Group"
          />
          <Link
            to="/reviews"
            className="flex items-center gap-1 text-base font-semibold underline text-[#2A2A2A] hover:text-[#FF385C] transition-colors"
          >
            <span>3.8</span>
            <span className="text-[#FFCE00]">&#9733;</span>
            <span className="px-1">|</span>
            <span>588 Reviews</span>
          </Link>
        </div>
      </div>

      {/* Right: Van SVG (desktop only) */}
      <div className="hidden md:block">
        <img
          src={`${IMG}/pet-grooming-prices/pet-grooming-banner.svg`}
          height={257}
          alt="Mobile Van"
          className="h-[257px] w-auto"
        />
      </div>
    </section>
  )
}
