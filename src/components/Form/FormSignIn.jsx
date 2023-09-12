import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import { Google } from './assets/svg'
import show from './assets/show.png'
import eye from './assets/eye.png'
import { session } from '../../context/contextLogin'
const FormSignIn = () => {
  const Navigate = useNavigate()
  const { initSession, sigInGoogle, signInError } = useContext(session)
  const [showPassword, setShowPassword] = useState(false)

  const [errorForm, setErrorForm] = useState({ password: false, email: false })

  const setData = (e) => {
    // This function takes the values from the form and validates them and then sends them to the initSession function
    e.preventDefault()
    let form = errorForm
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const email = e.target.email.value
    const password = e.target.password.value
    // If the fields are empty, it updates the error status created in order to show the error
    if (email === '') form = { ...form, email: 'empty' }
    if (password === '') form = { ...form, password: 'empty' }
    // validation of the email and password which, if both meet, sends the form data to the initSession function and resets the errors
    if (email.match(validRegex) && form.password !== 'empty') {
      initSession(email, password)
      return setErrorForm({ password: false, email: false })
    } else if (email !== '' && !email.match(validRegex)) {
      form = { ...form, email: true }
    }
    if (password !== '') {
      form = { ...form, password: true }
    }

    return setErrorForm(form)
  }

  return (
    <form className='Form' onSubmit={(e) => { setData(e) }}>
      <div className='Form__title'>
        <h1 className='Form__title--h1'>Welcome back!</h1>
        <h2 className='Form__title--h2'>Please enter your details</h2>
        {signInError && <h1 className='Form__ErrorMessage'>{signInError}</h1>}
      </div>
      <div className='Form__session'>
        <input className='Form__session--input' name='email' type='text' placeholder='Email' />
        {errorForm.email === true
          ? <p className='Form__error--h1'>Invalid Email</p>
          : errorForm.email === 'empty' && <p className='Form__error--h1'>fields cannot be empty</p>}
      </div>
      <div className='Form__session'>
        <input className='Form__session--input' name='password' type={`${showPassword ? 'text' : 'password'}`} placeholder='Password' />
        {errorForm.password === 'empty' && <p className='Form__error--h1'>fields cannot be empty</p>}
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
        <div className='Form__submit--google Form__submit--button buttonPrimaryLigth' onClick={() => { sigInGoogle() }}>
          <Google />
          <h1 className='title Form__submit--h1'>Log in with Google</h1>
        </div>
      </div>
      <div className='Form__signUp'>
        <h1 className='Form__signUp--h1'>Don’t have an account? <span onClick={() => { Navigate('/signUp') }} className='Form__signUp--span'>Sign Up</span></h1>
      </div>
    </form>
  )
}

export default FormSignIn
