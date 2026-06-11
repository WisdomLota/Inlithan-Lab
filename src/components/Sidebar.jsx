import { NavLink } from 'react-router-dom'

import Lable from '../assets/inlithanLogoLable.png'
import activitiesimg from '../assets/activities.png'
import homeimg from '../assets/home.png'
import homeIconActive from '../assets/homeActive.png'
import labsimg from '../assets/labAI.png'
import coursesimg from '../assets/courses.png'
import exploreimg from '../assets/explore.png'
import settingsimg from '../assets/settings.png'
import studentListimg from '../assets/userIcon.png'
import './Layout.css'
import { useAuth } from '../context/useAuth'


function Sidebar(){
    const { user } = useAuth()
    const isTeacher = user?.role === 'teacher'

    return(
        <div className='side-bar'>
            <div className='logo-icon'>
                <img src={Lable} alt="logo lable" className='logoIconImg'/>
            </div>

            <nav className='sidebar-nav'>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                {({ isActive }) => (
                    <>
                    <img src={isActive ? homeIconActive : homeimg} alt="home image" className='nav-icon'/>
                    Home
                    </>
                )}
                </NavLink>

                <NavLink to="/courses" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    <img src={coursesimg} alt="course image" className='nav-icon'/>
                    Courses
                </NavLink>

                <NavLink to="/activities" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    <img src={activitiesimg} alt="activity image" className='nav-icon'/>
                    Activities
                </NavLink>

                <NavLink to="/labs" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    <img src={labsimg} alt="lab image" className='nav-icon'/>
                    Labs
                </NavLink>

                {isTeacher ? (
                    <NavLink to="/students" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <img src={studentListimg} alt="student list image" className='nav-icon'/>
                        Student List
                    </NavLink>
                ) : (
                    <NavLink to="/explore" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <img src={exploreimg} alt="explore image" className='nav-icon'/>
                        Explore
                    </NavLink>
                )}

                <NavLink to="/settings" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    <img src={settingsimg} alt="settings image" className='nav-icon'/>
                    Settings
                </NavLink>

                <div className='sidebar-bottom'>
                    <div className='research'>
                        <div className='researchBox'>
                             <p>Research Papers for the week</p>
                        </div>
                        <button className='researchbtn'>
                             Preview
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar