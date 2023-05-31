import React, { useState } from 'react'
import FilterPanel from '../components/filter-panel/filter-panel'
import Cards from '../components/cards/cards'
import sortCategories from '../data/sort'

const Main = () => {
  // активная кнопка фильтра
  const [activeFilter, setActiveFilter] = useState(0)

  // выбор поля сортировки - по умолчанию - первый в списке
  const [sortBy, setSortBy] = useState(sortCategories[0])

  return (
    <div>
      <FilterPanel
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Cards activeFilter={activeFilter} sortBy={sortBy} />
    </div>
  )
}

export default Main
