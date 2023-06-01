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

    getPizzaList(activeFilter, sortBy.title)
      .then(setList)
      .finally(() => setLoading(false))
  }, [activeFilter, sortBy])

  return (
    <div>
      <h1 className={styles.heading}>Все пиццы</h1>
      <ul className={styles.list}>
        {loading
          ? [...new Array(4)].map((item, i) => <Skeleton key={i} />)
          : list.map((item) => <CardItem key={item.title} {...item} />)}
      </ul>
    </div>
  )
}

export default Cards
