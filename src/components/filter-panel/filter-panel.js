import React, { useState } from 'react'
import filters from '../../data/menu'
import styles from './filter-panel.module.css'

const FilterPanel = () => {
  const [active, setActive] = useState('Все')

  return (
    <div className={styles.panel}>
      <ul className={styles.filters}>
        {filters.map((item) => {
          return (
            <li
              onClick={() => setActive(item)}
              key={item}
              className={item === active ? styles.active : null}
            >
              {item}
            </li>
          )
        })}
      </ul>
      <div className={styles.sort}>
        <p className={styles.text}>Сортировка по: </p>
        <select className={styles.bar} name='sort'>
          <option defaultValue='pop'>популярности</option>
          <option value='price'>цене</option>
          <option value='abs'>алфавиту</option>
        </select>
      </div>
    </div>
  )
}

export default FilterPanel
