import { useState } from 'react'
import { useAuth } from '../context/useAuth'
import './AILabs.css'

const MOCK_SESSIONS = [
  { id: 1, title: 'Programing II', date: '12 April 2025' },
  { id: 2, title: 'Asset Pricing model and structures', date: '12 March 2025' },
  { id: 3, title: 'Operations research', date: '12 September 2025' },
  { id: 4, title: 'Economics for Engineers', date: '12 May 2025' },
]

function AILabs() {
  const { user } = useAuth()
  const [view, setView] = useState('history')
  const [mode, setMode] = useState('buddy')
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  function openChat() {
    setMessages([])
    setView('chat')
  }

  function sendMessage() {
    const text = input.trim()
    if (!text) return
    setMessages(prev => [...prev, { id: Date.now(), role: 'user', text }])
    setInput('')
  }

  if (view === 'history') {
    return (
      <div className="lab-page">
        <div className="lab-history-header">
          <h2 className="lab-history-title">Lab History</h2>
          <button className="btn-new-session" onClick={openChat}>
            + Start New Lab Session
          </button>
        </div>

        <div className="lab-session-list">
          {MOCK_SESSIONS.map(session => (
            <div key={session.id} className="lab-session-item" onClick={openChat}>
              <div className="lab-session-icon" />
              <span className="lab-session-name">{session.title}</span>
              <span className="lab-session-date">{session.date}</span>
              <button className="lab-session-menu" onClick={e => e.stopPropagation()}>···</button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="lab-chat-page">
      <div className="lab-chat-back" onClick={() => setView('history')}>
        ‹ AI Lab
      </div>

      <div className="lab-chat-body">
        {messages.length === 0 ? (
          <div className="lab-chat-welcome">
            <h2 className="lab-welcome-greeting">
              Good Afternoon, {user?.name || 'User'}
            </h2>
            <p className="lab-welcome-sub">
              Need help with <strong>any course?</strong>
            </p>
            <div className="lab-mode-toggle">
              <button
                className={`lab-mode-btn ${mode === 'tutor' ? 'active' : ''}`}
                onClick={() => setMode('tutor')}
              >
                Tutor Mode
              </button>
              <button
                className={`lab-mode-btn ${mode === 'buddy' ? 'active' : ''}`}
                onClick={() => setMode('buddy')}
              >
                Study Buddy Mode
              </button>
            </div>
          </div>
        ) : (
          <div className="lab-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`lab-message lab-message-${msg.role}`}>
                {msg.text}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="lab-chat-input-area">
        <input
          className="lab-chat-input"
          placeholder="Ask whatever you are ready.."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <div className="lab-chat-input-actions">
          <button className="lab-attach-btn">+ Attach</button>
          <button className="lab-send-btn" onClick={sendMessage}>↑</button>
        </div>
      </div>
    </div>
  )
}

export default AILabs
