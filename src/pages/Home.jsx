import React from 'react'
import structure from '../data/withNorwegianNames'
import '../index.css'
import SavedSearch from '../components/SavedSearch'
import AlgoliaSearch from '../components/AlgoliaSearch'
import HomeIcons from '../components/homeIcons'
import { Breadcrums } from '../components/Breadcrums'

function Home() {
  let sort = structure.map((i) => i.main).sort()

  return (
    <div className='home-main-container'>
      <div>
        <Breadcrums />
        <div className='home-container'>
          <h2>
            Velkommen til Tendre! Tendre er en tjeneste for offentlige
            anskaffelser.
          </h2>
          <div className='home-head'>
            <div className='search-home'>
              <AlgoliaSearch />
            </div>
          </div>
          <h3 className='headline'>Alle kategorier</h3>
        </div>
        <div className='box-container'>
          {sort.map((i, index) => <HomeIcons i={i} key={index} />).sort()}
        </div>
      </div>
      <div className='home-saved-search'>
        <SavedSearch />
      </div>
    </div>
  )
}

export default Home
