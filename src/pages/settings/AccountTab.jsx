import { useState } from 'react'
import { useAuth } from '../../context/useAuth'

export default function AccountTab() {
  const { user } = useAuth()

  const [name, setName]       = useState(user?.name || '')
  const [email, setEmail]     = useState(user?.email || 'user@university.edu')
  const [currentPw, setCurrentPw] = useState('')
  const [newPw, setNewPw]     = useState('')
  const [saved, setSaved]     = useState(false)

  function handleSaveProfile(e) {
    e.preventDefault()
    // здесь будет API запрос
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="tab-section">
      <h3 className="tab-heading">Account</h3>

      {/* Аватар */}
      <div className="avatar-section">
        <div className="avatar-circle">
          {name ? name[0].toUpperCase() : 'U'}
        </div>
        <div>
          <button className="btn-secondary">Upload photo</button>
          <p className="settings-hint">JPG or PNG, max 2MB</p>
        </div>
      </div>

      {/* Профиль */}
      <form onSubmit={handleSaveProfile}>
        <div className="settings-group">
          <label className="settings-label">Full name</label>
          <input
            className="settings-input"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="settings-group">
          <label className="settings-label">Email</label>
          <input
            className="settings-input"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email@university.edu"
          />
        </div>

        <div className="settings-group">
          <label className="settings-label">Role</label>
          <div className="role-badge">
            {user?.role === 'teacher' ? 'Teacher' : 'Student'}
          </div>
          <p className="settings-hint">Role is assigned by the institution</p>
        </div>

        <button type="submit" className="btn-save">
          {saved ? '✓ Saved!' : 'Save Profile'}
        </button>
      </form>

      <div className="settings-divider" />

      {/* Пароль */}
      <h4 className="tab-subheading">Change Password</h4>

      <div className="settings-group">
        <label className="settings-label">Current password</label>
        <input
          className="settings-input"
          type="password"
          value={currentPw}
          onChange={e => setCurrentPw(e.target.value)}
          placeholder="••••••••"
        />
      </div>

      <div className="settings-group">
        <label className="settings-label">New password</label>
        <input
          className="settings-input"
          type="password"
          value={newPw}
          onChange={e => setNewPw(e.target.value)}
          placeholder="••••••••"
        />
      </div>

      <button className="btn-save">Update Password</button>
    </div>
  )
}
