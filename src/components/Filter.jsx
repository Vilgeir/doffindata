import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import structure from '../data/count.structure'
import structure from '../data/test'
import fylker from '../data/fylker'
import Categories from '../pages/Categories'

function Filter({ details }) {
  //   const [checked, setChecked] = useState({ cpv: '', checked: '' })
  const [checked, setChecked] = useState(
    structure.map((item) => ({ cpv: item.code, checked: false }))
  )

  const handleChange = (e) => {
    setChecked({ cpv: e.target.value, checked: e.target.checked })
  }

  return (
    <div>
      <h3>Filter</h3>
      <h4>Kategorier</h4>
      <Link to='/categories'>Alle Kategorier</Link>
      {/* {structure.map((item, i) => (
        <div>
          <input
            key={i}
            type='checkbox'
            value={item.code}
            onClick={handleChange}
          ></input>
          <label>
            {item.name} ({item.count})
          </label>
          {checked.cpv === item.code &&
            checked.checked === true &&
            item.children.map((i) => (
              <p className='button'>
                {i.name} ({i.count})
              </p>
            ))}
        </div>
      ))} */}

      {structure.map(
        (i) =>
          i.code === details &&
          i.children.map((item, i) => (
            <div>
              <input key={i} type='checkbox' value={item.code}></input>
              <label>
                {item.name} ({item.countWithChildren})
              </label>
            </div>
          ))
      )}

      <h4>Fylker</h4>
      {fylker.map((item, i) => (
        <div>
          <input key={i} type='checkbox' value={item.navn}></input>
          <label>{item.navn}</label>
        </div>
      ))}
    </div>
  )
}

export default Filter
