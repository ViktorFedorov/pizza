import React, { useState } from 'react'
import filters from '../../data/menu'
import styles from './filter-panel.module.css'

const FilterPanel = () => {
  // активная кнопка фильтра
  const [active, setActive] = useState(0)

  // состояние модального окна сортировки
  const [open, setOpen] = useState(false)

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

        <span onClick={() => setOpen(!open)} className={styles.select}>
          популярности
        </span>

        {open && (
          <div className={styles.modal}>
            <ul className={styles.list}>
              <li className={styles.listItem}>популярности</li>
              <li className={styles.listItem}>цене</li>
              <li className={styles.listItem}>алфавиту</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterPanel
