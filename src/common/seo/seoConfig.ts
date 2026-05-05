import { RoutePath } from '@/common/enums/enumConstant'

interface SEOEntry {
  title: string
  description: string
  noIndex: boolean
  keywords?: string
}

type SEOConfigValue = SEOEntry | ((id?: string, params?: Record<string, string>) => SEOEntry)

export const seoConfig: Record<string, SEOConfigValue> = {
  // ── Static ───────────────────────────────────────────────────────────────
  [RoutePath.HOME]: {
    title: 'Mobile Pet Grooming Near You | In-Home Dog & Cat Grooming | Groomit',
    description: 'Book same-day mobile pet grooming or in-home dog & cat grooming. 179K+ pets groomed, 4.8-star rating. Real-time availability, no calls needed. Book in minutes.',
    keywords: 'pet grooming near me, mobile pet grooming, dog grooming near me, cat grooming near me, in home pet grooming, mobile dog grooming, same day dog grooming, on demand pet grooming',
    noIndex: false,
  },
  [RoutePath.DASHBOARD]: {
    title: 'Dashboard | Groomit',
    description: 'Manage your pet bookings and profile.',
    noIndex: true,
  },
  [RoutePath.GROOMERS]: {
    title: 'Find Pet Groomers Near You | Verified Mobile Dog & Cat Groomers | Groomit',
    description: 'Discover trusted and professional pet groomers near you. View verified reviews, real-time availability, and book instantly. Background-checked professionals.',
    keywords: 'pet groomers near me, dog groomers near me, cat groomers near me, mobile pet groomers, professional pet groomer',
    noIndex: false,
  },
  [RoutePath.APPOINTMENTS]: {
    title: 'My Appointments | Groomit',
    description: 'View your upcoming and past pet grooming appointments.',
    noIndex: true,
  },
  [RoutePath.INBOX]: {
    title: 'Inbox | Groomit',
    description: 'Chat with your groomer and view messages.',
    noIndex: true,
  },
  [RoutePath.ACCOUNT]: {
    title: 'My Account | Groomit',
    description: 'Manage your personal information and settings.',
    noIndex: true,
  },
  [RoutePath.PETS]: {
    title: 'My Pets | Groomit',
    description: 'View and manage your pet profiles.',
    noIndex: true,
  },
  [RoutePath.SERVICE_ADDRESSES]: {
    title: 'Service Addresses | Groomit',
    description: 'Manage your grooming service locations.',
    noIndex: true,
  },
  [RoutePath.CARDS]: {
    title: 'Payment Methods | Groomit',
    description: 'Manage your saved credit cards securely.',
    noIndex: true,
  },

  // ── Dynamic ──────────────────────────────────────────────────────────────
  [RoutePath.APPOINTMENT_DETAIL]: (id) => ({
    title: `Appointment #${id} | Groomit`,
    description: `Detailed view for grooming appointment ${id}.`,
    noIndex: true,
  }),
  [RoutePath.PET_DETAILS]: () => ({
    title: 'Pet Details | Groomit',
    description: 'Viewing profile information for your pet.',
    noIndex: true,
  }),
  [RoutePath.RECCURING_PLAN_DETAILS]: (id) => ({
    title: `Recurring Plan #${id} | Groomit`,
    description: 'Manage your recurring grooming subscription details.',
    noIndex: true,
  }),
  [RoutePath.FLEXIBLE_MANAGE_DETAILS]: (id) => ({
    title: `Recurring Detail #${id} | Groomit`,
    description: 'Manage your recurring grooming subscription details.',
    noIndex: true,
  }),
  [RoutePath.FLEXIBLE_MANAGE_FREQUENCY]: () => ({
    title: 'Manage Frequency | Groomit',
    description: 'Manage your recurring grooming subscription details.',
    noIndex: true,
  }),
  [RoutePath.APPOINTMENTS_TRANSACTION_RECEIPT]: (id) => ({
    title: `Apt Receipt #${id} | Groomit`,
    description: 'View your appointment transaction receipt.',
    noIndex: true,
  }),
  [RoutePath.RECURRING_RECEIPT]: (id) => ({
    title: `Recurring Apt - Receipt #${id} | Groomit`,
    description: 'View your recurring appointment receipt.',
    noIndex: true,
  }),
  [RoutePath.APPOINTMENTS_HELP]: (id) => ({
    title: `Help - Apt #${id} | Groomit`,
    description: 'Get help with your appointment.',
    noIndex: true,
  }),
  [RoutePath.CANCEL_APPOINTMENT]: (id) => ({
    title: `Cancel Appointment #${id} | Groomit`,
    description: `Cancellation page for appointment ${id}.`,
    noIndex: true,
  }),
  [RoutePath.REBOOK_DETAIL]: (id) => ({
    title: `Rebook Appointment #${id} | Groomit`,
    description: 'Confirm your rebooking session details.',
    noIndex: true,
  }),
  [RoutePath.APPOINTMENTS_PETOVERVIEW]: (appointmentId) => ({
    title: `Pet Overview - Apt #${appointmentId} | Groomit`,
    description: 'Detailed pet health and service overview.',
    noIndex: true,
  }),

  // ── Booking Flow ─────────────────────────────────────────────────────────
  [RoutePath.BOOK_PETS]: {
    title: 'Select Pets | Groomit',
    description: 'Choose which pets you want to groom today.',
    noIndex: true,
  },
  [RoutePath.SLOTS]: {
    title: 'Select Time Slot | Groomit',
    description: 'Choose the best date and time for your appointment.',
    noIndex: true,
  },
  [RoutePath.CHECKOUT]: {
    title: 'Checkout | Groomit',
    description: 'Complete your booking and confirm service details.',
    noIndex: true,
  },

  // ── Auth & Setup ─────────────────────────────────────────────────────────
  [RoutePath.CREATE_ACCOUNT]: {
    title: 'Create Account | Book Pet Grooming Online | Groomit',
    description: 'Join Groomit to book professional pet grooming. Mobile spa, in-home, and salon services available. Same-day appointments.',
    keywords: 'pet grooming account, book pet grooming, groomit signup',
    noIndex: false,
  },
  [RoutePath.CHANGE_PASSWORD]: {
    title: 'Change Password | Groomit',
    description: 'Update your account security credentials.',
    noIndex: true,
  },
  [RoutePath.PAGE_404]: {
    title: 'Page Not Found | Groomit',
    description: 'The page you are looking for does not exist.',
    noIndex: true,
  },
}

// FAQ data for structured data
export const faqData = [
  {
    question: "What is Groomit?",
    answer: "Groomit is America's first on-demand, verified pet-grooming marketplace. We connect pet parents with trusted professionals who deliver salon-quality care right at your doorstep. Book instantly, see transparent pricing by ZIP code, and choose between mobile van, in-home, or salon services.",
  },
  {
    question: "How do I book a grooming?",
    answer: "Enter your address, select your pet's details and service type, and you'll see instant pricing and available times. You can either choose your groomer manually or let the Best Match Algorithm confirm the ideal professional automatically.",
  },
  {
    question: "Can I choose my own groomer?",
    answer: "Yes! View nearby groomers, check their photos, experience, and verified reviews, and select your favorite. Most clients start with Best Match for speed, then rebook their preferred groomer next time.",
  },
  {
    question: "How does pricing work?",
    answer: "Pricing is fully transparent; it is shown before booking based on your pet's breed, size, and location. Groomers set their own rates, and Groomit adds a small service fee for support and protection. No hidden costs.",
  },
  {
    question: "Are Groomit groomers employees?",
    answer: "No. Groomit professionals are independent contractors (ICs) who use the Groomit platform to provide their services. This model gives groomers flexibility and control while allowing Groomit to offer more availability, competitive pricing, and nationwide coverage than employee-based companies.",
  },
  {
    question: "Is it safe to book with an independent groomer?",
    answer: "Yes — safety is built into Groomit's system. All professionals pass background and identity checks before joining. Every booking is protected by Groomit's platform-level insurance. Our support team monitors performance and service quality continuously.",
  },
  {
    question: "How is Groomit different from traditional grooming companies?",
    answer: "Traditional mobile or salon chains use fixed routes, limited vans, and employee groomers with little flexibility. Groomit operates as a technology-driven marketplace, giving you transparent pricing and real-time availability, verified reviews from actual customers, and nationwide coverage with local convenience.",
  },
  {
    question: "Why should I trust Groomit with my pets?",
    answer: "Safety is built into Groomit's system. All professionals pass background and identity checks before joining. Every booking is protected by Groomit's platform-level insurance. Our support team monitors performance and service quality continuously. You enjoy the personal attention of an independent groomer with the security of a national brand.",
  },
]
