import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from './components'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </>
  )
}

export default App
