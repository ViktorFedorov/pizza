import React, { useState } from 'react'
import styles from './card-item.module.css'

const CardItem = ({ title, price, image }) => {
  const [quantity, setQuantity] = useState(0)

  return (
    <li className={styles.card}>
      <img className={styles.img} src={image} alt='' />
      <h3 className={styles.heading}>{title}</h3>
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
        <div className={styles.price}>от {price} ₽</div>
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
