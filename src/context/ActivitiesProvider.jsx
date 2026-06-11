import { useState } from 'react'
import { ActivitiesContext } from './ActivitiesContext'

export function ActivitiesProvider({ children }) {
  const [activities, setActivities] = useState([

    { id: 1, courseId: 1, type: "Quiz", title: "Economics for Engineers", total: 426, questions: 15, minutes: 30, submissions: "25/64" },
    { id: 2, courseId: 1, type: "Notes", title: "Economics for Engineers", total: 426, questions: 15, submissions: "25/64" },
    { id: 3, courseId: 1, type: "Assignment", title: "Economics for Engineers", total: 426, questions: 15, submissions: "25/64" },
    { id: 4, courseId: 1, type: "Quiz", title: "Economics for Engineers", total: 426, questions: 15, minutes: 30, submissions: "25/64" },

  ])

  return (
    <ActivitiesContext.Provider value={{ activities, setActivities }}>
      {children}
    </ActivitiesContext.Provider>
  )
}

export default ActivitiesProvider