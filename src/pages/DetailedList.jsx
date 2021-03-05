import React from 'react'
import Filter from '../components/Filter'
import Card from '../components/Card'

function DetailedList() {
  return (
    <div className='container'>
      <div className='search'>
        <Filter />
      </div>
      <div>
        <h1>Landbruk og hageprodukter (CPV 03100000)</h1>
        <select>
          <option value=''>Sorter etter</option>
        </select>

        <Card />
      </div>
    </div>
  )
}

export default DetailedList
