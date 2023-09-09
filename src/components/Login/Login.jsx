import React from 'react'
import FormSignIn from '../Form/FormSignIn'
import './login.css'
import logo from '../../assets/images/logo.png'

const Login = () => {
  return (
    <main className='Content'>
      <div className='Login'>
        <div className='Login__logo'>
          <img className='Login__logo--img' src={logo} alt='Logo' />
        </div>
        <div className='Login__title'>
          <h1 className='Login__title--h1'>Welcome back!</h1>
          <h2 className='Login__title--h2'>Please enter your details</h2>
        </div>
        <FormSignIn />
      </div>
    </main>
  )
}

export default Login
