import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

function AuthCallback() {
  const navigate = useNavigate()
  const { setUser } = useAuth()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    if (token) {
      localStorage.setItem('token', token)
      const payload = JSON.parse(atob(token.split('.')[1]))
      setUser(payload)
      // if role was already set on a previous login, skip role picker
      if (payload.role && payload.role !== 'unset') {
        navigate('/dashboard')
      } else {
        navigate('/role')
      }
    } else {
      navigate('/')
    }
  }, [])

  return <div style={{ color: '#fff', padding: 24 }}>Authenticating...</div>
}

export default AuthCallback