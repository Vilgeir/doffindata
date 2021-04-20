import React, { useEffect, useState } from 'react'
import structure from '../data/withMainCategories'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { ScrollArea } from '@material-ui/data-grid'

function SavedSearch() {
  const [saved, setSaved] = useState([])
  const [openSaved, setOpenSaved] = useState(false)

  let category = structure.map((i) => i.main)
  let arr = Object.keys(localStorage).map((elem) => elem)

  useEffect(() => {
    arr.map((elem) =>
      setSaved((prevstate) => [
        ...prevstate,
        { [elem]: JSON.parse(localStorage.getItem(elem)) },
      ])
    )
  }, [])

  return (
    <div className='home-buttons'>
      <button className='home-button'>
        Siste søk <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <button
        className='home-button'
        onClick={() => setOpenSaved((prev) => !prev)}
      >
        Lagrede søk <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {openSaved &&
        saved.map((i, index) => (
          <Link
            to={
              '/' + Object.values(i)[0].category + '/' + Object.values(i)[0].cpv
            }
            key={index}
          >
            {Object.keys(i)[0]}
          </Link>
        ))}
    </div>
  )
}

export default SavedSearch
