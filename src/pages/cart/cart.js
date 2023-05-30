import React from 'react'
import styles from './cart.module.css'
import CartItem from '../../components/cart-item/cart-item'

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h1 className={styles.heading}>Корзина</h1>
        <button className={styles.empty}>Очистить корзину</button>
      </div>
      <ul>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
    </div>
  )
}

export default Cart
