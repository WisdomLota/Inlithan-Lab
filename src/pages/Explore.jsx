import { useState } from 'react'
import { useCourses } from '../context/useCourses.js'
import './Explore.css'

function Explore() {
  const { exploreCourses } = useCourses()
  const [modalCourse, setModalCourse] = useState(null)
  const [email, setEmail] = useState('')

  function openModal(course) {
    setModalCourse(course)
    setEmail('')
  }

  return (
    <div className="explore-page">
      <div className="explore-cards-grid">
        {exploreCourses.map(course => (
          <div key={course.id} className="explore-card">
            <span className="explore-card-badge">{course.skillLevel}</span>
            <p className="explore-card-title">{course.title}</p>
            <p className="explore-card-university">{course.university}</p>
            <div className="explore-card-actions">
              <button className="btn-request" onClick={() => openModal(course)}>
                Request to Join
              </button>
              <button className="btn-preview">
                Preview Course
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalCourse && (
        <div className="modal-overlay" onClick={() => setModalCourse(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalCourse(null)}>×</button>
            <h3 className="modal-title">Join Course</h3>
            <p className="modal-desc">
              In order for you to join a course we must either the email from the
              school you are affiliated with or the professional email you would
              like to use
            </p>
            <input
              type="email"
              className="modal-email-input"
              placeholder="student Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className="btn-request">
              Request to Join
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Explore
