import React, { useContext, useEffect } from 'react'
import fylker from '../../data/fylker'
import {
  faArrowLeft,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import SavedModal from './SavedModal'
import AlgoliaSearch from '../AlgoliaSearch'
import { StateContext } from '../../context/StateProvider'
import { capitalizeAndReplace } from '../../helpers/functions'
import { useToggle } from '../../hooks/useToggle'
import Fylker from './Fylker'
import Kategorier from './Kategorier'

function Filter({
  category,
  details,
  checked,
  setChecked,
  setSaveSearch,
  setOpenModal,
  openModal,
  fylkerKommuner,
}) {
  const {
    checkedCategories,
    setcheckedCategories,
    checkedFylker,
    setCheckedFylker,
    kommuner,
    setKommuner,
  } = useContext(StateContext)
  const [openCategory, setOpenCategory] = useToggle(true)
  const [openCounty, setOpenCounty] = useToggle(true)

  const removeFilters = () => {
    setcheckedCategories([])
    setChecked([])
    setKommuner([])
    setCheckedFylker([])
  }

  // hæsh bængs
  // sorter etter pris, frister osv
  // fikse fontene i cards. gråfarge kanksje?
  // Kjøper i grå

  useEffect(() => {
    let flereFylker = kommuner.flat().map((x) => x.Fylke)
    setCheckedFylker([...new Set(flereFylker)])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kommuner])

  return (
    <div className='filter-container'>
      <div className='save-search'>
        <button className='button' onClick={() => setSaveSearch(true)}>
          Lagre søk
        </button>
        <div onClick={setOpenModal.toggle}>
          <p>
            Du har{' '}
            <b>
              {localStorage.length === 0
                ? localStorage.length
                : localStorage.length - 1}{' '}
              {localStorage.length === 2 ? 'lagret' : 'lagrede'} søk
            </b>{' '}
            <FontAwesomeIcon icon={openModal ? faChevronUp : faChevronDown} />
          </p>{' '}
        </div>
      </div>
      {openModal && <SavedModal />}
      <div className='search-filter'>
        <AlgoliaSearch />
      </div>
      <div className='filter-navigation'>
        <Link className='go-back' to={'/' + category}>
          <FontAwesomeIcon icon={faArrowLeft} />{' '}
          {capitalizeAndReplace(category)}
        </Link>
        {(checkedCategories.length > 0 || checkedFylker.length > 0) && (
          <button className='cpv-button' onClick={removeFilters}>
            Nullstill filter
          </button>
        )}
      </div>

      <Kategorier
        setOpenCategory={setOpenCategory}
        openCategory={openCategory}
        category={category}
        details={details}
        checked={checked}
        setChecked={setChecked}
      />

      <Fylker
        setOpenCounty={setOpenCounty}
        openCounty={openCounty}
        fylker={fylker}
        fylkerKommuner={fylkerKommuner}
      />
    </div>
  )
}

export default Filter
