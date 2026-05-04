export interface NavItem {
  label: string
  path: string
}

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export interface User {
  id: string
  name: string
  email: string
  profilePicture?: string
}

export interface ReviewBadge {
  averageRating: string
  totalSurveys: number
}
