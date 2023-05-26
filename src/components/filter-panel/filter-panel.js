import React, { useState } from 'react'
import styles from './filter-panel.module.css'

const menu = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const FilterPanel = () => {
  const [active, setActive] = useState('Все')

  return (
    <div className={styles.panel}>
      <ul className={styles.filters}>
        {menu.map((item) => {
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
