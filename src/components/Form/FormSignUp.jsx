import React, { useState } from 'react'
import './Form.css'
import { Google } from './assets/svg'
import show from './assets/show.png'
import eye from './assets/eye.png'
const FormSignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <form className='Form'>
      <div className='Login__title'>
        <h1 className='Login__title--h1'>Sign Up!</h1>
      </div>
      <div className='Form__session'>
        <input className='Form__session--input' name='name' type='text' placeholder='Full Name' />
      </div>
      <div className='Form__session'>
        <input className='Form__session--input' name='email' type='text' placeholder='Email' />
      </div>
      <div className='Form__session'>
        <input className='Form__session--input' name='password' type={`${showPassword ? 'text' : 'password'}`} placeholder='Password' />
        {showPassword
          ? <img src={eye} onClick={() => { setShowPassword(!showPassword) }} alt='show' className='Form__session--show float' />
          : <img src={show} onClick={() => { setShowPassword(!showPassword) }} alt='show' className='Form__session--show float' />}
      </div>
      <div className='Form__session'>
        <input className='Form__session--input' name='password' type={`${showPassword ? 'text' : 'password'}`} placeholder='Password' />
        {showPassword
          ? <img src={eye} onClick={() => { setShowPassword(!showPassword) }} alt='show' className='Form__session--show float' />
          : <img src={show} onClick={() => { setShowPassword(!showPassword) }} alt='show' className='Form__session--show float' />}
      </div>
      <div className='Form__remember'>
        <input name='checkbox--form' type='checkbox' />
        <label className='Form__remember--label'>Remember for 30 days</label>
      </div>
      <div className='Form__submit'>
        <button className='Form__submit--button buttonPrimary'>Log In</button>
        <div className='Form__submit--google Form__submit--button buttonPrimaryLigth'>
          <Google />
          <h1 className='title Form__submit--h1'>Log in with Google</h1>
        </div>
      </div>
      <div className='Form__signUp'>
        <h1 className='Form__signUp--h1'>Don’t have an account? <span className='Form__signUp--span'>Sign Up</span></h1>
      </div>
    </form>
  )
}

export default FormSignUp
