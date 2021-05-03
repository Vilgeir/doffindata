import React, { useEffect, useState } from 'react'
import structure from '../data/withMainCategories'
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

function Filter({
  category,
  details,
  subcategory,
  checkedCategories,
  setcheckedCategories,
  removeChecked,
  checked,
  setChecked,
  setSaveSearch,
  setOpenModal,
  openModal,
  fylkerKommuner,
  kommuner,
  setKommuner,
}) {
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
  }, [removeChecked])

  const removeFilters = () => {
    setcheckedCategories([])
    setChecked([])
    setKommuner([])
  }

  const handleCheck = (e) => {
    setChecked((prevState) =>
      prevState.includes(e.target.value)
        ? [...prevState.filter((i) => i !== e.target.value)]
        : [...prevState, e.target.value]
    )
  }

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

  const goBack = () => {
    window.history.back()
  }

  // localStorage.clear()
  return (
    <div>
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
      <div>
        <input
          type='text'
          className='searchbar'
          id='detail-search'
          placeholder='Søk i anbud'
        />
      </div>
      <div className='filter-navigation'>
        <Link className='go-back' onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} /> {category}
        </Link>
        {checkedCategories.length > 0 && (
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
              it.main === category &&
              it.children.map(
                (i) =>
                  i.code === details &&
                  i.children.map((item, i) => (
                    <div className='checkboxes'>
                      {subcategory && subcategory === item.code ? (
                        <div>
                          <div>
                            <Checkboxes
                              key={i}
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
                                <div key={it} className='subcheckboxes'>
                                  <Checkboxes
                                    key={index}
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
                                <div className='subcheckboxes'>
                                  <Checkboxes
                                    key={index}
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

      {/*<div className='black-line' />*/}

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
          <div className='checkboxes'>
            <input
              key={i}
              type='checkbox'
              onClick={handleClickFylker}
              value={item.navn}
            ></input>
            <label>{item.navn}</label>
          </div>
        ))}
      {/*<div className='black-line' />*/}
    </div>
  )
}

export default Filter
