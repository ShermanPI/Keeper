import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from './components'
import Home from './routes/Home'

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
