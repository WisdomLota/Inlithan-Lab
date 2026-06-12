import './ActivityCard.css'

function ActivityCard({ type, title, total, questions, questionCount, submissions, onClick }) {
  return (
    <div className='activity-card' onClick={onClick} style={onClick ? { cursor: 'pointer' } : undefined}>
      <h4 className='activity-type'>{type}</h4>
      <p className='activity-title'>{title}</p>
      <div className='activity-footer'>
        <span>All {total}</span>
        <span>{questionCount ?? (Array.isArray(questions) ? questions.length : questions)} questions</span>
      </div>
      {submissions && <p className='activity-submissions'>Submissions: {submissions}</p>}
      <div className='activity-icon'></div>
    </div>
  )
}

export default ActivityCard