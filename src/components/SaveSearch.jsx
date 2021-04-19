import React, { useEffect, useState } from 'react'

function SaveSearch({ setSaveSearch, checkedCategories }) {
  const [nameSearch, setNameSearch] = useState()
  const handleChange = (e) => {
    setNameSearch(e.target.value)
  }

  const handleClick = () => {
    window.localStorage.setItem(nameSearch, JSON.stringify(checkedCategories))
    setSaveSearch(false)
  }

  return (
    <div className='modal'>
      <div className='modal-elements'>
        <h1 className=''>Lagre søk</h1>
        <h2>Filter</h2>
        <p>filter navn</p>

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
