import searchIcon from '../assets/searchIcon.png'
import notification from '../assets/notificationIcon.png'
import usrIcon from '../assets/userIcon.png'
import arrowdown from '../assets/arrowDownUserIcon.svg'
import './Layout.css'
import { useAuth } from '../context/useAuth'



function Header({title, showUser}){
    const { user, setRole } = useAuth()

    // TEMP dev tool: flip role while there's no real login/backend. Remove later.
    const toggleRole = () => setRole(user?.role === 'teacher' ? 'student' : 'teacher')


return (

<div className='header'>
    
    {title && <h2 className='header-title'>{title}</h2>}
    <div className='search-bar'>
        <img src={searchIcon} alt="searchIcon" />
        <input type="text" placeholder='Search' className='search-input'/>
    </div>

    <div className='header-right'>
        <button className='dev-role-toggle' onClick={toggleRole}>
            DEV: {user?.role === 'teacher' ? 'Tutor' : 'Student'} ⇄
        </button>

        {showUser && (
            <div className='username-frame'>
                <div className='notification'>
                    <img src={notification} alt="Notification Icon" />
                </div>

                <div className='username'>
                    <img src={usrIcon} alt="User Icon" />

                        <div className='header-user'>
                        <span>{user?.name || 'User'}</span>
                        </div>

                    <img src={arrowdown} alt="arrow down" />
                </div>
            </div>
        )}
    </div>

</div>

)}

export default Header