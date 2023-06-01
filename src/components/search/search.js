import React, { useRef, useState } from 'react'
import styles from './search.module.css'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const searchBar = useRef(null)

  const handleInput = () => {
    return (e) => {
      setSearchQuery(e.target.value)
    }
  }

  const handleFocus = () => {
    return () => {
      searchBar.current.removeAttribute('placeholder')
    }
  }

  return (
    <div className={styles.search}>
      <input
        ref={searchBar}
        type='text'
        value={searchQuery}
        onChange={handleInput()}
        onFocus={handleFocus()}
        placeholder='find your pizza...'
      />
    </div>
  )
}

export default Search
