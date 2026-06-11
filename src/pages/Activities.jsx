import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCourses } from '../context/useCourses.js'
import { useAuth } from '../context/useAuth'
import emptyIcon from '../assets/emptyIcon.png'
import activityIcon from '../assets/activities.png'
import './Dashboard.css'
import ActivityCard from '../components/ActivityCard'
import CreateActivityPopup from '../components/CreateActivityPopup'
import { useActivities } from '../context/useActivities'



function Activities (){
  const { courses } = useCourses()
  const { activities } = useActivities([])
  const { user } = useAuth()
  const [showCreate, setShowCreate] = useState(false)
  const isTeacher = user.role === 'teacher'
  const navigate = useNavigate()

  return (

    <div className='page-body'>
      {courses.length === 0 ? (
        <div className='empty-state'>
          <img src={emptyIcon} alt="empty" />
          <p>You need to join a course to have any activities</p>
          {isTeacher ? (
            <button className='btn-join' onClick={() => setShowCreate(true)}>
              <img src={activityIcon} alt="" className='btn-inline-icon' />
              Create Activity
            </button>
          ) : (
            <>
              <button className='btn-join'>Join a Course</button>
              <button className='btn-explore'>Explore Courses</button>
            </>
          )}
        </div>
        ) : (
        <>
          {isTeacher && (
            <div className='page-actions'>
              <button className='teacher-panel-btn' onClick={() => setShowCreate(true)}>
                <img src={activityIcon} alt="" className='btn-inline-icon' />
                Create Activity
              </button>
            </div>
          )}
          <div className='cards-row'>
            {activities.map((activity) => (
              <ActivityCard
              key={activity.id}
              type={activity.type}
              title={activity.title}
              total={activity.total}
              questions={activity.questions}
              onClick={isTeacher ? () => navigate(`/courses/${activity.courseId}/activity/${activity.id}`) : undefined}
              />
            ))}
          </div>
        </>
          )}
      {showCreate && (
        <CreateActivityPopup
          onClose={() => setShowCreate(false)}
          onCreate={() => setShowCreate(false)}
        />
      )}
    </div>
  )
}

export default Activities
