import React from 'react'
import { Link } from 'react-router-dom'
import structure from '../data/withMainCategories'
import '../index.css'

function Home() {
  return (
    <div className='home-container'>
      <div>
        <input type='text' placeholder='Søk etter anbud eller CPV koder..' />
      </div>
      <h2>Velg hovedkategori</h2>
      <div className='box-container'>
        {structure.map((i) => (
          <Link className='main-boxes' to={i.main}>
            {i.main}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
