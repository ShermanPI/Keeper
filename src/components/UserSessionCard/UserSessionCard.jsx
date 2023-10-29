import './assets/UserSessionCard.css'

export default function UserSessionCard ({ user }) {
  return (
    <div className='session-info-card'>
      <div className='email-container'>
        <p className='user-email'>Shermanperez0@gmail.com</p>
        <button className='close-user-info icon'>
          x
        </button>
      </div>
      <div className='user-profile-picture'>
        <img src='' alt='' />
      </div>
      <div className='user-welcome'>
        <h2>Welcome, Sherman!</h2>
      </div>
      <button className='close-session'>
        Close Session
      </button>
    </div>
  )
}
