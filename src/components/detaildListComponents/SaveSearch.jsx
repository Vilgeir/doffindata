import React, { useState, useContext } from 'react'
import { StateContext } from '../../context/StateProvider'
import { capitalizeAndReplace, getCpvName } from '../../helpers/functions'

function SaveSearch({
  setSaveSearch,
  checkedCategories,
  category,
  categorycpv,
  checkedFylker,
  checked,
}) {
  const { kommuner } = useContext(StateContext)
  const [nameSearch, setNameSearch] = useState()
  const handleChange = (e) => {
    setNameSearch(e.target.value)
  }

  let obj = {
    checkedCategories,
    category: category,
    cpv: categorycpv,
    fylker: checkedFylker,
    kommuner: kommuner,
  }

  const handleClick = () => {
    window.localStorage.setItem(nameSearch, JSON.stringify(obj))
    setSaveSearch(false)
  }

  return (
    <div className='modal'>
      <div className='modal-elements'>
        <h1 className=''>Lagre søk</h1>
        <div>
          <h2>Filter</h2>
          {capitalizeAndReplace(category)} - {getCpvName(categorycpv)}
          {checked.map((cpv) => ' - ' + getCpvName(cpv))}{' '}
          {checkedFylker.map((fylke) => ' - ' + fylke)}
        </div>
        <div>
          <h2>Navngi søk *</h2>
          <input
            type='text'
            placeholder='Navngi søk'
            onChange={handleChange}
          ></input>
        </div>
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
