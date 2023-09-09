import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from './routes'
import Home from './routes/Home'
import './assets/styles/reset.css'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
