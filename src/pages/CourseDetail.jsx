import { useParams, Link, useNavigate } from 'react-router-dom'
import { useCourses } from '../context/useCourses'
import { useActivities } from '../context/useActivities'
import { useAuth } from '../context/useAuth'
import './CourseDetail.css'

function CourseDetail() {
  const { courseId } = useParams()
  const { courses } = useCourses()
  const { activities } = useActivities()
  const { user } = useAuth()
  const navigate = useNavigate()
  const isTeacher = user.role === 'teacher'

  const course = courses.find(c => c.id === parseInt(courseId))

  if (!course) return <div style={{ color: '#fff', padding: 24 }}>Course not found</div>

  const courseActivities = activities.filter(a => a.courseId === course.id)

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

      <div className="cd-section-header">
        <h2 className="cd-section-title">Course Activities</h2>
        <span className="see-more">See More ›</span>
      </div>
      <div className="activity-cards">
        {courseActivities.map(activity => (
          <div
            key={activity.id}
            className="activity-card"
            onClick={isTeacher ? () => navigate(`/courses/${courseId}/activity/${activity.id}`) : undefined}
          >
            <div className="activity-type">{activity.type}</div>
            <div className="activity-course-name">{activity.title}</div>
            <div className="activity-meta">All {activity.total} &nbsp;&nbsp; {activity.questions} questions</div>
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
            <div key={week.id} className="week-item">
              <div
                className={`week-header${isCurrent ? ' current' : isPast ? ' past' : ''}`}
                onClick={() => navigate(`/courses/${courseId}/week/${week.id}`)}
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
                        onClick={() => navigate(`/courses/${courseId}/week/${week.id}`)}
                      >
                        View
                      </button>
                      <button className="week-action-btn">Edit</button>
                    </div>
                  ) : (
                    <button
                      className="resume-btn"
                      onClick={() => navigate(`/courses/${courseId}/week/${week.id}`)}
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
