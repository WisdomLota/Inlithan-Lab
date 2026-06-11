import { useState } from 'react'
import { AuthContext } from './AuthContext'

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: 'akh_user',
    email: 'abeb@std.neu.edu.tr',
    role: 'student' // or 'teacher'
  })

  const setRole = (role) => setUser((prev) => ({ ...prev, role }))

  return (
    <AuthContext.Provider value={{ user, setUser, setRole }}>
      {children}
    </AuthContext.Provider>
  )
}