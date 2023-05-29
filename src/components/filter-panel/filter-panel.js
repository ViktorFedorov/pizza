import React, { useEffect, useState } from 'react'
import filters from '../../data/menu'
import sortCategories from '../../data/sort'
import styles from './filter-panel.module.css'

const FilterPanel = () => {
  // активная кнопка фильтра
  const [active, setActive] = useState(0)

  // состояние модального окна сортировки
  const [open, setOpen] = useState(false)

  // выбор поля сортировки - по умолчанию - первый в списке
  const [sortBy, setSortBy] = useState(sortCategories[0])

  // показ модалки сортировки
  const clickHandler = (e) => {
    e.stopPropagation()
    setOpen(!open)
  }

  // выбор категории по которой будет произведена сортироввка
  const sortHandler = (str) => {
    setSortBy(str)
    setOpen(false)
  }

  // клик по свободной области экрана и нажатие Esc закрывает модалку сортировки
  useEffect(() => {
    const closeModal = () => setOpen(false)
    const closeModalOnEsc = (e) => e.key === 'Escape' && setOpen(false)

    document.addEventListener('click', closeModal)
    document.addEventListener('keydown', closeModalOnEsc)

    // отписка от событий
    return () => {
      document.removeEventListener('click', closeModal)
      document.removeEventListener('keydown', closeModalOnEsc)
    }
  }, [])

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
        <span onClick={clickHandler} className={styles.select}>
          {sortBy}
        </span>

        {open && (
          <div className={styles.modal}>
            <ul className={styles.list}>
              {sortCategories.map((item) => {
                return (
                  <li
                    onClick={() => sortHandler(item)}
                    key={item}
                    className={
                      sortBy === item
                        ? `${styles.listItem} ${styles.selected}`
                        : styles.listItem
                    }
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterPanel
