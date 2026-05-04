import type { Config } from 'tailwindcss'

// ─── Design Tokens ────────────────────────────────────────────────────────────
// Import these in TypeScript files for type-safe color access:
//   import { colors } from '@/../tailwind.config'
export const colors = {
  primary: {
    DEFAULT: '#EA2C43',
    dark:    '#C41E33',
    light:   '#FF6B7A',
    50:      '#FFF0F2',
    100:     '#FFD6DB',
  },
  surface: {
    DEFAULT: '#FFFFFF',
    alt:     '#F7F7F7',
  },
  border: {
    DEFAULT: '#E5E7EB',
  },
  'text-primary':   '#1A1A1A',
  'text-secondary': '#6B7280',
  'text-muted':     '#9CA3AF',
  success: '#22C55E',
  warning: '#F59E0B',
  error:   '#EF4444',
  info:    '#3B82F6',
} as const

export const fontFamily = {
  filson: ['FilsonPro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  inter:  ['Inter',     'ui-sans-serif', 'system-ui', 'sans-serif'],
  sans:   ['FilsonPro', 'Inter',         'ui-sans-serif', 'system-ui', 'sans-serif'],
} as const

// ─── Tailwind Config ──────────────────────────────────────────────────────────
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
} satisfies Config
