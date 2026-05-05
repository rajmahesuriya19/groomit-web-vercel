'use client'

import { useState, useEffect, useRef } from 'react'
import { useAuth } from '@/contexts/AuthContext'

// ─── Types ────────────────────────────────────────────────────────────────────

interface BadgeData {
  averageRating: string
  totalSurveys: number
}

// ─── Constants ────────────────────────────────────────────────────────────────

// TODO: Replace with useSWR('/api/review-badge') — PHP caches this for 5 hours
const BADGE: BadgeData = { averageRating: '4.8', totalSurveys: 45632 }

const NAV_LINKS = [
  { label: 'Services & Pricing', href: '/pet-grooming-prices', external: false },
  { label: 'Recurring', href: '/recurring-booking', external: false },
  { label: 'Locations', href: '/location', external: false },
  { label: 'Blog', href: 'https://blog.groomit.me/', external: true },
] as const

const APPLY_LINKS = [
  { label: 'Apply as Groomer', href: '/dog-groomer-jobs' },
  { label: 'Apply as Salon', href: '/salon-groom' },
] as const

const SUPPORT_OPTIONS = [
  {
    key: 'existing',
    icon: '/v7/images/webapp/icons/calendar-black.svg',
    title: 'Existing Booking Support',
    description:
      'Call us for rescheduling, updates, groomer questions, or help with your current appointment.',
    tel: 'tel:+18883967170',
    display: '+1(888) 396 7170',
  },
  {
    key: 'new',
    icon: '/v7/images/webapp/icons/call-black.svg',
    title: 'New Booking by Phone',
    description:
      'Prefer to book by phone? Call now for instant booking and fast confirmation.',
    tel: 'tel:+16467185360',
    display: '+1(646) 718 5360',
  },
] as const

// ─── Helpers ──────────────────────────────────────────────────────────────────

function resolveProfileSrc(pic?: string | null): string {
  if (!pic) return '/v7/images/icons/profile-circle.svg'
  if (pic.startsWith('/') || pic.startsWith('http')) return pic
  try {
    if (btoa(atob(pic)) === pic) return `data:image/png;base64,${pic}`
  } catch { /* not base64 */ }
  return '/v7/images/icons/profile-circle.svg'
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function RatingBadge() {
  return (
    <div className="flex items-center gap-2">
      <img src="/v7/images/home/star-orange.svg" width={21} height={21} alt="Star" />
      <a href="/reviews" className="text-black no-underline">
        <div className="font-bold text-base">
          {BADGE.averageRating}
          <span> ({BADGE.totalSurveys.toLocaleString()})</span>
        </div>
      </a>
    </div>
  )
}

function SupportModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-1050 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        className="relative bg-white rounded-2xl shadow-xl w-full max-w-md z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors border-0 bg-transparent cursor-pointer text-gray-500 text-2xl leading-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="p-6">
          <div className="font-semibold text-[#2E2E2E] text-2xl leading-tight mt-2.5 mb-5">
            Need help with your<br />booking?
          </div>

          <div className="flex flex-col gap-2.5">
            {SUPPORT_OPTIONS.map((opt) => (
              <div
                key={opt.key}
                className="bg-white border border-gray-200 p-5 rounded-xl flex justify-between items-end cursor-pointer hover:shadow-sm transition-shadow"
                onClick={() => { window.location.href = opt.tel }}
              >
                <div className="flex items-start">
                  <div className="flex justify-center items-center rounded-full bg-[#F4F4F6] mr-4 w-12 h-12 shrink-0 p-2">
                    <img src={opt.icon} className="w-6 h-6 block" alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-[#2E2E2E] text-base">{opt.title}</span>
                    <p className="font-normal text-sm text-[#4A5565] m-0">{opt.description}</p>
                    <a
                      href={opt.tel}
                      className="font-semibold text-base text-[#FF314A] no-underline mt-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {opt.display}
                    </a>
                  </div>
                </div>
                {/* Arrow only shown on mobile (tap-to-call affordance) */}
                <div className="ml-2 md:hidden shrink-0">
                  <img src="/v7/images/webapp/icons/arrow-right.svg" width={20} height={20} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HeaderInternal() {
  const { user, isAuthenticated, logout } = useAuth()
  const profileSrc = resolveProfileSrc(user?.profilePicture)

  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close mobile menu on scroll (mirrors the PHP JS at the bottom of the template)
  useEffect(() => {
    const onScroll = () => { if (mobileOpen) setMobileOpen(false) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [mobileOpen])

  // Close profile dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return
    const onMouseDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdownOpen(false)
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [dropdownOpen])

  // Lock body scroll while support modal is open
  useEffect(() => {
    document.body.style.overflow = supportOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [supportOpen])

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200" id="navbarGroo">
        <div className="w-full px-4 lg:px-6">
          <div className="w-full max-w-330 mx-auto">

            {/* ── Mobile top bar (hidden on lg+) ──────────────────────────── */}
            <div className="flex flex-row-reverse items-center justify-between w-full lg:hidden py-3">
              <div className="flex items-center gap-4">
                <RatingBadge />
                <button
                  className="flex flex-col justify-center items-center gap-1.25 w-10 h-10 border border-gray-300 rounded-lg bg-transparent cursor-pointer"
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label="Toggle navigation"
                  aria-expanded={mobileOpen}
                  aria-controls="navbarSupportedContent"
                >
                  <span className="block w-5 h-0.5 bg-gray-800" />
                  <span className="block w-5 h-0.5 bg-gray-800" />
                  <span className="block w-5 h-0.5 bg-gray-800" />
                </button>
              </div>
              <a className="m-0" href="/">
                <img
                  src="/v7/images/home/groomit-logo.svg"
                  width={150}
                  height={49}
                  alt="Groomit.me Logo"
                />
              </a>
            </div>

            {/* ── Collapsible content (mobile: toggled, desktop: always visible) */}
            <div
              id="navbarSupportedContent"
              className={[
                'w-full justify-between flex-col lg:flex-row',
                mobileOpen ? 'flex' : 'hidden lg:flex',
              ].join(' ')}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Desktop logo */}
                <a className="hidden lg:flex items-center shrink-0 mr-12.5" href="/">
                  <img
                    loading="lazy"
                    src="/v7/images/home/groomit-logo.svg"
                    width={150}
                    height={49}
                    alt="Groomit.me Logo"
                  />
                </a>

                {/* Nav link list */}
                <ul className="flex flex-col lg:flex-row lg:items-center gap-4 mb-2 lg:mb-0 w-full mr-auto list-none p-0 m-0">

                  {/* Mobile-only: heading + Book Now */}
                  <li className="flex lg:hidden w-full items-center justify-between py-3 border-b border-gray-100">
                    <h2 className="text-xl font-bold leading-tight m-0">
                      In-Home &amp; Mobile<br />Pet Grooming
                    </h2>
                    <button
                      className="bg-black text-white font-semibold px-4 py-2 rounded-lg text-sm ml-2 border-0 cursor-pointer hover:bg-gray-800 transition-colors"
                      onClick={() => { window.location.href = '/guest/download-app' }}
                    >
                      Book Now
                    </button>
                  </li>

                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        className="text-sm font-medium text-gray-700 hover:text-black no-underline transition-colors"
                        href={link.href}
                        aria-current="page"
                        {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}

                  {/* Mobile-only auth links */}
                  {isAuthenticated ? (
                    <>
                      <li className="block md:hidden">
                        <a className="text-sm font-medium text-gray-700 hover:text-black no-underline" href="/user/my-account">My Account</a>
                      </li>
                      <li className="block md:hidden">
                        <a className="text-sm font-medium text-gray-700 hover:text-black no-underline" href="/user/dashboard">Dashboard</a>
                      </li>
                      <li className="block md:hidden">
                        <a className="text-sm font-medium text-gray-700 hover:text-black no-underline" href="/user/logout">Log Out</a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="block md:hidden">
                        <a className="text-sm font-medium text-gray-700 hover:text-black no-underline" href="/user/log-in">Log In</a>
                      </li>
                      <li className="block md:hidden">
                        <a className="text-sm font-medium text-gray-700 hover:text-black no-underline" href="/guest/signup/start">Sign Up</a>
                      </li>
                    </>
                  )}

                  {APPLY_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        className="text-sm font-medium text-[#FF385C] hover:text-[#e0304e] no-underline transition-colors"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-current="page"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Right-side actions ─────────────────────────────────────── */}
              <div className="flex items-center gap-3 pb-3 lg:pb-0 lg:shrink-0">

                {/* Rating badge — desktop only (mobile shows it in the top bar) */}
                <div className="hidden lg:flex">
                  <RatingBadge />
                </div>

                {/* Book Now + profile dropdown — desktop only */}
                <div className="hidden lg:flex items-center gap-3">
                  <button
                    className="bg-black text-white font-semibold px-4 py-2 rounded-lg text-sm border-0 cursor-pointer hover:bg-gray-800 transition-colors whitespace-nowrap"
                    onClick={() => { window.location.href = '/guest/booking/start' }}
                  >
                    Book Now
                  </button>

                  {/* Profile dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      className="flex items-center gap-1 border border-gray-300 rounded-xl px-2 py-1 cursor-pointer bg-white hover:bg-gray-50 transition-colors"
                      onClick={() => setDropdownOpen((v) => !v)}
                      aria-expanded={dropdownOpen}
                    >
                      <img
                        className="w-8 h-8 object-cover rounded-full"
                        src={profileSrc}
                        width={30}
                        height={30}
                        alt="Profile"
                      />
                      <img src="/v7/images/icons/polygon.svg" width={11} height={7} alt="" />
                    </button>

                    {dropdownOpen && (
                      <ul className="absolute right-0 top-[calc(100%+6px)] bg-white border border-gray-200 rounded-xl shadow-lg min-w-45 list-none p-1 m-0 z-50">
                        {isAuthenticated ? (
                          <>
                            <li>
                              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 no-underline" href="/user/my-account">
                                <span>My Account</span>
                                <img src="/v7/images/icons/arrow-r-grey.svg" alt="" />
                              </a>
                            </li>
                            <li className="border-t border-gray-100 my-1" />
                            <li>
                              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 no-underline" href="/user/dashboard">
                                <span>Dashboard</span>
                                <img src="/v7/images/icons/arrow-r-grey.svg" alt="" />
                              </a>
                            </li>
                            <li className="border-t border-gray-100 my-1" />
                            <li>
                              <a
                                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 no-underline"
                                href="/user/logout"
                                onClick={(e) => { e.preventDefault(); logout(); setDropdownOpen(false) }}
                              >
                                <span>Log Out</span>
                                <img src="/v7/images/icons/arrow-r-grey.svg" alt="" />
                              </a>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 no-underline" href="/user/log-in">
                                <span className="flex items-center gap-2">
                                  <img src="/v7/images/icons/user-log-in.svg" alt="Log In" />
                                  Log in
                                </span>
                                <img src="/v7/images/icons/arrow-r-grey.svg" alt="" />
                              </a>
                            </li>
                            <li className="border-t border-gray-100 my-1" />
                            <li>
                              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 no-underline" href="/user/signup">
                                <span className="flex items-center gap-2">
                                  <img src="/v7/images/icons/user-add.svg" alt="Sign Up" />
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
                  className="flex justify-center items-center rounded-xl border border-[#E4E4E8] bg-white w-12 h-12 p-2 cursor-pointer hover:bg-gray-50 transition-colors shrink-0"
                  onClick={() => setSupportOpen(true)}
                  aria-label="Need help?"
                >
                  <img src="/v7/images/webapp/icons/support-question.svg" className="w-6 h-6 block" alt="" />
                </button>

              </div>
            </div>

          </div>
        </div>
      </nav>

      {supportOpen && <SupportModal onClose={() => setSupportOpen(false)} />}
    </>
  )
}
