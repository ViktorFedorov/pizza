import React from 'react'
import Header from '../header/header'
import styles from './app.module.css'
import FilterPanel from '../filter-panel/filter-panel'
import CardItem from '../card-item/card-item'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <FilterPanel />
      <CardItem />
    </div>
  )
}

export default App
