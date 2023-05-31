import React, { useState } from 'react'
import FilterPanel from '../components/filter-panel/filter-panel'
import Cards from '../components/cards/cards'

const Main = () => {
  // активная кнопка фильтра
  const [activeFilter, setActiveFilter] = useState(0)

  return (
    <div>
      <FilterPanel
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Cards activeFilter={activeFilter} />
    </div>
  )
}

export default Main
