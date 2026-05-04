// TypeScript 6 erasableSyntaxOnly: use const objects instead of enums
export const RoutePath = {
  // ── Main ──────────────────────────────────────────────────────────────
  HOME:                             '/',
  DASHBOARD:                        '/dashboard',

  // ── Discovery ─────────────────────────────────────────────────────────
  GROOMERS:                         '/groomers',

  // ── Appointments ──────────────────────────────────────────────────────
  APPOINTMENTS:                     '/appointments',
  APPOINTMENT_DETAIL:               '/appointments/:id',
  APPOINTMENTS_TRANSACTION_RECEIPT: '/appointments/:id/receipt',
  APPOINTMENTS_HELP:                '/appointments/:id/help',
  APPOINTMENTS_PETOVERVIEW:         '/appointments/:appointmentId/pet-overview',
  CANCEL_APPOINTMENT:               '/appointments/:id/cancel',
  REBOOK_DETAIL:                    '/appointments/:id/rebook',

  // ── Recurring ─────────────────────────────────────────────────────────
  RECCURING_PLAN_DETAILS:           '/recurring/:id',
  RECURRING_RECEIPT:                '/recurring/:id/receipt',
  FLEXIBLE_MANAGE_DETAILS:          '/flexible/:id',
  FLEXIBLE_MANAGE_FREQUENCY:        '/flexible/:id/frequency',

  // ── Account ───────────────────────────────────────────────────────────
  ACCOUNT:                          '/account',
  CHANGE_PASSWORD:                  '/change-password',
  CARDS:                            '/cards',
  SERVICE_ADDRESSES:                '/service-addresses',
  INBOX:                            '/inbox',

  // ── Pets ──────────────────────────────────────────────────────────────
  PETS:                             '/pets',
  PET_DETAILS:                      '/pets/:id',

  // ── Booking Flow ──────────────────────────────────────────────────────
  BOOK_PETS:                        '/book/pets',
  SLOTS:                            '/book/slots',
  CHECKOUT:                         '/book/checkout',

  // ── Auth ──────────────────────────────────────────────────────────────
  CREATE_ACCOUNT:                   '/create-account',

  // ── Misc ──────────────────────────────────────────────────────────────
  PAGE_404:                         '*',
} as const

export type RoutePathValue = (typeof RoutePath)[keyof typeof RoutePath]
