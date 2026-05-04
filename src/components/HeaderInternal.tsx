import { useState, useEffect, useRef } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface BadgeData {
  averageRating?: string
  totalSurveys?: number | string
}

interface HeaderInternalProps {
  isLoggedIn?: boolean
  profilePicture?: string | null
  badge?: BadgeData
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function resolveProfilePicture(pic: string | null | undefined): string {
  if (!pic) return '/v7/images/icons/profile-circle.svg'
  if (pic.startsWith('/') || pic.startsWith('http')) return pic
  try {
    if (btoa(atob(pic)) === pic) return `data:image/png;base64,${pic}`
  } catch {
    // not valid base64
  }
  return '/v7/images/icons/profile-circle.svg'
}

function formatSurveys(val: number | string | undefined): string | null {
  if (!val) return null
  const n = Number(val)
  return isNaN(n) ? String(val) : n.toLocaleString()
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeaderInternal({
  isLoggedIn = false,
  profilePicture = null,
  badge = {},
}: HeaderInternalProps) {
  const photoSrc = resolveProfilePicture(profilePicture)
  const averageRating = badge.averageRating ?? ''
  const totalSurveys = formatSurveys(badge.totalSurveys)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [supportModalOpen, setSupportModalOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => { if (mobileMenuOpen) setMobileMenuOpen(false) }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  // Close profile dropdown on outside click
  useEffect(() => {
    if (!profileDropdownOpen) return
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setProfileDropdownOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [profileDropdownOpen])

  // Lock body scroll when support modal is open
  useEffect(() => {
    document.body.style.overflow = supportModalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [supportModalOpen])

  // ─── Rating badge (shared between mobile and desktop) ──────────────────────
  const RatingBadge = () => (
    <div className="flex items-center gap-2">
      <img src="/v7/images/home/star-orange.svg" width={21} height={21} alt="Star" />
      <a href="/reviews" className="text-black no-underline">
        <div className="font-bold text-base">
          {averageRating}
          {totalSurveys && <span> ({totalSurveys})</span>}
        </div>
      </a>
    </div>
  )

  return (
    <>
      {/* ─── Navbar ──────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200" id="navbarGroo">
        <div className="w-full px-4 lg:px-6">
          <div className="w-full max-w-[1320px] mx-auto">

            {/* ── Mobile top bar (hidden on lg+) ─────────────────────────── */}
            <div className="flex flex-row-reverse items-center justify-between w-full lg:hidden py-3">
              <div className="flex items-center gap-4">
                <RatingBadge />
                <button
                  className="flex flex-col justify-center items-center gap-[5px] w-10 h-10 border border-gray-300 rounded-lg bg-transparent cursor-pointer"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle navigation"
                  aria-expanded={mobileMenuOpen}
                >
                  <span className="block w-5 h-0.5 bg-gray-800" />
                  <span className="block w-5 h-0.5 bg-gray-800" />
                  <span className="block w-5 h-0.5 bg-gray-800" />
                </button>
              </div>
              <a href="/" className="m-0">
                <img
                  src="/v7/images/home/groomit-logo.svg"
                  width={150}
                  height={49}
                  alt="Groomit.me Logo"
                />
              </a>
            </div>

            {/* ── Collapsible content (mobile: toggle, desktop: always visible) */}
            <div
              className={[
                'w-full justify-between flex-col lg:flex-row',
                mobileMenuOpen ? 'flex' : 'hidden lg:flex',
              ].join(' ')}
              id="navbarSupportedContent"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Desktop logo */}
                <a className="hidden lg:flex items-center shrink-0 mr-[50px]" href="/">
                  <img
                    loading="lazy"
                    src="/v7/images/home/groomit-logo.svg"
                    width={150}
                    height={49}
                    alt="Groomit.me Logo"
                  />
                </a>

                {/* Nav links */}
                <ul className="flex flex-col lg:flex-row lg:items-center gap-4 mb-2 lg:mb-0 w-full mr-auto list-none p-0 m-0">
                  {/* Mobile: heading + Book Now */}
                  <li className="flex lg:hidden w-full items-center justify-between py-3 border-b border-gray-100">
                    <h2 className="text-xl font-bold leading-tight m-0">
                      In-Home &amp; Mobile <br />Pet Grooming
                    </h2>
                    <button
                      className="bg-black text-white font-semibold px-4 py-2 rounded-lg text-sm ml-auto cursor-pointer border-0 hover:bg-gray-800 transition-colors"
                      onClick={() => { window.location.href = '/guest/download-app' }}
                    >
                      Book Now
                    </button>
                  </li>

                  <li>
                    <a className="text-sm font-medium text-gray-700 hover:text-black no-underline transition-colors" href="/pet-grooming-prices">
                      Services &amp; Pricing
                    </a>
                  </li>
                  <li>
                    <a className="text-sm font-medium text-gray-700 hover:text-black no-underline transition-colors" href="/recurring-booking">
                      Recurring
                    </a>
                  </li>
                  <li>
                    <a className="text-sm font-medium text-gray-700 hover:text-black no-underline transition-colors" href="/location">
                      Locations
                    </a>
                  </li>
                  <li>
                    <a className="text-sm font-medium text-gray-700 hover:text-black no-underline transition-colors" target="_blank" rel="noreferrer" href="https://blog.groomit.me/">
                      Blog
                    </a>
                  </li>

                  {/* Mobile-only auth links */}
                  {isLoggedIn ? (
                    <>
                      <li className="block md:hidden">
                        <a className="text-sm font-medium text-gray-700 hover:text-black no-underline transition-colors" href="/user/my-account">My Account</a>
                      </li>
                      <li className="block md:hidden">
                        <a className="text-sm font-medium text-gray-700 hover:text-black no-underline transition-colors" href="/user/dashboard">Dashboard</a>
                      </li>
                      <li className="block md:hidden">
                        <a className="text-sm font-medium text-gray-700 hover:text-black no-underline transition-colors" href="/user/logout">Log Out</a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="block md:hidden">
                        <a className="text-sm font-medium text-gray-700 hover:text-black no-underline transition-colors" href="/user/log-in">Log In</a>
                      </li>
                      <li className="block md:hidden">
                        <a className="text-sm font-medium text-gray-700 hover:text-black no-underline transition-colors" href="/guest/signup/start">Sign Up</a>
                      </li>
                    </>
                  )}

                  <li>
                    <a className="text-sm font-medium text-[#FF385C] hover:text-[#e0304e] no-underline transition-colors" target="_blank" rel="noreferrer" href="/dog-groomer-jobs">
                      Apply as Groomer
                    </a>
                  </li>
                  <li>
                    <a className="text-sm font-medium text-[#FF385C] hover:text-[#e0304e] no-underline transition-colors" target="_blank" rel="noreferrer" href="/salon-groom">
                      Apply as Salon
                    </a>
                  </li>
                </ul>
              </div>

              {/* ── Right side ──────────────────────────────────────────────── */}
              <div className="flex items-center gap-3 pb-3 lg:pb-0 lg:shrink-0">
                {/* Desktop rating */}
                <div className="hidden lg:flex">
                  <RatingBadge />
                </div>

                {/* Desktop: Book Now + profile dropdown */}
                <div className="hidden lg:flex items-center gap-3">
                  <button
                    className="bg-black text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors whitespace-nowrap border-0 cursor-pointer"
                    onClick={() => { window.location.href = '/guest/booking/start' }}
                  >
                    Book Now
                  </button>

                  {/* Profile dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      className="flex items-center gap-1 border border-gray-300 rounded-xl px-2 py-1 cursor-pointer hover:bg-gray-50 transition-colors bg-white"
                      onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                      aria-expanded={profileDropdownOpen}
                    >
                      <img
                        className="w-8 h-8 object-cover rounded-full"
                        src={photoSrc}
                        width={30}
                        height={30}
                        alt="Profile"
                      />
                      <img src="/v7/images/icons/polygon.svg" width={11} height={7} alt="" />
                    </button>

                    {profileDropdownOpen && (
                      <ul className="absolute right-0 top-[calc(100%+6px)] bg-white border border-gray-200 rounded-xl shadow-lg min-w-[180px] list-none p-1 m-0 z-50">
                        {isLoggedIn ? (
                          <>
                            <li>
                              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 no-underline transition-colors" href="/user/my-account">
                                <span>My Account</span>
                                <img src="/v7/images/icons/arrow-r-grey.svg" alt="" />
                              </a>
                            </li>
                            <li className="border-t border-gray-100 my-1" />
                            <li>
                              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 no-underline transition-colors" href="/user/dashboard">
                                <span>Dashboard</span>
                                <img src="/v7/images/icons/arrow-r-grey.svg" alt="" />
                              </a>
                            </li>
                            <li className="border-t border-gray-100 my-1" />
                            <li>
                              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 no-underline transition-colors" href="/user/logout">
                                <span>Log Out</span>
                                <img src="/v7/images/icons/arrow-r-grey.svg" alt="" />
                              </a>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 no-underline transition-colors" href="/user/log-in">
                                <span className="flex items-center gap-2">
                                  <img src="/v7/images/icons/user-log-in.svg" alt="" />
                                  Log in
                                </span>
                                <img src="/v7/images/icons/arrow-r-grey.svg" alt="" />
                              </a>
                            </li>
                            <li className="border-t border-gray-100 my-1" />
                            <li>
                              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 no-underline transition-colors" href="/user/signup">
                                <span className="flex items-center gap-2">
                                  <img src="/v7/images/icons/user-add.svg" alt="" />
                                  Sign Up
                                </span>
                                <img src="/v7/images/icons/arrow-r-grey.svg" alt="" />
                              </a>
                            </li>
                          </>
                        )}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Support button */}
                <button
                  className="flex justify-center items-center p-2 rounded-xl border border-[#E4E4E8] bg-white w-12 h-12 cursor-pointer hover:bg-gray-50 transition-colors shrink-0"
                  onClick={() => setSupportModalOpen(true)}
                  aria-label="Support"
                >
                  <img src="/v7/images/webapp/icons/support-question.svg" className="w-6 h-6 block" alt="" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* ─── Support modal ───────────────────────────────────────────────────── */}
      {supportModalOpen && (
        <div
          className="fixed inset-0 z-[1050] flex items-center justify-center p-4"
          onClick={() => setSupportModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Modal panel */}
          <div
            className="relative bg-white rounded-2xl shadow-xl w-full max-w-md z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors border-0 bg-transparent cursor-pointer text-gray-500 text-2xl leading-none"
              onClick={() => setSupportModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>

            <div className="p-6">
              <div className="font-semibold text-[#2E2E2E] text-2xl leading-tight mt-2.5 mb-5">
                Need help with your<br />booking?
              </div>

              <div className="flex flex-col gap-2.5">
                {/* Existing booking support */}
                <div
                  onClick={() => { window.location.href = 'tel:+18883967170' }}
                  className="bg-white border border-gray-200 p-5 rounded-xl flex justify-between items-end cursor-pointer hover:shadow-sm transition-shadow mb-3"
                >
                  <div className="flex items-start">
                    <div className="flex justify-center items-center p-2 rounded-full bg-[#F4F4F6] mr-4 w-12 h-12 shrink-0">
                      <img src="/v7/images/webapp/icons/calendar-black.svg" className="w-6 h-6 block" alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-[#2E2E2E] text-base">Existing Booking Support</span>
                      <p className="font-normal text-sm text-[#4A5565] m-0">
                        Call us for rescheduling, updates, groomer questions, or help with your current appointment.
                      </p>
                      <div className="flex items-center mt-1">
                        <a href="tel:+18883967170" className="bg-red-500 mr-1 rounded-full no-underline p-1 md:hidden">
                          <img src="/v7/images/webapp/icons/call-white.svg" width={14} height={14} alt="Call" />
                        </a>
                        <a href="tel:+18883967170" className="font-semibold text-base text-[#FF314A] no-underline" onClick={(e) => e.stopPropagation()}>
                          +1(888) 396 7170
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 md:hidden shrink-0">
                    <img src="/v7/images/webapp/icons/arrow-right.svg" width={20} height={20} alt="" />
                  </div>
                </div>

                {/* New booking by phone */}
                <div
                  onClick={() => { window.location.href = 'tel:+16467185360' }}
                  className="bg-white border border-gray-200 p-5 rounded-xl flex justify-between items-end cursor-pointer hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="flex justify-center items-center p-2 rounded-full bg-[#F4F4F6] mr-4 w-12 h-12 shrink-0">
                      <img src="/v7/images/webapp/icons/call-black.svg" className="w-6 h-6 block" alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-[#2E2E2E] text-base">New Booking by Phone</span>
                      <p className="font-normal text-sm text-[#4A5565] m-0">
                        Prefer to book by phone? Call now for instant booking and fast confirmation.
                      </p>
                      <div className="flex items-center mt-1">
                        <a href="tel:+16467185360" className="bg-red-500 mr-1 rounded-full no-underline p-1 md:hidden">
                          <img src="/v7/images/webapp/icons/call-white.svg" width={14} height={14} alt="Call" />
                        </a>
                        <a href="tel:+16467185360" className="font-semibold text-base text-[#FF314A] no-underline" onClick={(e) => e.stopPropagation()}>
                          +1(646) 718 5360
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 md:hidden shrink-0">
                    <img src="/v7/images/webapp/icons/arrow-right.svg" width={20} height={20} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
