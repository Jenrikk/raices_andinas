import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { RaicesApp } from './RaicesApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RaicesApp />
    </BrowserRouter>
  </React.StrictMode>
)
