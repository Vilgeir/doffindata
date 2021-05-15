import React, { useContext, useEffect, useState } from 'react'
import {
  faChevronDown,
  faChevronUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { StateContext } from '../context/StateProvider'
import { getCpvName, capitalizeAndReplace } from '../helpers/functions'
import { useToggle } from '../hooks/useToggle'

function SavedSearch() {
  const [last, setLast] = useState([])
  const [openLast, setOpenLast] = useToggle(false)
  const [saved, setSaved] = useState([])
  const [openSaved, setOpenSaved] = useToggle(false)
  const { setcheckedCategories, setCheckedFylker, setKommuner } = useContext(
    StateContext
  )

  const getSaved = () => {
    let arr = Object.keys(localStorage).filter(
      (elem) => elem !== 'ally-supports-cache' && elem !== 'lastSearch'
    )
    let savedArr = []
    arr.map((elem) =>
      savedArr.push({ [elem]: JSON.parse(localStorage.getItem(elem)) })
    )
    setSaved(savedArr)
  }
  useEffect(() => {
    getSaved()
  }, [])

  const getLast = () => {
    let data = JSON.parse(localStorage.getItem('lastSearch'))
    let arr = []

    data &&
      (arr = [
        data.category,
        data.cpv,
        Object.values(data.checkedCategories).map((i) =>
          Object.entries(i).flat().join(' - ')
        ),
      ])

    setLast(arr)
  }
  useEffect(() => {
    getLast()
  }, [])

  const handleClick = (i) => {
    Object.values(i).map(
      (item) =>
        item.checkedCategories && setcheckedCategories(item.checkedCategories)
    )
    Object.values(i).map((item) => item.fylker && setCheckedFylker(item.fylker))
    Object.values(i).map((item) => item.kommuner && setKommuner(item.kommuner))
  }

  const handleDelete = (i) => {
    localStorage.removeItem(Object.keys(i))
    getSaved()
  }

  return (
    <div className='home-buttons'>
      <button className='home-button' onClick={setOpenLast.toggle}>
        Siste søk{' '}
        {openLast ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>
      {openLast && (
        <Link
          to={'/' + Object.values(last)[0] + '/' + Object.values(last)[1]}
          onClick={() => handleClick(last)}
        >
          {last
            .flat()
            .join(' ')
            .split(' ')
            .filter((i) => i !== '-' && i !== '')
            .map((i, index) =>
              getCpvName(i) !== ''
                ? ' - ' + getCpvName(i)
                : index !== 0
                ? ' - ' + capitalizeAndReplace(i)
                : capitalizeAndReplace(i)
            )}
        </Link>
      )}
      <button className='home-button' onClick={setOpenSaved.toggle}>
        Lagrede søk{' '}
        {openSaved ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>
      {openSaved &&
        saved.map((i, index) => (
          <div className='saved-searches' key={index}>
            <Link
              to={
                '/' +
                Object.values(i)[0].category +
                '/' +
                Object.values(i)[0].cpv
              }
              key={index}
              onClick={() => handleClick(i)}
            >
              {Object.keys(i)[0]}
            </Link>
            <FontAwesomeIcon icon={faTimes} onClick={() => handleDelete(i)} />
          </div>
        ))}
    </div>
  )
}

export default SavedSearch
