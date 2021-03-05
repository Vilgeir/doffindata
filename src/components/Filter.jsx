import React, { useEffect, useState } from 'react'
import structure from '../data/count.structure'

function Filter() {
  //   const [checked, setChecked] = useState({ cpv: '', checked: '' })
  const [checked, setChecked] = useState(
    structure.map((item) => ({ cpv: item.code, checked: false }))
  )

  const handleChange = (e) => {
    setChecked({ cpv: e.target.value, checked: e.target.checked })
  }

  return (
    <div>
      {structure.map((item, i) => (
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
      ))}
    </div>
  )
}

export default Filter
