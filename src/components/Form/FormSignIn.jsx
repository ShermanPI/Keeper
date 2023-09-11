import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import { Google } from './assets/svg'
import show from './assets/show.png'
import eye from './assets/eye.png'
import { session } from '../../context/contextLogin'
const FormSignIn = () => {
  const Navigate = useNavigate()
  const { initSession } = useContext(session)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '', password: ''
  })
  const [errorForm, setErrorForm] = useState(false)

  const setData = (e) => {
    e.preventDefault()
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (e.target.email.value.match(validRegex)) {
      setFormData({
        email: e.target.email.value,
        password: e.target.password.value
      })
      initSession()
      return setErrorForm(false)
    } else {
      return setErrorForm(true)
    }
  }

  console.log(formData)
  return (
    <form className='Form' onSubmit={(e) => { setData(e) }}>
      <div className='Login__title'>
        <h1 className='Login__title--h1'>Welcome back!</h1>
        <h2 className='Login__title--h2'>Please enter your details</h2>
      </div>
      <div className='Form__session'>
        <input className='Form__session--input' name='email' type='text' placeholder='Email' />
        {errorForm && <p className='Form__error--h1'>email incorrecto</p>}
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
        <h1 className='Form__signUp--h1'>Don’t have an account? <span onClick={() => { Navigate('/login/signUp') }} className='Form__signUp--span'>Sign Up</span></h1>
      </div>
    </form>
  )
}

export default FormSignIn
