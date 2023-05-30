import React from 'react'
import Header from '../header/header'
import FilterPanel from '../filter-panel/filter-panel'
import Cards from '../cards/cards'
import styles from './app.module.css'
import Skeleton from '../skeleton/skeleton'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <FilterPanel />
      <Cards />
      <Skeleton />
    </div>
  )
}

export default App
