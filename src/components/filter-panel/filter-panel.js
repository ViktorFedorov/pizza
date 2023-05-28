import React, { useState } from 'react'
import filters from '../../data/menu'
import styles from './filter-panel.module.css'

const FilterPanel = () => {
  const [active, setActive] = useState(0)

  return (
    <div className={styles.panel}>
      <ul className={styles.filters}>
        {filters.map((item, index) => {
          return (
            <li
              onClick={() => setActive(index)}
              key={item}
              className={index === active ? styles.active : null}
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
