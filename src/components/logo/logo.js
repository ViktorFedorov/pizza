import React from 'react'
import styles from './logo.module.css'

const Logo = () => {
  return (
    <a className={styles.logo} href='/'>
      <h1 className={styles.heading}>react pizza</h1>
      <p className={styles.text}>самая вкусная пицца во вселенной</p>
    </a>
  )
}

export default Logo
