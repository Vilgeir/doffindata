import React, { useState, useContext } from 'react'
import { StateContext } from '../context/StateProvider'
import jsonData from '../data/newjson.json'
import { capitalizeAndReplace } from '../helpers/functions'

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

  const getName = (cpvnumber) => {
    return jsonData
      .map((i) => i.id === cpvnumber && i.label)
      .filter((it) => it !== false)
      .join()
      .substring(9)
  }

  return (
    <div className='modal'>
      <div className='modal-elements'>
        <h1 className=''>Lagre søk</h1>
        <h2>Filter</h2>
        {capitalizeAndReplace(category)} - {getName(categorycpv)}
        {checked.map((cpv) => ' - ' + getName(cpv))}{' '}
        {checkedFylker.length > 0 ? ' - ' : ''}
        {checkedFylker.map((fylke) => fylke)}
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
