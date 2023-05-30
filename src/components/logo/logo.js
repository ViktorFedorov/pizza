import React from 'react'
import styles from './logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <h1 className={styles.heading}>react pizza</h1>
      <p className={styles.text}>самая вкусная пицца во вселенной</p>
    </div>
  )
}

export default Logo
