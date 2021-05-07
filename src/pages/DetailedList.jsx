import React, { useEffect, useState, useContext } from 'react'
import Filter from '../components/Filter'
import SaveSearch from '../components/SaveSearch'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import structure from '../data/withNorwegianNames'
import { StateContext } from '../context/StateProvider'
import { Link } from 'react-router-dom'
import {
  getProcurements,
  getProcurementsWithCounty,
} from '../helpers/handleData'
import fylkerKommuner from '../data/fylkerkommuner.json'
import { capitalize } from '../helpers/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function DetailedList() {
  const {
    checkedCategories,
    setcheckedCategories,
    checkedFylker,
    kommuner,
  } = useContext(StateContext)
  const [removeChecked, setRemoveChecked] = useState([])
  const [sort, setSort] = useState()
  const [checked, setChecked] = useState([])
  const [saveSearch, setSaveSearch] = useState(false)
  const [openModal, setOpenModal] = useState(false)
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
    setDocuments([])
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

    let kommunerFlat = kommuner.flat().map((i) => i.Kommune)
    if ((category.length > 0 || subcat.length > 0) && kommunerFlat.length > 0) {
      kommunerFlat.map((kommune) => {
        category.map((cpv) =>
          getProcurementsWithCounty(
            'tendre',
            'cpvnumbersub',
            cpv,
            'sted',
            kommune,
            setDocuments,
            documents
          )
        )
        subcat.map((cpv) =>
          getProcurementsWithCounty(
            'tendre',
            'cpvnumbersubsub',
            cpv,
            'sted',
            kommune,
            setDocuments,
            documents
          )
        )
      })
    } else if (
      (category.length > 0 || subcat.length > 0) &&
      kommunerFlat.length === 0
    ) {
      category.map((i) =>
        getProcurements('tendre', 'cpvnumbersub', i, setDocuments, documents)
      )

      subcat.map((i) =>
        getProcurements('tendre', 'cpvnumbersubsub', i, setDocuments, documents)
      )
    } else if (
      kommunerFlat.length > 0 &&
      category.length === 0 &&
      subcat.length === 0
    ) {
      kommunerFlat.forEach((kommune) =>
        getProcurementsWithCounty(
          'tendre',
          'cpvnumbermain',
          categorycpv,
          'sted',
          kommune,
          setDocuments,
          documents
        )
      )
    } else if (
      kommunerFlat.length === 0 &&
      category.length === 0 &&
      subcat.length === 0
    ) {
      getProcurements(
        'tendre',
        'cpvnumbermain',
        categorycpv,
        setDocuments,
        documents
      )
    }
    return documents
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
  const onChange = (event) => {
    setSort(event.target.value)
  }

  return (
    <>
      <div className='breadcrums'>
        <Link to={'/'}>Hjem</Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <Link to={'/' + category}>Kategori</Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <Link to={'/' + category + '/' + categorycpv}>Resultat</Link>
      </div>
      <div className='detail-container'>
        <div className='search'>
          <Filter
            fylkerKommuner={fylkerKommuner}
            openModal={openModal}
            setOpenModal={setOpenModal}
            details={categorycpv}
            subcategory={subcategory}
            category={category}
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
                      (i, index) =>
                        i.code === subcategory && (
                          <h1 key={index}>
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
                    (i, index) =>
                      i.code === categorycpv && (
                        <h1 key={index}>
                          {i.name} (CPV {i.code})
                        </h1>
                      )
                  )
              )}
          <div className='select-box-title'>
            <p className='sorting'>Sorter etter: </p>
            <select className='select-box' onChange={onChange}>
              <option value='asc'>ASC</option>
              <option value='desc'>DESC</option>
              <option value='date'>Publisert</option>
            </select>
          </div>
          {checkedCategories.length > 0
            ? byCity(sortedArray, kommuner).map((i) =>
                checkedCategories.map((checked) =>
                  Object.values(checked)[0].length > 0
                    ? Object.values(checked)[0].map(
                        (check) =>
                          i.cpvnumber
                            .substring(0, 4)
                            .includes(check.substring(0, 4)) && (
                            <Link
                              style={{ textDecoration: 'none', color: 'black' }}
                              to={
                                '/' + category + '/' + categorycpv + '/' + i.id
                              }
                              i={i}
                              key={i.id}
                            >
                              <Card i={i} />
                            </Link>
                          )
                      )
                    : i.cpvnumber
                        .substring(0, 3)
                        .includes(Object.keys(checked)[0].substring(0, 3)) && (
                        <Link
                          key={i.id}
                          style={{ textDecoration: 'none', color: 'black' }}
                          to={'/' + category + '/' + categorycpv + '/' + i.id}
                          i={i}
                        >
                          <Card i={i} />
                        </Link>
                      )
                )
              )
            : byCity(sortedArray, kommuner).map(
                (i) =>
                  i.cpvnumber.substring(0, 2) ===
                    categorycpv.substring(0, 2) && (
                    <Link
                      key={i.id}
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
