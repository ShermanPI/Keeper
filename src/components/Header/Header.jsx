import './assets/styles/header.css'
import { MenuIcon, FrameIcon } from './assets/images/icons'

export default function Header ({ menuOpenHandler }) {
  return (
    <header className='header-container'>

      <button className='icon' onClick={menuOpenHandler}>
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
