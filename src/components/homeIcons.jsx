import React, { useEffect, useState } from 'react'
import { homeIcons } from '../helpers/functions'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const HomeIcons = ({ i }) => {
  return (
    <Link className='main-boxes' to={i.main}>
      <div style={homeIcons(i.main).style} className='homeicon-container'>
        <FontAwesomeIcon id='homeicon-icon' icon={homeIcons(i.main).icon} />
      </div>
      <div className='main-box'>
        <div className='main-box-text'>
          <p className='main-boxes-title'>{i.main}</p>
          {/* <p className='main-boxes-cpv'>CPV {i.children[0].code}</p> */}
        </div>
        <div className='main-boxes-arrow'>
          <FontAwesomeIcon icon={faArrowRight} color='#4DBFAC' />
        </div>
      </div>
    </Link>
  )
}
export default HomeIcons
