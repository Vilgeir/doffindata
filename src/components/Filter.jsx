import React, { useEffect } from 'react'
import structure from '../data/withMainCategories'
import fylker from '../data/fylker'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Checkboxes from './Checkboxes'
import { Link } from 'react-router-dom'

function Filter({
  category,
  details,
  subcategory,
  checkedCategories,
  setcheckedCategories,
  removeChecked,
  setRemoveChecked,
  checked,
  setChecked,
}) {
  const handleClick = (e) => {
    checkedCategories.map(
      (i) =>
        Object.keys(i).join() === e.target.value &&
        setcheckedCategories((prevstate) => [
          ...prevstate.filter(
            (item) => Object.keys(item).join() !== [e.target.value]
          ),
        ])
    )

    e.target.checked === true &&
      setcheckedCategories((prevState) => [
        ...prevState,
        { [e.target.value]: [] },
      ])
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
  }

  const handleCheck = (e) => {
    setChecked((prevState) =>
      prevState.includes(e.target.value)
        ? [...prevState.filter((i) => i !== e.target.value)]
        : [...prevState, e.target.value]
    )
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
  }

  const goBack = () => {
    window.history.back()
  }

  return (
    <div>
      <h3 className=''>Søk</h3>

      <div>
        <input
          type='text'
          className='searchbar'
          id='detail-search'
          placeholder='Søk'
        />
      </div>
      <h3 className=''>Filter</h3>
      {checkedCategories.length > 0 && (
        <button className='cpv-button' onClick={removeFilters}>
          Fjern alle filter
        </button>
      )}
      <h4>Kategorier</h4>
      <Link onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} /> {category}
      </Link>

      {structure.map(
        (it) =>
          it.main === category &&
          it.children.map(
            (i) =>
              i.code === details &&
              i.children.map((item, i) => (
                <div className='checkboxes'>
                  {subcategory && subcategory === item.code ? (
                    <div className='check-container'>
                      <div>
                        {Object.entries(checked).map((elem) => (
                          <Checkboxes
                            key={i}
                            value={item.code}
                            onChange={handleClick}
                            className={'checkbox'}
                            id={item.code}
                            handleCheck={handleCheck}
                            checked={checked.includes(item.code) ? true : false}
                          />
                        ))}
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
                                onChange={handleClick}
                                className={'checkbox'}
                                id={it.code}
                                handleCheck={handleCheck}
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
                        id={item.code}
                        handleCheck={handleCheck}
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
                                id={it.code}
                                handleCheck={handleCheck}
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
      <h4>Fylker</h4>
      {fylker.map((item, i) => (
        <div className='checkboxes'>
          <input key={i} type='checkbox' value={item.navn}></input>
          <label>{item.navn}</label>
        </div>
      ))}
      <h4>Kunngjøringsdato</h4>
      <p>Kalender</p>
      <h4>Tilbudsfrist</h4>
      <p>Kalender</p>
      <h4>Publikasjonstype</h4>
      <div className='checkboxes'>
        <input type='checkbox' value='nasjonal'></input>
        <label>Nasjonal</label>
        {/* <span className='checkmark'></span> */}
      </div>
      <div className='checkboxes'>
        <input type='checkbox' value='europeisk'></input>
        <label>Europeisk</label>
        {/* <span className='checkmark'></span> */}
      </div>
      <div className='checkboxes'>
        {/* <span className='checkmark'></span> */}
        <input type='checkbox' value='marketcunsulting'></input>
        <label>Market Cunsulting</label>
      </div>
    </div>
  )
}

export default Filter
