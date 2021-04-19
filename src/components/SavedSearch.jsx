import React, { useEffect, useState } from 'react'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SavedSearch() {
  const [saved, setSaved] = useState([])
  const [openSaved, setOpenSaved] = useState(false)

  useEffect(() => {
    setSaved(JSON.parse(JSON.stringify(localStorage)))
  }, [])

  console.log(Object.values(saved))
  return (
    <div className='home-buttons'>
      <button className='home-button'>
        Siste søk <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <button
        className='home-button'
        onClick={() => setOpenSaved((prevState) => !prevState)}
      >
        Lagrede søk <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {openSaved && saved.map((i) => i)}
    </div>
  )
}

export default SavedSearch
