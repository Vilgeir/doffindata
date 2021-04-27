import React, { useContext, useEffect, useState } from 'react'
import structure from '../data/withMainCategories'
import { Link } from 'react-router-dom'
import { StateContext } from '../context/StateProvider'

function SavedModal() {
  const { checkedCategories, setcheckedCategories } = useContext(StateContext)
  const [saved, setSaved] = useState([])
  let arr = Object.keys(localStorage).filter(
    (elem) => elem !== 'ally-supports-cache' && elem !== 'lastSearch'
  )
  useEffect(() => {
    arr.map((elem) =>
      setSaved((prevstate) => [
        ...prevstate,
        { [elem]: JSON.parse(localStorage.getItem(elem)) },
      ])
    )
  }, [])

  const handleClick = (i) => {
    Object.values(i).map(
      (item) =>
        item.checkedCategories && setcheckedCategories(item.checkedCategories)
    )
  }
  return (
    <div className='saved-modal'>
      <h4>Mine lagrede søk</h4>
      {saved.map((i, index) => (
        <Link
          to={
            '/' + Object.values(i)[0].category + '/' + Object.values(i)[0].cpv
          }
          key={index}
          className='saved-modal-item'
          onClick={() => handleClick(i)}
        >
          {Object.keys(i)[0]}
        </Link>
      ))}
    </div>
  )
}

export default SavedModal
