import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContextSession } from './context/contextLogin.jsx'
import { TagContextProvider } from './context/tagContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextSession>
        <TagContextProvider>
          <App />
        </TagContextProvider>
      </ContextSession>
    </BrowserRouter>
  </React.StrictMode>
)
