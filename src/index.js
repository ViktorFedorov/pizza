import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
)
