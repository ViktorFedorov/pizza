import React, { useState } from 'react'
import styles from './card-item.module.css'

const CardItem = ({ title, price, image, sizes }) => {
  const [quantity, setQuantity] = useState(0)
  const [activeType, setActiveType] = useState('тонкое')
  const [activeSize, setActiveSize] = useState(0)

  return (
    <li className={styles.card}>
      <img className={styles.img} src={image} alt='' />
      <h3 className={styles.heading}>{title}</h3>
      <div className={styles.settings}>
        <ul className={styles.base}>
          <li
            onClick={() => setActiveType('тонкое')}
            className={activeType === 'тонкое' ? styles.active : null}
          >
            тонкое
          </li>
          <li
            onClick={() => setActiveType('традиционное')}
            className={activeType === 'традиционное' ? styles.active : null}
          >
            традиционное
          </li>
        </ul>
        <ul className={styles.size}>
          {sizes.map((item, index) => (
            <li
              className={index === activeSize ? styles.active : null}
              onClick={() => setActiveSize(index)}
              key={item}
            >
              {item} см.
            </li>
          ))}
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
