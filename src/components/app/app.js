import React from 'react'
import Header from '../header/header'
import FilterPanel from '../filter-panel/filter-panel'
import CardItem from '../card-item/card-item'
import Cards from '../cards/cards'
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <FilterPanel />
      <Cards />
      <CardItem />
    </div>
  )
}

export default App
