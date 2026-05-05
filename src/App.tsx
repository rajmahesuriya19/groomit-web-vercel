import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { RootLayout } from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import DynamicSEO from '@/common/seo/DynamicSEO'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <DynamicSEO />
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
