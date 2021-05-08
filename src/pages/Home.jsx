import React from 'react'
import structure from '../data/withNorwegianNames'
import '../index.css'
import SavedSearch from '../components/SavedSearch'
import AlgoliaSearch from '../components/AlgoliaSearch'
import HomeIcons from '../components/homeIcons'
import { Breadcrums } from '../components/Breadcrums'

function Home() {
  return (
    <div className='home-main-container'>
      <div>
        <Breadcrums />
        <div className='home-container'>
          <div className='home-head'>
            <div className='search-home'>
              <AlgoliaSearch />
            </div>
          </div>
          <h3 className='headline'>Alle kategorier</h3>
        </div>
        <div className='box-container'>
          {structure.map((i, index) => (
            <HomeIcons i={i} key={index} />
          ))}
        </div>
      </div>
      <div className='home-saved-search'>
        <SavedSearch />
      </div>
    </div>
  )
}

export default Home
