//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CoursesProvider } from './context/CoursesProvider'
import { ActivitiesProvider } from './context/ActivitiesProvider'
import { AuthProvider} from './context/AuthProvider'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CoursesProvider>
      <ActivitiesProvider>
        <App />
      </ActivitiesProvider>
    </CoursesProvider>
  </AuthProvider>
)
