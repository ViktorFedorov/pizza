import React from 'react'
import styles from './cart-footer.module.css'
import { Link } from 'react-router-dom'

const CartFooter = () => {
  return (
    <div className={styles.cartFooter}>
      <div className={styles.row1}>
        <div className={styles.quantity}>
          Всего пицц: <span>3 шт.</span>
        </div>
        <div className={styles.sum}>
          Сумма заказа: <span>900 ₽</span>
        </div>
      </div>
      <div className={styles.row2}>
        <Link to='/' className={styles.backLink}>
          Вернуться назад
        </Link>
        <button className={styles.buy}>Оплатить сейчас</button>
      </div>
    </div>
  )
}

export default CartFooter
