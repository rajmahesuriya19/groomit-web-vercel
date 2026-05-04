import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Divider from '@mui/material/Divider'
import useMediaQuery from '@mui/material/useMediaQuery'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { SupportModal } from '@/components/SupportModal'
import { useAuth } from '@/contexts/AuthContext'
import type { ReviewBadge } from '@/types'

// ─── Static data ──────────────────────────────────────────────────────────────

const navLinks = [
  { label: 'Services & Pricing', href: '/pet-grooming-prices', external: false },
  { label: 'Recurring', href: '/recurring-booking', external: false },
  { label: 'Locations', href: '/location', external: false },
  { label: 'Blog', href: 'https://blog.groomit.me/', external: true },
]

const applyLinks = [
  { label: 'Apply as Groomer', href: '/dog-groomer-jobs' },
  { label: 'Apply as Salon', href: '/salon-groom' },
]

// Replace with a real API call (e.g. useSWR('/api/reviews'))
const mockBadge: ReviewBadge = { averageRating: '4.9', totalSurveys: 12500 }

// ─── Sub-components ───────────────────────────────────────────────────────────

function RatingBadge({ badge }: { badge: ReviewBadge }) {
  return (
    <a href="/reviews" className="flex items-center gap-1.5 text-black no-underline">
      <img src="/v7/images/home/star-orange.svg" width={21} height={21} alt="Star" />
      <span className="font-bold text-base">
        {badge.averageRating}{' '}
        <span className="text-gray-600">({badge.totalSurveys.toLocaleString()})</span>
      </span>
    </a>
  )
}

function BookNowBtn({ href = '/guest/booking/start' }: { href?: string }) {
  return (
    <button
      onClick={() => { window.location.href = href }}
      className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800 whitespace-nowrap"
    >
      Book Now
    </button>
  )
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null)
  const [supportOpen, setSupportOpen] = useState(false)

  const isMobile = useMediaQuery('(max-width: 991px)')
  const profileSrc = user?.profilePicture ?? '/v7/images/icons/profile-circle.svg'

  const closeProfileMenu = () => setProfileAnchorEl(null)
  const navigate = (href: string) => { window.location.href = href }

  return (
    <>
      {/* ─── AppBar ─────────────────────────────────────────────────────────── */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ bgcolor: '#ffffff', borderBottom: '1px solid #e5e7eb' }}
      >
        <Toolbar sx={{ minHeight: '64px !important', px: { xs: 2, lg: 3 } }}>
          {isMobile ? (
            /* ── Mobile top bar ── */
            <div className="flex w-full items-center justify-between">
              <a href="/">
                <img
                  src="/v7/images/home/groomit-logo.svg"
                  width={150}
                  height={49}
                  alt="Groomit.me Logo"
                />
              </a>
              <div className="flex items-center gap-3">
                <RatingBadge badge={mockBadge} />
                <IconButton onClick={() => setMobileOpen(true)} edge="end">
                  <MenuIcon />
                </IconButton>
              </div>
            </div>
          ) : (
            /* ── Desktop bar ── */
            <div className="flex w-full items-center justify-between">
              {/* Logo */}
              <a href="/" className="mr-10 shrink-0">
                <img
                  src="/v7/images/home/groomit-logo.svg"
                  width={150}
                  height={49}
                  alt="Groomit.me Logo"
                />
              </a>

              {/* Nav links */}
              <nav className="flex flex-1 items-center gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className="text-sm font-medium text-gray-600 no-underline transition-colors hover:text-black"
                  >
                    {link.label}
                  </a>
                ))}
                {applyLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-[#FF385C] no-underline transition-colors hover:text-[#e0304e]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Right actions */}
              <div className="flex shrink-0 items-center gap-3">
                <RatingBadge badge={mockBadge} />

                <BookNowBtn />

                {/* Profile dropdown toggle */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={(e) => setProfileAnchorEl(e.currentTarget)}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && setProfileAnchorEl(e.currentTarget as HTMLElement)
                  }
                  className="flex cursor-pointer items-center gap-1 rounded-xl border border-gray-300 px-2 py-1 transition-colors hover:bg-gray-50"
                >
                  <img
                    src={profileSrc}
                    width={30}
                    height={30}
                    alt="Profile"
                    className="rounded-full object-cover"
                  />
                  <img src="/v7/images/icons/polygon.svg" width={11} height={7} alt="" />
                </div>

                {/* Support button */}
                <button
                  onClick={() => setSupportOpen(true)}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border border-[#E4E4E8] bg-white transition-colors hover:bg-gray-50"
                >
                  <img
                    src="/v7/images/webapp/icons/support-question.svg"
                    className="h-6 w-6"
                    alt="Support"
                  />
                </button>
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* ─── Profile dropdown menu ───────────────────────────────────────────── */}
      <Menu
        anchorEl={profileAnchorEl}
        open={Boolean(profileAnchorEl)}
        onClose={closeProfileMenu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        slotProps={{ paper: { sx: { mt: 0.5, minWidth: 160, borderRadius: 2 } } }}
      >
        {isAuthenticated
          ? [
            <MenuItem key="account" onClick={() => { navigate('/user/my-account'); closeProfileMenu() }}>
              My Account
            </MenuItem>,
            <Divider key="d1" />,
            <MenuItem key="dashboard" onClick={() => { navigate('/user/dashboard'); closeProfileMenu() }}>
              Dashboard
            </MenuItem>,
            <Divider key="d2" />,
            <MenuItem key="logout" onClick={() => { logout(); closeProfileMenu() }}>
              Log Out
            </MenuItem>,
          ]
          : [
            <MenuItem key="login" onClick={() => { navigate('/user/log-in'); closeProfileMenu() }}>
              Log In
            </MenuItem>,
            <Divider key="d1" />,
            <MenuItem key="signup" onClick={() => { navigate('/user/signup'); closeProfileMenu() }}>
              Sign Up
            </MenuItem>,
          ]}
      </Menu>

      {/* ─── Mobile drawer ───────────────────────────────────────────────────── */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{ paper: { sx: { width: 288 } } }}
      >
        <div className="flex h-full flex-col">
          {/* Drawer header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <a href="/">
              <img
                src="/v7/images/home/groomit-logo.svg"
                width={120}
                height={39}
                alt="Groomit.me"
              />
            </a>
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          {/* Mobile Book Now */}
          <div className="px-4 py-3">
            <button
              onClick={() => { window.location.href = '/guest/download-app' }}
              className="w-full rounded-lg bg-black py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Book Now
            </button>
          </div>

          <Divider />

          {/* Nav links */}
          <List disablePadding>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  onClick={() => {
                    link.external
                      ? window.open(link.href, '_blank', 'noreferrer')
                      : (window.location.href = link.href)
                    setMobileOpen(false)
                  }}
                >
                  {link.label}
                </ListItemButton>
              </ListItem>
            ))}
            {applyLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  onClick={() => {
                    window.open(link.href, '_blank', 'noreferrer')
                    setMobileOpen(false)
                  }}
                  sx={{ color: '#FF385C' }}
                >
                  {link.label}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          {/* Auth links */}
          <List disablePadding>
            {isAuthenticated ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate('/user/my-account')}>
                    My Account
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate('/user/dashboard')}>
                    Dashboard
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => { logout(); setMobileOpen(false) }}>
                    Log Out
                  </ListItemButton>
                </ListItem>
              </>
            ) : (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate('/user/log-in')}>
                    Log In
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate('/guest/signup/start')}>
                    Sign Up
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>

          {/* Support button in drawer */}
          <div className="mt-auto border-t border-gray-100 px-4 py-3">
            <button
              onClick={() => { setSupportOpen(true); setMobileOpen(false) }}
              className="flex w-full items-center gap-3 rounded-xl border border-[#E4E4E8] bg-[#F4F4F6] px-4 py-3 text-sm font-medium text-[#2E2E2E] transition-colors hover:bg-gray-100"
            >
              <img
                src="/v7/images/webapp/icons/support-question.svg"
                className="h-5 w-5"
                alt=""
              />
              Need help?
            </button>
          </div>
        </div>
      </Drawer>

      {/* ─── Support modal ───────────────────────────────────────────────────── */}
      <SupportModal open={supportOpen} onClose={() => setSupportOpen(false)} />
    </>
  )
}
