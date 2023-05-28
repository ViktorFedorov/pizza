import React, { useEffect, useState } from 'react'
import CardItem from '../card-item/card-item'
import { getPizzaList } from '../../utils/api'
import styles from './cards.module.css'
import SpinnerLoader from '../spinner-loader/spinner-loader'

const Cards = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPizzaList()
      .then((list) => setList(list))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className={styles.heading}>Все пиццы</h1>
      {!loading ? (
        <ul className={styles.list}>
          {list.map((item) => (
            <CardItem key={item.title} {...item} />
          ))}
        </ul>
      ) : (
        <SpinnerLoader />
      )}
    </div>
  )
}

export default Cards
