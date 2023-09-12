import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from './components'
import Home from './routes/Home'
import Login from './components/Login/Login'
import FormSignIn from './components/Form/FormSignIn'
import FormSignUp from './components/Form/FormSignUp'
import './assets/styles/reset.css'
import Error404 from './components/Error/Error404'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login><FormSignIn /></Login>} />
        <Route path='/signUp' element={<Login><FormSignUp /></Login>} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
