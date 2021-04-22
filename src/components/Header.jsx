import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <nav className="navbar">
          <div>
            <img className="logo" src={ require("../iconer/logo.svg").default } alt="logo"/>
          </div>
      </nav>
    </div>
  )
}

export default Header