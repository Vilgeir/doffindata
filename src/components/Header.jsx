import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <nav className='navbar'>
        <div>
          <Link to={'/'}>
            <img
              className='logo'
              src={require('../iconer/logo.svg').default}
              alt='logo'
            />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
