import React from 'react'
import CartButton from '../cart-button/cart-button'
import Logo from '../logo/logo'
import { Link } from 'react-router-dom'
import Search from '../search/search'
import styles from './header.module.css'

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className={styles.header}>
      <Link to='/' className='link'>
        <Logo />
      </Link>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Link to='/cart' className='link'>
        <CartButton />
      </Link>
    </header>
  )
}

export default Header
