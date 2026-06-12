import { useState } from 'react'
import { AuthContext } from './AuthContext'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token')
    if (!token) return null
    try {
      return JSON.parse(atob(token.split('.')[1]))
    } catch {
      return null
    }
  })

  const setRole = (role) => setUser((prev) => ({ ...prev, role }))

  return (
    <AuthContext.Provider value={{ user, setUser, setRole }}>
      {children}
    </AuthContext.Provider>
  )
}