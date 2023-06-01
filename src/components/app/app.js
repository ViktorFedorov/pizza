import React, { useState } from 'react'
import Header from '../header/header'
import { Routes, Route } from 'react-router-dom'
import Main from '../../pages/main'
import Cart from '../../pages/cart/cart'
import PageNotFound from '../../pages/404/404'
import styles from './app.module.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className={styles.app}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path='/' element={<Main searchQuery={searchQuery} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
