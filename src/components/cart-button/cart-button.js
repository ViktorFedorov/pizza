import React from 'react'
import styles from './cart-button.module.css'

const CartButton = () => {
  return (
    <button className={styles.button}>
      <div className={styles.price}>520 &#8381;</div>
      <div className={styles.quantity}>3</div>
    </button>
  )
}

export default CartButton
