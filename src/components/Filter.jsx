import React, { useEffect, useState } from 'react'
import structure from '../data/count.structure'

function Filter() {
  const handleChange = (e) => {
    e.target.cheked === true && viewKat()
  }

  const viewKat = () =>
    structure.map((i) => i.children.map((first) => <p>{first.name}</p>))

  return (
    <div>
      {structure.map((item, i) => (
        <div>
          <input
            type='checkbox'
            value={item.code}
            onClick={handleChange}
          ></input>
          <label>
            {item.name} ({item.count})
          </label>
          {viewKat}
        </div>
      ))}
    </div>
  )
}

export default Filter
