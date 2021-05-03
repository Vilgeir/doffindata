import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import structure from '../data/withMainCategories'
import '../index.css'
import SavedSearch from '../components/SavedSearch'
import Footer from '../components/Footer'
import Search from '../components/Search'
import SearchData from '../components/SearchData'
import AlgoliaSearch from '../components/AlgoliaSearch'
import { homeIcons } from '../helpers/functions'
import HomeIcons from '../components/homeIcons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getData } from '../helpers/handleData'

function Home(props) {
  const [input, setInput] = useState('')
  const [searchData, setSearchData] = useState()
  const [searchDataDefault, setSearchDataDefault] = useState(
    structure.map((i) => i.main)
  )

  const [serverData, setServerData] = useState([])

  let arrrray = []
  let mainCpv = ''

  useEffect(() => {
    getData('F02_2014', 'cpv', mainCpv, setServerData)
  }, [])

  Object.entries(serverData).map((i) => arrrray.push(i))

  console.log(serverData)

  const updateInput = (input) => {
    const filtered = searchDataDefault.filter((main) => {
      if (isNaN()) {
        return main.toLowerCase().includes(input.toLowerCase())
      }
      return main
    })
    if (input === '') return setInput(input), setSearchData([])
    return setInput(input), setSearchData(filtered)
  }

  return (
    <div className='errthing'>
      <div className='home-container'>
        <div>
          <div className='home-head'>
            <div className='aSearch'>
              <AlgoliaSearch />
            </div>
            <SavedSearch />
          </div>
          <h3 className='headline'>Alle kategorier</h3>
        </div>
      </div>
      <div></div>
      <div class='content-container'>
        <div className='box-container'>
          {structure.map((i, index) => (
            <HomeIcons i={i} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
