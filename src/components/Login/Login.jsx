import React from 'react'
import './login.css'
import logo from '../../assets/images/logo.png'
import { Blob, MobileNoteList } from './assets/svg'

const Login = ({ children }) => {
  return (
    <main className='Content'>
      <div className='Design'>
        <Blob />
        <MobileNoteList />
      </div>
      <div className='Login'>
        <div className='Login__logo'>
          <img className='Login__logo--img' src={logo} alt='Logo' />
        </div>
        {children}
      </div>
    </main>
  )
}

export default Login
