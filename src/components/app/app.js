import React from 'react'
import Header from '../header/header'
import { Routes, Route } from 'react-router-dom'
import Main from '../../pages/main'
import Cart from '../../pages/cart/cart'
import PageNotFound from '../../pages/404/404'
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
