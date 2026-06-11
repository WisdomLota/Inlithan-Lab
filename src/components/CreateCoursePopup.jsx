import { useState } from 'react'

import panelIcon from '../assets/courses.png'

function CreateCoursePopup({ onClose, onCreate }) {
  const [email, setEmail] = useState('')

  return (
    <div className='popup-overlay' onClick={onClose}>
      <div className='create-course-popup' onClick={(e) => e.stopPropagation()}>
        <div className='create-course-popup-header'>
          <span>Course Creation</span>
          <button className='new-student-popup-close' onClick={onClose}>✕</button>
        </div>

        <p className='create-course-popup-text'>
          In order for you to create a course we need either the email from the
          school you are affiliated with or the professional email you would like
          to use
        </p>

        <input
          type='email'
          className='create-course-input'
          placeholder='Work Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className='btn-join create-course-submit' onClick={() => onCreate(email)}>
          <img src={panelIcon} alt="" className='btn-inline-icon' />
          Create Course
        </button>
      </div>
    </div>
  )
}

export default CreateCoursePopup
