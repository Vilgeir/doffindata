import React, { useEffect, useState } from 'react'
import structure from '../data/withNorwegianNames'

function SaveSearch({
  setSaveSearch,
  checkedCategories,
  category,
  categorycpv,
}) {
  const [nameSearch, setNameSearch] = useState()
  const handleChange = (e) => {
    setNameSearch(e.target.value)
  }

  let obj = {
    checkedCategories,
    category: category,
    cpv: categorycpv,
  }
  // console.log(obj)
  // console.log(category + categorycpv)
  const handleClick = () => {
    window.localStorage.setItem(nameSearch, JSON.stringify(obj))
    setSaveSearch(false)
  }

  return (
    <div className='modal'>
      <div className='modal-elements'>
        <h1 className=''>Lagre søk</h1>
        <h2>Filter</h2>
        {structure.map((item) => {
          item.main === category &&
            item.children.map(
              (it) => (it.code === categorycpv ? <h3>{it.name}</h3> : '')
              // (it) => it.code === categorycpv && <h3>{it.name}</h3>
            )
        })}

        <p>{category}</p>

        <h2>Navngi søk *</h2>
        <input
          type='text'
          placeholder='Navngi søk'
          onChange={handleChange}
        ></input>
        <div>
          <input type='checkbox' defaultChecked></input>
          <label>Ja, jeg ønsker å motta e-post med varsel om nye anbud</label>
        </div>
        <div>
          <button onClick={handleClick}>Lagre søk</button>
          <button onClick={() => setSaveSearch(false)}>Avbryt</button>
        </div>
      </div>
    </div>
  )
}

export default SaveSearch
