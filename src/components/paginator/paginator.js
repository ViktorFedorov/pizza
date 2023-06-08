import React from 'react'
import styles from './paginator.module.css'

const Paginator = ({ pages, currentPage, setCurrentPage }) => {
  const buttons = []

  for (let i = 1; i <= pages; i++) {
    buttons.push(
      <li
        className={currentPage === i ? styles.active : ''}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </li>,
    )
  }

  return <ul className={styles.paginator}>{buttons}</ul>
}

export default Paginator
