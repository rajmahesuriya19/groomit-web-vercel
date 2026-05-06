import { useState } from "react"
import { Link } from "react-router-dom"

const IMG = "https://qa.groomit.me/v7/images"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-[#e4e4e8] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <img
              alt="Groomit Marketplace"
              width={140}
              height={36}
              className="h-9 w-auto"
              src={`${IMG}/home/groomit-logo.svg`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/pet-grooming-prices" className="text-[#2a2a2a] hover:text-[#2a2a2a] text-sm font-semibold transition-colors no-underline">{"Services & Pricing"}</Link>
            <Link to="/recurring-booking" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline">Recurring</Link>
            <Link to="/location" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline">Locations</Link>
            <a href="https://blog.groomit.me/" target="_blank" rel="noreferrer" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline">Blog</a>
            <Link to="/dog-groomer-jobs" className="text-[#FF385C] hover:text-[#E62E4F] text-sm font-medium transition-colors no-underline">Apply as Groomer</Link>
            <Link to="/salon-groom" className="text-[#FF385C] hover:text-[#E62E4F] text-sm font-medium transition-colors no-underline">Apply as Salon</Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Star rating */}
            <div className="hidden sm:flex items-center gap-1 text-sm">
              <img src={`${IMG}/home/star-orange.svg`} alt="Star" className="w-4 h-4" />
              <span className="font-medium text-[#2a2a2a]">3.8</span>
              <span className="text-[#7c868a] underline">(588)</span>
            </div>

            {/* Book Now */}
            <Link to="/guest/booking/start" className="inline-flex items-center justify-center bg-[#2a2a2a] hover:bg-[#515151] text-white text-sm px-4 py-2 rounded-full font-medium transition-all no-underline">
              Book Now
            </Link>

            {/* Profile & Help icons */}
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/user/log-in" className="p-2 rounded-full border border-[#e4e4e8] hover:bg-[#f2f2f2] transition-colors flex items-center gap-1">
                <img src={`${IMG}/icons/profile-circle.svg`} alt="Profile" className="w-5 h-5" />
                <img src={`${IMG}/icons/polygon.svg`} alt="" className="w-2 h-2" />
              </Link>
              <button className="p-2 rounded-full border border-[#e4e4e8] hover:bg-[#f2f2f2] transition-colors bg-white cursor-pointer">
                <img src={`${IMG}/webapp/icons/support-question.svg`} alt="Help" className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile hamburger */}
            <button className="lg:hidden p-2 bg-transparent border-0 cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#2a2a2a]" aria-hidden="true">
                {mobileOpen ? (
                  <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>
                ) : (
                  <><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#e4e4e8] py-4">
            <nav className="flex flex-col gap-3">
              <Link to="/pet-grooming-prices" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2" onClick={() => setMobileOpen(false)}>{"Services & Pricing"}</Link>
              <Link to="/recurring-booking" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2" onClick={() => setMobileOpen(false)}>Recurring</Link>
              <Link to="/location" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2" onClick={() => setMobileOpen(false)}>Locations</Link>
              <a href="https://blog.groomit.me/" target="_blank" rel="noreferrer" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2">Blog</a>
              <Link to="/dog-groomer-jobs" className="text-[#FF385C] hover:text-[#E62E4F] text-sm font-medium transition-colors no-underline py-2" onClick={() => setMobileOpen(false)}>Apply as Groomer</Link>
              <Link to="/salon-groom" className="text-[#FF385C] hover:text-[#E62E4F] text-sm font-medium transition-colors no-underline py-2" onClick={() => setMobileOpen(false)}>Apply as Salon</Link>
              <Link to="/user/log-in" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2" onClick={() => setMobileOpen(false)}>Log In</Link>
              <Link to="/guest/signup/start" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2" onClick={() => setMobileOpen(false)}>Sign Up</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
