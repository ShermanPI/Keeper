import React from 'react'
import './Form.css'
import { Google } from './assets/svg'
const FormSignIn = () => {
  return (
    <form className='Form'>

      <div className='Form__session'>
        <input className='Form__session--input' name='email' type='text' placeholder='Email' />
      </div>
      <div className='Form__session'>
        <input className='Form__session--input' name='password' type='password' placeholder='Password' />
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

export default FormSignIn
