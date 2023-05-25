import React from 'react'
import styles from './cards.module.css'
import CardItem from '../card-item/card-item'

const fakeData = [1, 1, 1, 1, 1, 1, 1, 1]

const Cards = () => {
  return (
    <div>
      <h1 className={styles.heading}>Все пиццы</h1>
      <ul className={styles.list}>
        {fakeData.map(() => (
          <CardItem />
        ))}
      </ul>
    </div>
  )
}

export default Cards
