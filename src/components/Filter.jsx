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

      {structure.map(
        (i) =>
          i.code === details &&
          i.children.map((item, i) => (
            <div className='checkboxes'>
              <input key={i} type='checkbox' value={item.code}></input>
              <label>
                {item.name} ({item.countWithChildren})
              </label>
            </div>
          ))
      )}

      <h4>Fylker</h4>
      {fylker.map((item, i) => (
        <div className='checkboxes'>
          <input key={i} type='checkbox' value={item.navn}></input>
          <label>{item.navn}</label>
        </div>
      ))}

      <h4>Kunngjøringsdato</h4>
      <p>Kalender</p>

      <h4>Tilbudsfrist</h4>
      <p>Kalender</p>

      <h4>Publikasjonstype</h4>
      <div className='checkboxes'>
        <input type='checkbox' value='nasjonal'></input>
        <label>Nasjonal</label>
        {/* <span className='checkmark'></span> */}
      </div>
      <div className='checkboxes'>
        <input type='checkbox' value='europeisk'></input>
        <label>Europeisk</label>
        {/* <span className='checkmark'></span> */}
      </div>
      <div className='checkboxes'>
        {/* <span className='checkmark'></span> */}
        <input type='checkbox' value='marketcunsulting'></input>
        <label>Market Cunsulting</label>
      </div>
    </div>
  )
}

export default Filter
