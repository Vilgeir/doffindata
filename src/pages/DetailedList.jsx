import React from 'react'
import Filter from '../components/Filter'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import structure from '../data/test'
import data from '../data/doffin-bach-default-rtdb-F02_2014-export.json'

function DetailedList() {
  const { details } = useParams()
  //   Object.values(data).map((i) =>
  //     i.cpvnumber.substring(0, 2) === details.substring(0, 2) &&
  //     i.dato.substring(0, 8) === '2020-09-'
  //       ? console.log(i.bedrift)
  //       : i.dato.substring(0, 8) === '2020-10-'
  //       ? console.log(i.bedrift)
  //       : i.dato.substring(0, 8) === '2020-11-' && console.log(i.bedrift)
  //   )

  let arr = ['2020-09-', '2020-10-', '2020-11-']
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
        {Object.values(data).map(
          (i) =>
            i.cpvnumber.substring(0, 2) === details.substring(0, 2) &&
            arr.map(
              (item) =>
                item.includes(i.kunngjoringsdato.substring(0, 8)) && (
                  <Card i={i} />
                )
            )
        )}
      </div>
    </div>
  )
}

export default DetailedList
