import React, { useEffect, useState, useContext } from 'react'
import Filter from '../components/Filter'
import SaveSearch from '../components/SaveSearch'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import structure from '../data/withMainCategories'
import data from '../data/doffin-form2.json'
import { Link } from 'react-router-dom'
import { getData } from '../helpers/handleData'
import { StateContext } from '../context/StateProvider'

function DetailedList() {
  const { checkedCategories, setcheckedCategories } = useContext(StateContext)
  const [removeChecked, setRemoveChecked] = useState([])
  const [sort, setSort] = useState()
  const [checked, setChecked] = useState([])
  const [saveSearch, setSaveSearch] = useState(false)

  const [documents, setDocuments] = useState([])

  const { category, details } = useParams()

  useEffect(() => {
    let arr = []
    Object.values(checkedCategories)
      .map((i) => arr.push(Object.keys(i)))
      .flat()
    Object.values(checkedCategories)
      .map((i) => Object.values(i).map((item) => arr.push(item)))
      .flat()
    checkedCategories && setChecked(arr.flat())
  }, [])

  useEffect(() => {
    let obj = {
      checkedCategories,
      category: category,
      cpv: categorycpv,
    }

    window.localStorage.setItem('lastSearch', JSON.stringify(obj))
  }, [checkedCategories])

  console.log(checkedCategories)
  let newdetails = details.split('+')
  let categorycpv = newdetails[0]
  let subcategory = newdetails[1]

  useEffect(() => {
    subcategory && setcheckedCategories([{ [subcategory]: [] }])
    subcategory && setChecked([subcategory])
  }, [])

  useEffect(() => {
    getData('anbud', 'cpvnumbermain', categorycpv, setDocuments)
  }, [])

  let newArray = []

  Object.entries(documents).map((i) => newArray.push(i[1]))

  const sorting = (a, b) => {
    if (sort === 'asc') {
      return a.tittel > b.tittel ? 1 : -1
    } else if (sort === 'desc') {
      return a.tittel < b.tittel ? 1 : -1
    } else if (sort === 'date') {
      return a.kunngjoringsdato < b.kunngjoringsdato ? 1 : -1
    }
    return 0
  }

  const sortedArray = newArray.sort(sorting)
  const onChange = (event) => {
    setSort(event.target.value)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
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
          details={categorycpv}
          subcategory={subcategory}
          category={category}
          setcheckedCategories={setcheckedCategories}
          checkedCategories={checkedCategories}
          removeChecked={removeChecked}
          setRemoveChecked={setRemoveChecked}
          checked={checked}
          setChecked={setChecked}
          saveSearch={saveSearch}
          setSaveSearch={setSaveSearch}
        />
      </div>
      <div className='list-container'>
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
                    i.code === categorycpv && (
                      <h1 key={i}>
                        {i.name} (CPV {i.code})
                      </h1>
                    )
                )
            )}
        <div className='select-box-title'>
          <h2>Sorter etter: </h2>
          <select className='select-box' onChange={onChange}>
            <option value='asc'>ASC</option>
            <option value='desc'>DESC</option>
            <option value='date'>Publisert</option>
          </select>
        </div>

        {checkedCategories.length > 0
          ? sortedArray.map((i) =>
              checkedCategories.map((checked) =>
                Object.values(checked)[0].length > 0
                  ? Object.values(checked)[0].map(
                      (check) =>
                        i.cpvnumber
                          .substring(0, 4)
                          .includes(check.substring(0, 4)) && <Card i={i} />
                    )
                  : i.cpvnumber
                      .substring(0, 3)

                      .includes(Object.keys(checked)[0].substring(0, 3)) && (
                      <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to={'/' + category + '/' + categorycpv + '/' + i.id}
                        i={i}
                      >
                        <Card i={i} />
                      </Link>
                    )
              )
            )
          : sortedArray.map(
              (i) =>
                i.cpvnumber.substring(0, 2) === categorycpv.substring(0, 2) && (
                  <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    to={'/' + category + '/' + categorycpv + '/' + i.id}
                    i={i}
                  >
                    <Card i={i} />
                  </Link>
                )
            )}
      </div>
      {saveSearch && (
        <SaveSearch
          setSaveSearch={setSaveSearch}
          checkedCategories={checkedCategories}
          category={category}
          categorycpv={categorycpv}
        />
      )}
    </div>
  )
}

export default DetailedList
