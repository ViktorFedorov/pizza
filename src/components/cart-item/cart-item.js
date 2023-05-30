import React from 'react'
import pizzaImage from '../../images/cart-item.jpg'
import styles from './cart-item.module.css'

const CartItem = () => {
  return (
    <li className={styles.item}>
      <img src={pizzaImage} alt='' />
      <div className={styles.description}>
        <h2>Сырный цыпленок</h2>
        <p>тонкое тесто, 26 см.</p>
      </div>
      <div className={styles.counter}>
        <button className={styles.dec}></button>
        <div className={styles.quantity}>3</div>
        <button className={styles.inc}></button>
      </div>
      <div className={styles.price}>770 ₽</div>
      <button className={styles.remove}></button>
    </li>
  )
}

export default CartItem
