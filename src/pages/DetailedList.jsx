import React, { useEffect, useState, useContext } from 'react'
import Filter from '../components/detaildListComponents/Filter'
import SaveSearch from '../components/detaildListComponents/SaveSearch'
import Card from '../components/detaildListComponents/Card'
import { useParams } from 'react-router-dom'
import { StateContext } from '../context/StateProvider'
import { Link } from 'react-router-dom'
import { getProcurements } from '../helpers/handleData'
import fylkerKommuner from '../data/fylkerkommuner.json'
import { capitalize, getCpvName } from '../helpers/functions'
import { Breadcrums } from '../components/Breadcrums'
import { useToggle } from '../hooks/useToggle'

function DetailedList() {
  const { checkedCategories, setcheckedCategories, checkedFylker, kommuner } =
    useContext(StateContext)
  const [sort, setSort] = useState()
  const [checked, setChecked] = useState([])
  const [saveSearch, setSaveSearch] = useState(false)
  const [openModal, setOpenModal] = useToggle(false)
  const [documents, setDocuments] = useState([])
  const { category, details } = useParams()

  useEffect(() => {
    let arr = []

    Object.values(checkedCategories).map(
      (i) =>
        arr.push(Object.keys(i)) &&
        Object.values(i).map((item) => arr.push(item))
    )
    checkedCategories && setChecked(arr.flat())
  }, [checkedCategories])

  useEffect(() => {
    let obj = {
      checkedCategories,
      category: category,
      cpv: categorycpv,
      fylker: checkedFylker,
      kommuner: kommuner,
    }

    window.localStorage.setItem('lastSearch', JSON.stringify(obj))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedCategories])

  let newdetails = details.split('+')
  let categorycpv = newdetails[0]
  let subcategory = newdetails[1]

  const initialCagetory = () => {
    subcategory && setcheckedCategories([{ [subcategory]: [] }])
    subcategory && setChecked([subcategory])
  }
  useEffect(() => {
    initialCagetory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // setDocuments([])
    let category = []
    let subcat = []

    checked.filter((i) =>
      i.substring(3, 8) === '00000'
        ? category.push(i)
        : i.substring(4, 8) === '0000' && subcat.push(i)
    )

    subcat.map((i) =>
      category.map(
        (item, index) =>
          item.substring(0, 3).includes(i.substring(0, 3)) &&
          category.splice(index, 1)
      )
    )

    // let kommunerFlat = kommuner.flat().map((i) => i.Kommune)
    let arr = []
    if (category.length > 0 || subcat.length > 0) {
      category.map((cpv) =>
        getProcurements('tendre', 'cpvnumbersub', cpv, setDocuments, arr)
      )
      subcat.map((cpv) =>
        getProcurements('tendre', 'cpvnumbersubsub', cpv, setDocuments, arr)
      )
    } else {
      getProcurements('tendre', 'cpvnumbermain', categorycpv, setDocuments, arr)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked])
  let newArray = []

  const byCity = (arr, secondArr) =>
    secondArr.length > 0
      ? arr.filter((item) =>
          secondArr
            .flat()
            .map((kom) => kom.Kommune)
            .includes(capitalize(item.sted))
        )
      : arr

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
  // const onChange = (event) => {
  //   setSort(event.target.value)
  // }

  return (
    <>
      <Breadcrums category={category} categorycpv={categorycpv} />
      <div className='detail-container'>
        <div className='search'>
          <Filter
            fylkerKommuner={fylkerKommuner}
            openModal={openModal}
            setOpenModal={setOpenModal}
            details={categorycpv}
            subcategory={subcategory}
            category={category}
            checked={checked}
            setChecked={setChecked}
            saveSearch={saveSearch}
            setSaveSearch={setSaveSearch}
          />
        </div>
        <div className='list-container'>
          {subcategory ? (
            <h1>{getCpvName(subcategory)}</h1>
          ) : (
            <h1>{getCpvName(categorycpv)}</h1>
          )}

          {/* <div className='select-box-title'>
            <p className='sorting'>Sorter etter: </p>
            <select className='select-box' onChange={onChange}>
              <option value='asc'>Navn A-Å</option>
              <option value='desc'>Navn Å-A</option>
              <option value='date'>Publisert</option>
            </select>
          </div> */}
          {byCity(sortedArray, kommuner).map((i) => (
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={'/' + category + '/' + categorycpv + '/' + i.id}
              i={i}
              key={i.id}
            >
              <Card i={i} />
            </Link>
          ))}
        </div>
        {saveSearch && (
          <SaveSearch
            checkedFylker={checkedFylker}
            setSaveSearch={setSaveSearch}
            checkedCategories={checkedCategories}
            category={category}
            categorycpv={categorycpv}
            checked={checked}
          />
        )}
      </div>
    </>
  )
}

export default DetailedList
