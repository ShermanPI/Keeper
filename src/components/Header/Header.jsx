import './assets/styles/header.css'
import { MenuIcon, FrameIcon, OneColumnGridIcon, MagnifyingGlasses } from './assets/images/icons'

export default function Header ({ menuOpenHandler, gridHandler, oneColumnGrid, toggleUserCard }) {
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
        <div className='search-icon'>
          <MagnifyingGlasses />
        </div>
        <input type='text' placeholder='Search' />
        <div className='search-icon' />
      </form>
      <button className='icon' onClick={gridHandler}>
        {oneColumnGrid ? <FrameIcon /> : <OneColumnGridIcon />}
      </button>
      <button className='profile-picture-container icon' onClick={toggleUserCard}>
        S
      </button>
    </header>
  )
}
