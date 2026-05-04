import { RoutePath } from '@/common/enums/enumConstant'

interface SEOEntry {
  title: string
  description: string
  noIndex: boolean
}

type SEOConfigValue = SEOEntry | ((id?: string, params?: Record<string, string>) => SEOEntry)

export const seoConfig: Record<string, SEOConfigValue> = {
  // ── Static ───────────────────────────────────────────────────────────────
  [RoutePath.HOME]: {
    title: 'Home | Groomit',
    description: 'Book professional pet grooming services easily with Groomit.',
    noIndex: false,
  },
  [RoutePath.DASHBOARD]: {
    title: 'Dashboard | Groomit',
    description: 'Manage your pet bookings and profile.',
    noIndex: true,
  },
  [RoutePath.GROOMERS]: {
    title: 'Find Groomers | Groomit',
    description: 'Discover trusted and professional pet groomers near you.',
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
    title: 'Create Account | Groomit',
    description: 'Join Groomit to book professional pet grooming.',
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
