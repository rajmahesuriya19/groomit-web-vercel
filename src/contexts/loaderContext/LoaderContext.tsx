import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface LoaderContextType {
  loading: boolean
  showLoader: () => void
  hideLoader: () => void
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export function LoaderProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false)

  return (
    <LoaderContext.Provider
      value={{
        loading,
        showLoader: () => setLoading(true),
        hideLoader: () => setLoading(false),
      }}
    >
      {children}
    </LoaderContext.Provider>
  )
}

export function useLoader() {
  const ctx = useContext(LoaderContext)
  if (!ctx) throw new Error('useLoader must be used within LoaderProvider')
  return ctx
}
