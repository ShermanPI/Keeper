import './assets/UserSessionCard.css'
import { CloseIcon } from '../../assets/images/Icons'
import { session } from '../../context/contextLogin'
import { useContext, useEffect, useState } from 'react'

export default function UserSessionCard ({ toggleState, handleToggle }) {
  const { loggedUser } = useContext(session)
  const [user, setUser] = useState({ username: 'username', email: 'no@email.com', imageUrl: '' })

  useEffect(() => {
    if (loggedUser) {
      console.log(loggedUser)
      console.log(loggedUser.user_metadata.avatar_url)
      setUser({ username: loggedUser.user_metadata.full_name.split(' ')[0], email: loggedUser.user_metadata.email, imageUrl: loggedUser.user_metadata.avatar_url })
    }
  }, [loggedUser])

  return (
    <div className={`session-info-card ${toggleState ? '' : 'card-hidden'}`}>
      <div className='email-container'>
        <p className='user-email'>{user.email}</p>
        <button className='close-user-info icon' onClick={handleToggle}>
          <CloseIcon />
        </button>
      </div>
      <div className='user-profile-picture'>
        {user.imageUrl ? <img src={user.imageUrl} alt={`${user.username} profile picture`} /> : user.username[0].toUpperCase()}

      </div>
      <div className='user-welcome'>
        <h2>{`Welcome, ${user.username}!`}</h2>
      </div>
      <button className='close-session'>
        Close Session
      </button>
    </div>
  )
}
