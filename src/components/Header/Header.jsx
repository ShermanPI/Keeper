import './assets/styles/header.css'
import { MenuIcon, FrameIcon } from './assets/images/icons'

export default function Header ({ handlerMenuOpen }) {
  return (
    <header className='header-container'>
      {/* <div className='logo-container'>
        <img src='../../assets/images/logo.png' />
      </div> */}
      <button className='icon' onClick={handlerMenuOpen}>
        <MenuIcon />
      </button>
      <form className='form-filter-container'>
        <input type='text' placeholder='Search' />
      </form>
      <button className='icon'>
        <FrameIcon />
      </button>
      <button className='profile-picture-container icon'>
        S
      </button>
    </header>
  )
}
