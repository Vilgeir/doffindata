import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const Breadcrums = ({ category, categorycpv, procurement }) => {
  return (
    <div className='breadcrums'>
      <Link to={'/'}>Hjem</Link>
      {category && (
        <>
          <FontAwesomeIcon icon={faChevronRight} />
          <Link to={'/' + category}>Kategori</Link>
        </>
      )}
      {categorycpv && (
        <>
          <FontAwesomeIcon icon={faChevronRight} />
          <Link to={'/' + category + '/' + categorycpv}>Resultat</Link>
        </>
      )}
      {procurement && (
        <>
          <FontAwesomeIcon icon={faChevronRight} />
          <Link to={'/' + category + '/' + categorycpv + '/' + procurement}>
            Anbud
          </Link>
        </>
      )}
    </div>
  )
}
