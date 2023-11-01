import './assets/styles/header.css'
import { MenuIcon, FrameIcon, OneColumnGridIcon, MagnifyingGlasses } from './assets/images/icons'
import UserSessionCard from '../UserSessionCard/UserSessionCard'
import { useToggle } from '../../hooks/useToggle'
import { session } from '../../context/contextLogin'
import { useContext, useEffect, useState } from 'react'

export default function Header ({ menuOpenHandler, gridHandler, oneColumnGrid }) {
  const { toggleState: userCardState, toggle: toggleUserCard } = useToggle({ initialValue: false })
  const { loggedUser } = useContext(session)
  const [user, setUser] = useState({ username: 'username', email: 'no@email.com', imageUrl: '' })

  useEffect(() => {
    if (loggedUser) {
      setUser({ username: loggedUser.user_metadata.full_name.split(' ')[0], email: loggedUser.user_metadata.email, imageUrl: loggedUser.user_metadata.avatar_url })
    }
  }, [loggedUser])

  return (
    <header className='header-container'>

      <UserSessionCard toggleState={userCardState} handleToggle={toggleUserCard} user={user} />

      <button className='icon header-btn' onClick={menuOpenHandler}>
        <MenuIcon />
      </button>
      <div className='logo-landscape'>
        <div className='logotext-image-container'>
          <img src='src/assets/images/logo.png' alt='Keeper App Logo' />
        </div>
        <h1>Keeper</h1>
      </div>

      <form className='form-filter-container'>
        <div className='search-icon'>
          <MagnifyingGlasses />
        </div>
        <input type='text' placeholder='Search' />
        <div className='search-icon' />
      </form>
      <button className='icon header-btn' onClick={gridHandler}>
        {oneColumnGrid ? <FrameIcon /> : <OneColumnGridIcon />}
      </button>
      <button className='profile-picture-container icon header-btn' onClick={toggleUserCard}>
        {user.imageUrl ? <img src={user.imageUrl} alt={`${user.username} profile picture`} /> : user.username[0].toUpperCase()}

      </button>
    </header>
  )
}
