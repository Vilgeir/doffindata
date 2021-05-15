import React, { useEffect, useContext } from 'react'
import structure from '../data/withNorwegianNames'
import { useParams } from 'react-router-dom'
import { StateContext } from '../context/StateProvider'
import { homeIcons } from '../helpers/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CategoryCards from '../components/CategoryCards'
import AlgoliaSearch from '../components/AlgoliaSearch'
import { capitalizeAndReplace } from '../helpers/functions'
import { Breadcrums } from '../components/Breadcrums'

function Categories() {
  const { setcheckedCategories, setCheckedFylker } = useContext(StateContext)
  const { category } = useParams()

  useEffect(() => {
    setcheckedCategories([])
    setCheckedFylker([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(category)
  return (
    <>
      <Breadcrums category={category} />
      <div className='home-container'>
        <div className='head'>
          <div className='search-categories'>
            <AlgoliaSearch />
            <div className='categories-head'>
              <div
                className='homeicon-container'
                style={homeIcons(capitalizeAndReplace(category)).style}
              >
                <FontAwesomeIcon
                  id='homeicon-icon'
                  icon={homeIcons(capitalizeAndReplace(category)).icon}
                />
              </div>
              <h3>{capitalizeAndReplace(category)}</h3>
            </div>
          </div>
        </div>
        <div className='categories'>
          {structure.map(
            (i) =>
              i.main === capitalizeAndReplace(category) &&
              i.children.map((item, idx) => (
                <CategoryCards item={item} key={idx} category={category} />
              ))
          )}
        </div>
      </div>
    </>
  )
}

export default Categories
