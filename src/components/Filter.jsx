import React, { useContext, useEffect } from 'react'
import fylker from '../data/fylker'

import {
  faArrowLeft,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import SavedModal from '../components/SavedModal'
import AlgoliaSearch from '../components/AlgoliaSearch'
import { StateContext } from '../context/StateProvider'
import { capitalizeAndReplace } from '../helpers/functions'
import { useToggle } from '../hooks/useToggle'
import FylkerCheckbox from './FylkerCheckbox'
import KategorierCheckbox from './KategorierCheckbox'

function Filter({
  category,
  details,
  removeChecked,
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

  useEffect(() => {
    removeChecked.length === 8 &&
      setChecked((prevState) => {
        if (prevState.includes(removeChecked)) {
          if (removeChecked.substring(3, 8).includes('00000')) {
            return [
              ...prevState.filter(
                (i) => i.substring(0, 3) !== removeChecked.substring(0, 3)
              ),
            ]
          }
          return [...prevState.filter((i) => i !== removeChecked)]
        } else {
          return [...prevState, removeChecked]
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeChecked])

  const removeFilters = () => {
    setcheckedCategories([])
    setChecked([])
    setKommuner([])
    setCheckedFylker([])
  }

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

      <KategorierCheckbox
        setOpenCategory={setOpenCategory}
        openCategory={openCategory}
        category={category}
        details={details}
        checked={checked}
        setChecked={setChecked}
      />

      <FylkerCheckbox
        setOpenCounty={setOpenCounty}
        openCounty={openCounty}
        fylker={fylker}
        fylkerKommuner={fylkerKommuner}
      />
    </div>
  )
}

export default Filter
