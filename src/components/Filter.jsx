import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import structure from '../data/withMainCategories'
import fylker from '../data/fylker'
import Categories from '../pages/Categories'

function Filter({
  category,
  details,
  subcategory,
  checkedCategories,
  setcheckedCategories,
  removeChecked,
}) {
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
  }

  useEffect(() => {
    removeChecked.length === 8 &&
      (document.getElementById(removeChecked).checked = false)
  }, [removeChecked])

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

  console.log(checkedCategories)

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
      <h4>Kategorier</h4>
      <Link to='/categories'>Alle Kategorier</Link>
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
                        <input
                          id={item.code}
                          key={i}
                          type='checkbox'
                          value={item.code}
                          defaultChecked={true}
                          onClick={handleClick}
                        ></input>
                        <label className='check-label'>
                          {item.name} ({item.countWithChildren})
                        </label>
                      </div>

                      {checkedCategories.map(
                        (check) =>
                          Object.keys(check).includes(item.code) &&
                          item.children.map((it, index) => (
                            <div key={it} className='subcheckboxes'>
                              <input
                                id={it.code}
                                key={index}
                                type='checkbox'
                                value={it.code}
                                onClick={handleChange}
                              ></input>
                              <label className='check-label'>
                                {it.name} ({it.countWithChildren})
                              </label>
                            </div>
                          ))
                      )}
                    </div>
                  ) : (
                    <>
                      <input
                        id={item.code}
                        key={i}
                        type='checkbox'
                        value={item.code}
                        onClick={handleClick}
                      ></input>
                      <label className='check-label'>
                        {item.name} ({item.countWithChildren})
                      </label>
                      {checkedCategories.map(
                        (check) =>
                          Object.keys(check).includes(item.code) &&
                          item.children.map((it, index) => (
                            <div key={index} className='subcheckboxes'>
                              <input
                                key={index}
                                type='checkbox'
                                value={it.code}
                                id={it.code}
                                onClick={handleChange}
                              ></input>
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
