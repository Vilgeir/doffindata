import React, { useEffect, useState } from 'react'
import structure from '../data/withMainCategories'

function CheckedValues(props) {
  let structs = props.structure
    .map(
      (i) =>
        i.main === props.category &&
        i.children.map(
          (it) =>
            it.code === props.details && it.children.map((item) => item.name)
        )
    )
    .filter((i) => i)
  let one = structs.filter((i) => i !== false)

  console.log(one)
  const handleChecked = (e) => {
    const struct = structs[e.target.dataset.id]
    let newCheckedValues = props.checkedValues.filter((item) => item !== struct)
    if (e.target.checked) newCheckedValues.push(struct)
    props.setCheckedValues(newCheckedValues)
  }
  return (
    <div>
      {props.structure.map(
        (it) =>
          it.main === props.category &&
          it.children.map(
            (i) =>
              i.code === props.details &&
              i.children.map((item, id) => (
                <>
                  <label key={id}>
                    <input
                      type='checkbox'
                      data-id={id}
                      onClick={handleChecked}
                    />
                    {item.name}
                  </label>
                </>
              ))
          )
      )}

      {/* <h1>{props..children}</h1> */}
    </div>
  )
}

export default CheckedValues
