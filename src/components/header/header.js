import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href='/'>
        <h1 className={styles.heading}>react pizza</h1>
        <p className={styles.text}>самая вкусная пицца во вселенной</p>
      </a>
    </header>
  )
}

export default Header
