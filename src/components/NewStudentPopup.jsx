import { useState } from 'react'

const initialRequests = [
  { id: 1, email: '20201818@std.neu.edu.tr', course: 'Economics for engineers' },
  { id: 2, email: '20247224@std.neu.edu.tr', course: 'Mobile programming' },
  { id: 3, email: '20219080@std.neu.edu.tr', course: 'Engineering for engineers' },
  { id: 4, email: '20232301@std.neu.edu.tr', course: 'Mobile programming' },
]

function NewStudentPopup({ onClose }) {
  const [requests, setRequests] = useState(initialRequests)

  const accept = (id) => setRequests(requests.filter((r) => r.id !== id))
  const acceptAll = () => setRequests([])

  return (
    <div className='new-student-popup'>
      <div className='new-student-popup-header'>
        <span>New Student List</span>
        <button className='new-student-popup-close' onClick={onClose}>✕</button>
      </div>

      <div className='new-student-popup-toolbar'>
        <span className='new-student-count'>Students ({requests.length})</span>
        <button className='accept-link' onClick={acceptAll}>Accept All</button>
      </div>

      {requests.length === 0 ? (
        <p className='new-student-empty'>No new student requests.</p>
      ) : (
        requests.map((request) => (
          <div className='new-student-row' key={request.id}>
            <span className='new-student-avatar' />
            <div className='new-student-info'>
              <span className='new-student-email'>{request.email}</span>
              <span className='new-student-course'>{request.course}</span>
            </div>
            <button className='accept-link' onClick={() => accept(request.id)}>Accept</button>
          </div>
        ))
      )}
    </div>
  )
}

export default NewStudentPopup
