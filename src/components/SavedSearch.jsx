import React, { useContext, useEffect, useState } from 'react'
import structure from '../data/withMainCategories'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { ScrollArea } from '@material-ui/data-grid'
import { StateContext } from '../context/StateProvider'

function SavedSearch() {
  const [last, setLast] = useState([])
  const [openLast, setOpenLast] = useState(false)
  const [saved, setSaved] = useState([])
  const [openSaved, setOpenSaved] = useState(false)
  const { checkedCategories, setcheckedCategories } = useContext(StateContext)

  let category = structure.map((i) => i.main)
  let arr = Object.keys(localStorage).filter(
    (elem) => elem !== 'ally-supports-cache' && elem !== 'lastSearch'
  )

  console.log(checkedCategories)

  useEffect(() => {
    arr.map((elem) =>
      setSaved((prevstate) => [
        ...prevstate,
        { [elem]: JSON.parse(localStorage.getItem(elem)) },
      ])
    )
  }, [])

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('lastSearch'))

    let arr = [
      data.category,
      data.cpv,
      Object.values(data.checkedCategories).map((i) =>
        Object.entries(i).flat().join(' - ')
      ),
    ]
    console.log(data)
    console.log(
      Object.values(data.checkedCategories).map((i) =>
        Object.entries(i).flat().join(' - ')
      )
    )

    setLast(arr)
  }, [])

  const handleClick = (i) => {
    Object.values(i).map(
      (item) =>
        item.checkedCategories && setcheckedCategories(item.checkedCategories)
    )
  }

  // console.log(Object.values(last).map())
  // .flat())

  return (
    <div className='home-buttons'>
      <button
        className='home-button'
        onClick={() => setOpenLast((prev) => !prev)}
      >
        Siste søk <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {openLast && Object.values(last).flat().join(' - ')}
      <button
        className='home-button'
        onClick={() => setOpenSaved((prev) => !prev)}
      >
        Lagrede søk <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {openSaved &&
        saved.map((i, index) => (
          <Link
            to={
              '/' + Object.values(i)[0].category + '/' + Object.values(i)[0].cpv
            }
            key={index}
            onClick={() => handleClick(i)}
          >
            {Object.keys(i)[0]}
          </Link>
        ))}
    </div>
  )
}

export default SavedSearch
