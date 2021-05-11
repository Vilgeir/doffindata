import React from 'react'
import { homeIcons, toLowerCaseAndReplace } from '../helpers/functions'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const HomeIcons = ({ i }) => {
  return (
    <Link className='main-boxes' to={toLowerCaseAndReplace(i)}>
      <div style={homeIcons(i).style} className='homeicon-container'>
        <FontAwesomeIcon id='homeicon-icon' icon={homeIcons(i).icon} />
      </div>
      <div className='main-box'>
        <div className='main-box-text'>
          <p className='main-boxes-title'>{i}</p>
        </div>
        <div className='main-boxes-arrow'>
          <FontAwesomeIcon icon={faArrowRight} color='#4DBFAC' />
        </div>
      </div>
    </Link>
  )
}
export default HomeIcons
