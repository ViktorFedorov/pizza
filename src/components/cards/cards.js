import React, { useEffect, useState } from 'react'
import CardItem from '../card-item/card-item'
import { getPizzaList } from '../../utils/api'
import Skeleton from '../skeleton/skeleton'
import styles from './cards.module.css'

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
      {loading ? (
        <ul className={styles.list}>
          {[...new Array(4)].map((item, i) => (
            <Skeleton key={i} />
          ))}
        </ul>
      ) : (
        <ul className={styles.list}>
          {list.map((item) => (
            <CardItem key={item.title} {...item} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cards
