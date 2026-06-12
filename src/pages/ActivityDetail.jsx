import { useParams, Link, Navigate } from 'react-router-dom'
import { useCourses } from '../context/useCourses'
import { useActivities } from '../context/useActivities'
import { useAuth } from '../context/useAuth'
import emptyIcon from '../assets/emptyIcon.png'
import './ActivityDetail.css'

function ActivityDetail() {
  const { courseId, activityId } = useParams()
  const { courses } = useCourses()
  const { activities } = useActivities()
  const { user } = useAuth()

  if (user.role !== 'teacher') return <Navigate to="/dashboard" />

  const course = courses.find(c => c.id === courseId)
  const activity = activities.find(a => a.id === activityId)

  if (!course || !activity) {
    return <div style={{ color: '#fff', padding: 24 }}>Activity not found</div>
  }

  return (
    <div className="activity-detail">
      <div className="ad-breadcrumb">
        <Link to="/courses">Courses</Link>
        <span className="ad-sep">›</span>
        <Link to={`/courses/${courseId}`}>{course.title}</Link>
        <span className="ad-sep">›</span>
        <span className="ad-current">{activity.type}</span>
      </div>

      <div className="ad-panel">
        <div className="ad-panel-header">
          <span className="ad-tab">{activity.type}</span>
        </div>
        <div className="ad-panel-body">
          <img src={emptyIcon} alt="" className="ad-logo" />
          <h2 className="ad-title">{activity.type} Preview</h2>
          <p className="ad-meta">
            {activity.questionCount ?? (Array.isArray(activity.questions) ? activity.questions.length : activity.questions)} questions
            {activity.minutes && <><br />{activity.minutes} minutes</>}
          </p>
          <button className="ad-btn-solid">View Submissions</button>
          <button className="ad-btn-outline">Review {activity.type}</button>
        </div>
      </div>
    </div>
  )
}

export default ActivityDetail
