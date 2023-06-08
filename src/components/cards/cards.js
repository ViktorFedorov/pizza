import React, { useEffect, useState } from 'react'
import CardItem from '../card-item/card-item'
import { getPizzaList } from '../../utils/api'
import Skeleton from '../skeleton/skeleton'
import styles from './cards.module.css'
import Paginator from '../paginator/paginator'

const Cards = ({ activeFilter, sortBy, searchQuery }) => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  // пагинация
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(4)

  /*
    запрашиваем с бэка товары при каждой
    смене фильтра, метода сортировки и поискового запроса
  */
  useEffect(() => {
    setLoading(true)

    getPizzaList(activeFilter, sortBy.title, searchQuery, currentPage, limit)
      .then(setList)
      .finally(() => setLoading(false))
  }, [activeFilter, sortBy, searchQuery, currentPage])

  return (
    <div>
      <h1 className={styles.heading}>Все пиццы</h1>
      <ul className={styles.list}>
        {loading
          ? [...new Array(4)].map((item, i) => <Skeleton key={i} />)
          : list.map((item) => <CardItem key={item.title} {...item} />)}
      </ul>
      <Paginator
        pages={Math.ceil(9 / limit)} // 9 - количество пицц всего
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default Cards
