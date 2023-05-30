import React from 'react'
import Header from '../header/header'
import { Routes, Route } from 'react-router-dom'
import styles from './app.module.css'
import Main from '../../pages/main'
import Cart from '../../pages/cart'
import PageNotFound from '../../pages/404/404'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/404' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
