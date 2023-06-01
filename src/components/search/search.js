import React, { useRef } from 'react'
import styles from './search.module.css'

const Search = ({ searchQuery, setSearchQuery }) => {
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

  const clearInput = () => () => setSearchQuery('')

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
      {searchQuery && (
        <div className={styles.clear} onClick={clearInput()}>
          {' '}
        </div>
      )}
    </div>
  )
}

export default Search
