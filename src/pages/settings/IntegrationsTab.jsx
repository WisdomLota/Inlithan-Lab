import { useState } from 'react'
import githubLogo from '../../assets/githubLogo.png'
import googleLogo from '../../assets/googleLogo.png'

const INTEGRATIONS = [
  {
    id: 'google',
    name: 'Google',
    desc: 'Sync with Google Calendar and Google Drive',
    icon: <img src={googleLogo} alt="google logo" />,
    connected: true,
  },
  {
    id: 'github',
    name: 'GitHub',
    desc: 'Link your GitHub for coding assignments',
    icon: <img src={githubLogo} alt="goihb logo" />,
    connected: true,
  },
  {
    id: 'notion',
    name: 'Notion',
    desc: 'Export notes and summaries to Notion',
    connected: false,
  },
  {
    id: 'calendar',
    name: 'Calendar',
    desc: 'Add deadlines and classes to your calendar',
    connected: false,
  },
]

export default function IntegrationsTab() {
  const [integrations, setIntegrations] = useState(INTEGRATIONS)

  function toggleConnect(id) {
    setIntegrations(prev =>
      prev.map(item =>
        item.id === id ? { ...item, connected: !item.connected } : item
      )
    )
  }

  return (
    <div className="tab-section">
      <h3 className="tab-heading">Integrations</h3>
      <p className="settings-hint" style={{ marginBottom: '1.5rem' }}>
        Connect external services to enhance your learning experience.
      </p>

      <div className="integrations-list">
        {integrations.map(item => (
          <div key={item.id} className="integration-card">
            <span className="integration-icon">{item.icon}</span>
            <div className="integration-info">
              <p className="integration-name">{item.name}</p>
              <p className="settings-hint">{item.desc}</p>
            </div>
            <button
              className={`btn-connect ${item.connected ? 'connected' : ''}`}
              onClick={() => toggleConnect(item.id)}
            >
              {item.connected ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
