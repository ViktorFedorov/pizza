import React from 'react'
import CartButton from '../cart-button/cart-button'
import Logo from '../logo/logo'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import Search from '../search/search'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/' className='link'>
        <Logo />
      </Link>
      <Search />
      <Link to='/cart' className='link'>
        <CartButton />
      </Link>
    </header>
  )
}

export default Header
