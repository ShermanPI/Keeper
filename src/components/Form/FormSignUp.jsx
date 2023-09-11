import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import { Google } from './assets/svg'
import show from './assets/show.png'
import eye from './assets/eye.png'
const FormSignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: ''
  })
  const [errorForm, setErrorForm] = useState({ fullName: false, email: false, password: false, confirmPassword: false })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const setData = (e) => {
    e.preventDefault()

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    let form = errorForm

    if (name === '') { form = { ...form, fullName: 'empty' } }
    if (email === '') { form = { ...form, email: 'empty' } }
    if (password === '') { form = { ...form, password: 'empty' } }
    if (confirmPassword === '') { form = { ...form, confirmPassword: 'empty' } }
    if (!name.match(/^[a-zA-Z_]+$/) && name !== '') {
      form = { ...form, fullName: true }
    }
    if (password !== confirmPassword) {
      form = { ...form, password: true }
    } else if (password !== '') {
      form = { ...form, password: false }
    }

    if (email.match(validRegex) && name.match(/^[a-zA-Z_]+$/)) {
      if (!form.password) {
        setFormData({
          fullName: name,
          email,
          password
        })

        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        return setErrorForm({ fullName: false, email: false, password: false, confirmPassword: false })
      }
    } else if (email !== '') {
      form = { ...form, email: true }
    }

    return setErrorForm(form)
  }

  console.log(errorForm)

  console.log(formData)
  return (
    <form className='Form' onSubmit={(e) => { setData(e) }}>
      <div className='Login__title'>
        <h1 className='Login__title--h1'>Sign Up!</h1>
      </div>
      <div className='Form__session'>
        <input
          className='Form__session--input' name='name' type='text'
          placeholder='Full Name'
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
        {errorForm.fullName === true
          ? <p className='Form__error--h1'>Invalid username</p>
          : errorForm.fullName === 'empty' && <p className='Form__error--h1'>fields cannot be empty</p>}
      </div>
      <div className='Form__session'>
        <input
          className='Form__session--input'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        {errorForm.email === true
          ? <p className='Form__error--h1'>Invalid email</p>
          : errorForm.email === 'empty' && <p className='Form__error--h1'>fields cannot be empty</p>}
      </div>
      <div className='Form__session'>
        <input
          className='Form__session--input'
          name='password'
          type={`${showPassword ? 'text' : 'password'}`}
          placeholder='Password'
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        {errorForm.password === true
          ? <p className='Form__error--h1'>password does not match</p>
          : errorForm.password === 'empty' && <p className='Form__error--h1'>fields cannot be empty</p>}
        {showPassword
          ? <img src={eye} onClick={() => { setShowPassword(!showPassword) }} alt='show' className='Form__session--show float' />
          : <img src={show} onClick={() => { setShowPassword(!showPassword) }} alt='show' className='Form__session--show float' />}
      </div>
      <div className='Form__session'>
        <input
          className='Form__session--input'
          name='confirmPassword'
          type={`${showPassword ? 'text' : 'password'}`}
          placeholder='Password'
          value={confirmPassword}
          onChange={(e) => { setConfirmPassword(e.target.value) }}
        />
        {errorForm.password === true
          ? <p className='Form__error--h1'>password does not match</p>
          : errorForm.password === 'empty' && <p className='Form__error--h1'>fields cannot be empty</p>}
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
        <h1 className='Form__signUp--h1'>Already have an account?  <span onClick={() => { Navigate('/login') }} className='Form__signUp--span'>Log in</span></h1>
      </div>
    </form>
  )
}

export default FormSignUp
