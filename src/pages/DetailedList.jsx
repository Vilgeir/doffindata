import React, { useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import structure from '../data/withMainCategories'
import data from '../data/doffin-bach-default-rtdb-F02_2014-export.json'

function DetailedList() {
  const [checkedCategories, setcheckedCategories] = useState([])
  const [removeChecked, setRemoveChecked] = useState([])

  const { category, details, subcategory } = useParams()

  useEffect(() => {
    subcategory && setcheckedCategories([{ [subcategory]: [] }])
  }, [])

  let arr = ['2020-09-', '2020-10-', '2020-11-']

  const handleChange = (e) => {
    let value = e.target.value
      .split('')
      .filter((item) => item === '0')
      .join('')

    if (value.length === 5) {
      checkedCategories.map(
        (i) =>
          Object.keys(i).join() === e.target.value &&
          setcheckedCategories((prevstate) => [
            ...prevstate.filter(
              (item) => Object.keys(item).join() != [e.target.value]
            ),
          ])
      )
    } else {
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
    }

    setRemoveChecked(e.target.value)
  }

  return (
    <div className='detail-container'>
      <div className='search'>
        <Filter
          details={details}
          subcategory={subcategory}
          category={category}
          setcheckedCategories={setcheckedCategories}
          checkedCategories={checkedCategories}
          removeChecked={removeChecked}
        />
      </div>
      <div className='info-container'>
        {subcategory
          ? structure.map(
              (item) =>
                item.main === category &&
                item.children.map((it) =>
                  it.children.map(
                    (i) =>
                      i.code === subcategory && (
                        <h1 key={i}>
                          {i.name} (CPV {i.code})
                        </h1>
                      )
                  )
                )
            )
          : structure.map(
              (item) =>
                item.main === category &&
                item.children.map(
                  (i) =>
                    i.code === details && (
                      <h1 key={i}>
                        {i.name} (CPV {i.code})
                      </h1>
                    )
                )
            )}
        <select>
          <option value='cpv-sort'>Sorter etter</option>
        </select>
        <div>
          <h3>CPV:</h3>
          {checkedCategories.map((i) => (
            <>
              <button
                value={Object.keys(i)[0]}
                onClick={handleChange}
                className='cpv-button'
              >
                {Object.keys(i)[0]}
              </button>
              {Object.values(i)[0].map((item) => (
                <button
                  value={item}
                  onClick={handleChange}
                  className='cpv-button'
                >
                  {item}
                </button>
              ))}
            </>
          ))}
        </div>

        {checkedCategories.length > 0
          ? Object.values(data).map((i) =>
              checkedCategories.map((checked) =>
                Object.values(checked)[0].length > 0
                  ? Object.values(checked)[0].map(
                      (check) =>
                        i.cpvnumber
                          .substring(0, 4)
                          .includes(check.substring(0, 4)) &&
                        arr.map(
                          (item) =>
                            item.includes(
                              i.kunngjoringsdato.substring(0, 8)
                            ) && <Card key={i} i={i} />
                        )
                    )
                  : i.cpvnumber
                      .substring(0, 3)
                      .includes(Object.keys(checked)[0].substring(0, 3)) &&
                    arr.map(
                      (item) =>
                        item.includes(i.kunngjoringsdato.substring(0, 8)) && (
                          <Card key={i} i={i} />
                        )
                    )
              )
            )
          : Object.values(data).map(
              (i) =>
                i.cpvnumber.substring(0, 2) === details.substring(0, 2) &&
                arr.map(
                  (item) =>
                    item.includes(i.kunngjoringsdato.substring(0, 8)) && (
                      <Card key={i} i={i} />
                    )
                )
            )}
      </div>
    </div>
  )
}

export default DetailedList
