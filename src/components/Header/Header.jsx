import './assets/styles/header.css'
import { MenuIcon, FrameIcon, OneColumnGridIcon } from './assets/images/icons'

export default function Header ({ menuOpenHandler, gridHandler, oneColumnGrid }) {
  return (
    <header className='header-container'>

      <button className='icon' onClick={menuOpenHandler}>
        <MenuIcon />
      </button>
      <div className='logo-landscape'>
        <div className='logotext-image-container'>
          <img src='src/assets/images/logo.png' alt='Keeper App Logo' />
        </div>
        <h1>Keeper</h1>
      </div>

      <form className='form-filter-container'>
        <input type='text' placeholder='Search' />
      </form>
      <button className='icon' onClick={gridHandler}>
        {oneColumnGrid ? <FrameIcon /> : <OneColumnGridIcon />}
      </button>
      <button className='profile-picture-container icon'>
        S
      </button>
    </header>
  )
}
