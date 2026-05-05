import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-25 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  )
}
