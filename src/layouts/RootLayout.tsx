import { Outlet } from 'react-router-dom'
import HeaderInternal from '@/components/HeaderInternal'
import { useAuth } from '@/contexts/AuthContext'

// Mock badge — replace with a real API call (e.g. useSWR('/api/reviews'))
const badge = { averageRating: '4.9', totalSurveys: 12500 }

export function RootLayout() {
  const { user, isAuthenticated } = useAuth()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeaderInternal
        isLoggedIn={isAuthenticated}
        profilePicture={user?.profilePicture}
        badge={badge}
      />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
