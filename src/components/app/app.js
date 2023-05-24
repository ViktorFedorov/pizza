import React from 'react'
import Header from '../header/header'
import styles from './app.module.css'
import FilterPanel from '../filter-panel/filter-panel'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <FilterPanel />
    </div>
  )
}

export default App
