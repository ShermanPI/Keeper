import React from 'react'
import FormSignIn from '../Form/FormSignIn'
import './login.css'
import logo from '../../assets/images/logo.png'
import { Blob, MobileNoteList } from './assets/svg'
import FormSignUp from '../Form/FormSignUp'

const Login = () => {
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
        {/* <FormSignUp /> */}
        <FormSignIn />
      </div>
    </main>
  )
}

export default Login
