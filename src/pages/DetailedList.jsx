import React from 'react'
import Filter from '../components/Filter'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import structure from '../data/test'

function DetailedList() {
  const { details } = useParams()

  return (
    <div className='container'>
      <div className='search'>
        <Filter details={details} />
      </div>
      <div>
        {structure.map(
          (i) =>
            i.code === details && (
              <h1>
                {i.name} (CPV {i.code})
              </h1>
            )
        )}
        <select>
          <option value=''>Sorter etter</option>
        </select>

        <Card />
      </div>
    </div>
  )
}

export default DetailedList
