import React from 'react'
import styles from './filter-panel.module.css'

const FilterPanel = () => {
  return (
    <div className={styles.panel}>
      <ul className={styles.filters}>
        <li className={styles.active}>Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>

      <div className={styles.sort}>
        <p className={styles.text}>Сортировка по: </p>
        <select className={styles.bar} name='sort'>
          <option value='pop' selected>
            популярности
          </option>
          <option value='price'>цене</option>
          <option value='abs'>алфавиту</option>
        </select>
      </div>
    </div>
  )
}

export default FilterPanel
