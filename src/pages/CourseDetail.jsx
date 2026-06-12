import { useParams, Link, useNavigate } from 'react-router-dom'
import { useCourses } from '../context/useCourses'
import { useActivities } from '../context/useActivities'
import { useAuth } from '../context/useAuth'
import './CourseDetail.css'
import { useState, useRef } from 'react'
import { uploadCoursePdf } from '../api/courses'

function CourseDetail() {
  const { courseId } = useParams()
  const { courses } = useCourses()
  const { activities } = useActivities()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [uploading, setUploading] = useState(false)
  const [outdatedFlags, setOutdatedFlags] = useState([])
  const fileInputRef = useRef(null)

  const handlePdfUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    try {
      const res = await uploadCoursePdf(course.id, file)
      if (res.success) {
        setOutdatedFlags(res.outdatedFlags || [])
        window.location.reload()
      }
    } catch (err) {
      console.error('Upload failed:', err)
    } finally {
      setUploading(false)
    }
  }

  const isTeacher = user.role === 'teacher'

  const course = courses.find(c => c.id === courseId)

  if (!course) return <div style={{ color: '#fff', padding: 24 }}>Course not found</div>

  const courseActivities = activities.filter(a => 
    (a.courseId?._id || a.courseId) === course.id
  )

  const sortedWeeks = [...course.weeks].sort((a, b) => {
    if (a.number === course.currentWeek) return -1
    if (b.number === course.currentWeek) return 1
    if (a.number > course.currentWeek && b.number > course.currentWeek) return a.number - b.number
    if (a.number > course.currentWeek) return -1
    if (b.number > course.currentWeek) return 1
    return a.number - b.number
  })

  return (
    <div className="course-detail">
      <div className="breadcrumb">
        <Link to="/courses">Courses</Link>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-current">{course.title}</span>
      </div>

      {isTeacher && (
        <div style={{ padding: '0 24px 16px' }}>
          <button
            className="week-action-btn"
            onClick={() => fileInputRef.current.click()}
            disabled={uploading}
          >
            {uploading ? 'Generating week from PDF...' : '+ Upload Course Material (PDF)'}
          </button>
          <input
            type="file"
            accept=".pdf"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handlePdfUpload}
          />
          {outdatedFlags.length > 0 && (
            <div style={{ marginTop: 12, padding: 12, border: '1px dashed #e05555', borderRadius: 6, color: '#e05555', fontSize: 13 }}>
              <strong>AI flagged outdated content:</strong>
              <ul>
                {outdatedFlags.map((flag, i) => <li key={i}>{flag}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="cd-section-header">
        <h2 className="cd-section-title">Course Activities</h2>
        <span className="see-more">See More ›</span>
      </div>
      <div className="activity-cards">
        {courseActivities.map(activity => (
          <div
            key={activity.id}
            className="activity-card"
            onClick={() => navigate(`/courses/${courseId}/activity/${activity.id}`)}
          >
            <div className="activity-type">{activity.type}</div>
            <div className="activity-course-name">{activity.title}</div>
            <div className="activity-meta">All {activity.total} &nbsp;&nbsp; {activity.questionCount ?? (Array.isArray(activity.questions) ? activity.questions.length : activity.questions)} questions</div>
            <div className="activity-grid-icon">⊞</div>
          </div>
        ))}
      </div>

      <div className="curriculum-section">
        <h2 className="cd-section-title" style={{ marginBottom: 14 }}>Curriculum</h2>
        {sortedWeeks.map(week => {
          const isCurrent = week.number === course.currentWeek
          const isPast = week.number < course.currentWeek

          return (
            <div key={week._id} className="week-item">
              <div
                className={`week-header${isCurrent ? ' current' : isPast ? ' past' : ''}`}
                onClick={() => navigate(`/courses/${courseId}/week/${week._id}`)}
              >
                <span className="week-title-text">
                  <span className="week-num">Week {week.number}:</span>
                  {week.title}
                </span>
                <span className="week-chevron">⌄</span>
              </div>
              {isCurrent && (
                <div className="week-content">
                  <p className="week-description">{week.description}</p>
                  {isTeacher ? (
                    <div className="week-actions">
                      <button
                        className="week-action-btn"
                        onClick={() => navigate(`/courses/${courseId}/week/${week._id}`)}
                      >
                        View
                      </button>
                      <button className="week-action-btn">Edit</button>
                    </div>
                  ) : (
                    <button
                      className="resume-btn"
                      onClick={() => navigate(`/courses/${courseId}/week/${week._id}`)}
                    >
                      Resume
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {course.about && (
        <div className="about-section">
          <div className="about-title">About This Course</div>
          <p className="about-text">{course.about}</p>
          {course.aboutPoints.length > 0 && (
            <>
              <p className="about-text">Students will learn how to:</p>
              <ul className="about-list">
                {course.aboutPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </>
          )}
          {course.aboutClosing && <p className="about-text">{course.aboutClosing}</p>}
        </div>
      )}
    </div>
  )
}

export default CourseDetail
