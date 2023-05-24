import React from 'react'
import CartButton from '../cart-button/cart-button'
import Logo from '../logo/logo'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <CartButton />
    </header>
  )
}

export default Header
