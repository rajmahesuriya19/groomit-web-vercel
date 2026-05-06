import { useState } from "react"

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-[#e4e4e8] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex-shrink-0">
            <img
              alt="Groomit Marketplace"
              width={140}
              height={36}
              className="h-9 w-auto"
              src={`${BLOB}/groomit-logo-0yZZzb5BpA84L8HmNNEcsU5sf0qahz.svg`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="/pet-grooming-prices" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors">{"Service & Pricing"}</a>
            <a href="/recurring-booking" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors">Recurring Booking</a>
            <a href="/location" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors">Locations</a>
            <a href="https://blog.groomit.me/" target="_blank" rel="noreferrer" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors">Blog</a>
            <a href="/dog-groomer-jobs" className="text-[#FF385C] hover:text-[#E62E4F] text-sm font-medium transition-colors">Apply as Groomer</a>
            <a href="/salon-groom" className="text-[#FF385C] hover:text-[#E62E4F] text-sm font-medium transition-colors">Apply as Salon</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Star rating */}
            <div className="hidden sm:flex items-center gap-1 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 fill-[#ff7631] text-[#ff7631]" aria-hidden="true">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              <span className="font-medium text-[#2a2a2a]">4.9</span>
              <span className="text-[#7c868a]">(42.8K)</span>
            </div>

            {/* Book Now */}
            <a href="/guest/booking/start" className="inline-flex items-center justify-center bg-[#2a2a2a] hover:bg-[#515151] text-white text-sm px-4 py-2 rounded-full font-medium transition-all no-underline">
              Book Now
            </a>

            {/* Profile & Bell icons */}
            <div className="hidden sm:flex items-center gap-2">
              <a href="/user/log-in" className="p-2 rounded-full border border-[#e4e4e8] hover:bg-[#f2f2f2] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c868a]" aria-hidden="true">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </a>
              <button className="p-2 rounded-full border border-[#e4e4e8] hover:bg-[#f2f2f2] transition-colors bg-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c868a]" aria-hidden="true">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                </svg>
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
              <a href="/pet-grooming-prices" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2">{"Service & Pricing"}</a>
              <a href="/recurring-booking" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2">Recurring Booking</a>
              <a href="/location" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2">Locations</a>
              <a href="https://blog.groomit.me/" target="_blank" rel="noreferrer" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2">Blog</a>
              <a href="/dog-groomer-jobs" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2">Join Groomit</a>
              <a href="/user/log-in" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2">Log In</a>
              <a href="/guest/signup/start" className="text-[#4a5565] hover:text-[#2a2a2a] text-sm font-medium transition-colors no-underline py-2">Sign Up</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
