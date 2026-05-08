import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const IMG = "https://qa.groomit.me/v7/images"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="flex-shrink-0">
            <img
              alt="Groomit Marketplace"
              width={120}
              height={32}
              className="h-8 md:h-9 w-auto"
              src={`${IMG}/home/groomit-logo.svg`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/pet-grooming-prices" className="text-[#1A1A1A] hover:text-[#FF385C] text-sm font-semibold transition-colors no-underline">{"Services & Pricing"}</Link>
            <Link to="/recurring-booking" className="text-[#4A5565] hover:text-[#1A1A1A] text-sm font-medium transition-colors no-underline">Recurring</Link>
            <Link to="/location" className="text-[#4A5565] hover:text-[#1A1A1A] text-sm font-medium transition-colors no-underline">Locations</Link>
            <a href="https://blog.groomit.me/" target="_blank" rel="noreferrer" className="text-[#4A5565] hover:text-[#1A1A1A] text-sm font-medium transition-colors no-underline">Blog</a>
            <Link to="/dog-groomer-jobs" className="text-[#FF385C] hover:text-[#E62E4F] text-sm font-medium transition-colors no-underline">Apply as Groomer</Link>
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Star rating - hide on very small screens */}
            <div className="hidden sm:flex items-center gap-1 text-sm">
              <img src={`${IMG}/home/star-orange.svg`} alt="Star" className="w-4 h-4" />
              <span className="font-semibold text-[#1A1A1A]">4.8</span>
              <span className="text-[#4A5565]">(45K)</span>
            </div>

            {/* Book Now - hide on mobile since we have bottom bar */}
            <Link to="/guest/booking/start" className="hidden sm:inline-flex items-center justify-center bg-[#1A1A1A] hover:bg-[#333] text-white text-sm px-5 py-2.5 rounded-full font-medium transition-all no-underline">
              Book Now
            </Link>

            {/* Profile & Help icons */}
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/user/log-in" className="p-2 rounded-full border border-[#E5E7EB] hover:bg-[#F7F8FA] transition-colors flex items-center gap-1 no-underline">
                <img src={`${IMG}/icons/profile-circle.svg`} alt="Profile" className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button 
              className="lg:hidden p-2 -mr-2 bg-transparent border-0 cursor-pointer" 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#1A1A1A]" aria-hidden="true">
                {mobileOpen ? (
                  <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>
                ) : (
                  <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - full screen overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-14 bg-white z-40 overflow-y-auto">
          <nav className="flex flex-col p-5">
            <Link to="/pet-grooming-prices" className="text-[#1A1A1A] text-base font-medium no-underline py-3 border-b border-[#E5E7EB]" onClick={() => setMobileOpen(false)}>{"Services & Pricing"}</Link>
            <Link to="/recurring-booking" className="text-[#1A1A1A] text-base font-medium no-underline py-3 border-b border-[#E5E7EB]" onClick={() => setMobileOpen(false)}>Recurring</Link>
            <Link to="/location" className="text-[#1A1A1A] text-base font-medium no-underline py-3 border-b border-[#E5E7EB]" onClick={() => setMobileOpen(false)}>Locations</Link>
            <a href="https://blog.groomit.me/" target="_blank" rel="noreferrer" className="text-[#1A1A1A] text-base font-medium no-underline py-3 border-b border-[#E5E7EB]">Blog</a>
            
            <div className="mt-4 pt-2">
              <p className="text-xs text-[#9CA3AF] uppercase tracking-wide mb-2">For Professionals</p>
              <Link to="/dog-groomer-jobs" className="text-[#FF385C] text-base font-medium no-underline py-3 border-b border-[#E5E7EB] block" onClick={() => setMobileOpen(false)}>Apply as Groomer</Link>
              <Link to="/salon-groom" className="text-[#FF385C] text-base font-medium no-underline py-3 border-b border-[#E5E7EB] block" onClick={() => setMobileOpen(false)}>Apply as Salon</Link>
            </div>
            
            <div className="mt-4 pt-2">
              <p className="text-xs text-[#9CA3AF] uppercase tracking-wide mb-2">Account</p>
              <Link to="/user/log-in" className="text-[#1A1A1A] text-base font-medium no-underline py-3 border-b border-[#E5E7EB] block" onClick={() => setMobileOpen(false)}>Log In</Link>
              <Link to="/guest/signup/start" className="text-[#1A1A1A] text-base font-medium no-underline py-3 block" onClick={() => setMobileOpen(false)}>Sign Up</Link>
            </div>

            {/* Rating display */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm">
              <img src={`${IMG}/home/star-orange.svg`} alt="Star" className="w-5 h-5" />
              <span className="font-semibold text-[#1A1A1A]">4.8</span>
              <span className="text-[#4A5565]">from 45K+ reviews</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
