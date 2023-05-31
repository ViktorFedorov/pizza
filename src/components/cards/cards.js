import React, { useEffect, useState } from 'react'
import CardItem from '../card-item/card-item'
import { getPizzaList } from '../../utils/api'
import Skeleton from '../skeleton/skeleton'
import styles from './cards.module.css'

const Cards = ({ activeFilter, sortBy }) => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  // запрашиваем с бэка товары по категориям - при каждой смене фильтра
  useEffect(() => {
    setLoading(true)

    getPizzaList(activeFilter)
      .then(setList)
      .finally(() => setLoading(false))
  }, [activeFilter])

  const data = [...list].sort((a, b) => {
    switch (sortBy.title) {
      case 'price':
        return b.price - a.price
      case 'rating':
        return b.raiting - a.raiting
      default:
        return b.title > a.title ? -1 : 1
    }
  })

  return (
    <div>
      <h1 className={styles.heading}>Все пиццы</h1>
      <ul className={styles.list}>
        {loading
          ? [...new Array(4)].map((item, i) => <Skeleton key={i} />)
          : data.map((item) => <CardItem key={item.title} {...item} />)}
      </ul>
    </div>
  )
}

export default Cards
