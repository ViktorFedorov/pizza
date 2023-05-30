import React from 'react'
import error from '../../images/404.jpg'
import styles from './404.module.css'

const PageNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.pic} src={error} alt='404' />
    </div>
  )
}

export default PageNotFound
