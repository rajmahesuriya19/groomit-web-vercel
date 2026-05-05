'use client'

import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { User } from '@/types'

interface AuthContextValue {
  user: User | null
  isAuthenticated: boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  // Replace with real auth (JWT, session cookie, etc.)
  const [user, setUser] = useState<User | null>(null)

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, logout: () => setUser(null) }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
