import React, { useState } from 'react'
import pizzaImage from '../../images/item1.jpg'
import styles from './card-item.module.css'

const CardItem = () => {
  const [quantity, setQuantity] = useState(0)

  return (
    <li className={styles.card}>
      <img className={styles.img} src={pizzaImage} alt='' />
      <h3 className={styles.heading}>Чизбургер-пицца</h3>
      <div className={styles.settings}>
        <ul className={styles.base}>
          <li className={styles.active}>тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul className={styles.size}>
          <li>26 см.</li>
          <li>30 см.</li>
          <li className={styles.active}>40 см.</li>
        </ul>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.price}>от 395 ₽</div>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className={styles.add}
        >
          Добавить
          {!!quantity && <div className={styles.counter}>{quantity}</div>}
        </button>
      </div>
    </li>
  )
}

export default CardItem
