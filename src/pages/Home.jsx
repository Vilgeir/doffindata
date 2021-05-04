import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import structure from '../data/withNorwegianNames'
import '../index.css'
import SavedSearch from '../components/SavedSearch'
import AlgoliaSearch from '../components/AlgoliaSearch'
import HomeIcons from '../components/homeIcons'
import { getData } from '../helpers/handleData'
import { StateContext } from '../context/StateProvider'

function Home(props) {
  const {
    checkedCategories,
    setcheckedCategories,
    setCheckedFylker,
    setKommuner,
  } = useContext(StateContext)

  const [input, setInput] = useState('')
  const [searchData, setSearchData] = useState()
  const [searchDataDefault, setSearchDataDefault] = useState(
    structure.map((i) => i.main)
  )

  const [serverData, setServerData] = useState([])

  useEffect(() => {
    setcheckedCategories([])
    setCheckedFylker([])
    setKommuner([])
  }, [])
  //children.map((it, index) => it.code)  .flat()

  // console.log(searchDataDefault);

  let arrrray = []
  let mainCpv = ''

  useEffect(() => {
    getData('F02_2014', 'cpv', mainCpv, setServerData)
  }, [])

  Object.entries(serverData).map((i) => arrrray.push(i))

  //console.log(serverData)

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
      <div className='breadcrums'>
        <Link to={'/'}>Hjem</Link>
      </div>
      <div className='home-container'>
        <div>
          <div className='home-head'>
            <div>
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
