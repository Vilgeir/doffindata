import React, { useContext, useEffect, useState } from 'react'
import structure from '../data/withNorwegianNames'
import fylker from '../data/fylker'

import {
  faArrowLeft,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Checkboxes from './Checkboxes'
import { Link } from 'react-router-dom'
import SavedModal from '../components/SavedModal'
import AlgoliaSearch from '../components/AlgoliaSearch'
import { StateContext } from '../context/StateProvider'
import { capitalizeAndReplace } from '../helpers/functions'

function Filter({
  category,
  details,
  subcategory,
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
  const [openCategory, setOpenCategory] = useState(true)
  const [openCounty, setOpenCounty] = useState(true)

  const handleClick = (e) => {
    checkedCategories.map(
      (i) =>
        Object.keys(i).join() === e.target.value &&
        setcheckedCategories((prevstate) => [
          ...prevstate.filter(
            (item) => Object.keys(item).join() != [e.target.value]
          ),
        ])
    )
    e.target.checked === true &&
      setcheckedCategories((prevState) => [
        ...prevState,
        { [e.target.value]: [] },
      ])
    handleCheck(e)
  }

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

  const handleCheck = (e) => {
    setChecked((prevState) =>
      prevState.includes(e.target.value)
        ? [...prevState.filter((i) => i !== e.target.value)]
        : [...prevState, e.target.value]
    )
  }

  useEffect(() => {
    let flereFylker = kommuner.flat().map((x) => x.Fylke)
    setCheckedFylker([...new Set(flereFylker)])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kommuner])

  const handleClickFylker = (e) => {
    if (
      kommuner
        .flat()
        .map((kom) => kom.Fylke)
        .includes(e.target.value)
    ) {
      setKommuner((prev) => [
        ...prev.flat().filter((p) => p.Fylke !== e.target.value),
      ])
    } else {
      setKommuner((prev) => [
        ...prev,
        fylkerKommuner.filter((i) => i.Fylke === e.target.value),
      ])
    }
  }

  const handleChange = (e) => {
    e.target.checked === false &&
      setcheckedCategories((prevState) =>
        prevState.map((i) =>
          Object.keys(i).join().substring(0, 3) ===
          e.target.value.substring(0, 3)
            ? {
                [Object.keys(i).join()]: [
                  ...Object.values(i)[0].filter(
                    (item) => item !== e.target.value
                  ),
                ],
              }
            : i
        )
      )

    e.target.checked === true &&
      setcheckedCategories((prevState) =>
        prevState.map((i) =>
          Object.keys(i).join().substring(0, 3) ===
          e.target.value.substring(0, 3)
            ? {
                [Object.keys(i).join()]: [
                  ...Object.values(i)[0],
                  e.target.value,
                ],
              }
            : i
        )
      )
    handleCheck(e)
  }

  return (
    <div className='filter-container'>
      <div className='save-search'>
        <button className='button' onClick={() => setSaveSearch(true)}>
          Lagre søk
        </button>
        <div onClick={() => setOpenModal((prev) => !prev)}>
          <p>
            Du har{' '}
            <b>
              {localStorage.length === 0
                ? localStorage.length
                : localStorage.length - 1}{' '}
              {localStorage.length === 2 ? 'lagret' : 'lagrede'} søk
            </b>{' '}
            <FontAwesomeIcon icon={faChevronDown} />
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

      <div
        onClick={() => setOpenCategory((prev) => !prev)}
        className='filter-header'
      >
        <h4>Kategorier </h4>
        {openCategory ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      {openCategory && (
        <div className='check-container'>
          {structure.map(
            (it) =>
              it.main === capitalizeAndReplace(category) &&
              it.children.map(
                (i) =>
                  i.code === details &&
                  i.children.map((item, i) => (
                    <div className='checkboxes' key={i}>
                      {subcategory && subcategory === item.code ? (
                        <div>
                          <div>
                            <Checkboxes
                              value={item.code}
                              onChange={handleClick}
                              className={'checkbox'}
                              checked={
                                checked.includes(item.code) ? true : false
                              }
                            />

                            <label className='check-label'>
                              {item.name} ({item.countWithChildren})
                            </label>
                          </div>

                          {checkedCategories.map(
                            (check) =>
                              Object.keys(check).includes(item.code) &&
                              item.children.map((it, index) => (
                                <div className='subcheckboxes' key={index}>
                                  <Checkboxes
                                    value={it.code}
                                    onChange={handleChange}
                                    className={'checkbox'}
                                    checked={
                                      checked.includes(it.code) ? true : false
                                    }
                                  />
                                  <label className='check-label'>
                                    {it.name} ({it.countWithChildren})
                                  </label>
                                </div>
                              ))
                          )}
                        </div>
                      ) : (
                        <>
                          <Checkboxes
                            value={item.code}
                            onChange={handleClick}
                            className={'checkbox'}
                            // handleCheck={handleCheck}
                            key={i}
                            checked={checked.includes(item.code) ? true : false}
                          />
                          <label className='check-label'>
                            {item.name} ({item.countWithChildren})
                          </label>
                          {checkedCategories.map(
                            (check) =>
                              Object.keys(check).includes(item.code) &&
                              item.children.map((it, index) => (
                                <div className='subcheckboxes' key={index}>
                                  <Checkboxes
                                    value={it.code}
                                    onChange={handleChange}
                                    className={'checkbox'}
                                    // handleCheck={handleCheck}
                                    checked={
                                      checked.includes(it.code) ? true : false
                                    }
                                  />
                                  <label className='check-label'>
                                    {it.name} ({it.countWithChildren})
                                  </label>
                                </div>
                              ))
                          )}
                        </>
                      )}
                    </div>
                  ))
              )
          )}
        </div>
      )}

      <div
        onClick={() => setOpenCounty((prev) => !prev)}
        className='filter-header'
      >
        <h4>Fylker </h4>
        {openCounty ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      {openCounty &&
        fylker.map((item, i) => (
          <div className='checkboxes' key={i}>
            <input
              type='checkbox'
              onChange={handleClickFylker}
              value={item.navn}
              checked={checkedFylker.includes(item.navn) ? true : false}
            ></input>
            <label>{item.navn}</label>
          </div>
        ))}
    </div>
  )
}

export default Filter
