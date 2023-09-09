import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from './components'
import Home from './routes/Home'
import Login from './components/Login/Login'
import './assets/styles/reset.css'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
