import './assets/UserSessionCard.css'
import { CloseIcon } from '../../assets/images/Icons'

export default function UserSessionCard ({ toggleState, handleToggle, user }) {
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
