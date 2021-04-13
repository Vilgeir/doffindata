import React from 'react'
import { Link } from 'react-router-dom'
import structure from '../data/withMainCategories'
import '../index.css'

function Home() {
  return (
    <div className='home-container'>
      <div className='head'>
        <h3 className='headline'>Velg hovedkategori</h3>
        <div>
          <input
            type='text'
            className='searchbar'
            placeholder='Søk etter anbud eller CPV koder'
          />
        </div>
      </div>

      <div className='box-container'>
        {structure.map((i, index) => (
          <Link className='main-boxes' to={i.main} key={index}>
            {i.main}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
