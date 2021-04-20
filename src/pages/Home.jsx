import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import structure from '../data/withMainCategories'
import '../index.css'
import SavedSearch from '../components/SavedSearch'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <div className='home-container'>
        <div className='head'>
          <div>
            <input
              type='text'
              className='searchbar'
              placeholder='Søk etter anbud eller CPV koder'
            />
          </div>
          <h3 className='headline'>Alle kategorier</h3>
        </div>
      </div>

      <div class='content-container'>
        <div className='box-container'>
          {structure.map((i, index) => (
            <Link className='main-boxes' to={i.main} key={index}>
              {i.main}
            </Link>
          ))}
        </div>
        <SavedSearch />
      </div>
    </div>
  )
}

export default Home
