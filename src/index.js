import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <App />
  </Router>,
)
