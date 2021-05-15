import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import algoliasearch from 'algoliasearch/lite'
import structure from '../data/withNorwegianNames'
import { toLowerCaseAndReplace } from '../helpers/functions'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
function AlgoliaSearch() {
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState([])

  const { category } = useParams()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    const search = async () => {
      const searchClient = algoliasearch(
        'QG9J28HNQ9',
        'bdf4769c7a050792225f3a0613a4bec4'
      )

      if (query) {
        let index = searchClient.initIndex('tendre')
        const result = await index.search(query)
        setHits(result.hits)
      } else {
        setHits([])
      }
    }
    search()
  }, [query])

  // const highlight = () => {
  //   return hits[0].toString().replace(query, "e");
  // };

  return (
    <div>
      <label>Søk</label>
      <input
        className='searchbar'
        type='text'
        onChange={handleChange}
        placeholder='Søk i anbud'
      />
      <div className='a-search'>
        {hits.map((i, index) => (
          <div key={index} className='search-result'>
            {structure.map((item) =>
              item.children.map((it) =>
                it.code.substring(0, 2) === i.cpvnumber.substring(0, 2) ? (
                  <div key={index}>
                    <Link
                      to={
                        '/' +
                        toLowerCaseAndReplace(item.main) +
                        '/' +
                        i.cpvnumbermain +
                        '/' +
                        i.objectID
                      }
                    >
                      <p className='p-search'>{i.tittel}</p>
                      <p className='place-search'>
                        Sted: {i.sted.toUpperCase()}
                      </p>
                      <h4 className='h4-search'>CPV: {i.cpvnumber}</h4>
                    </Link>
                  </div>
                ) : undefined
              )
            )}
            <Link to={'/' + category + '/' + i.cpvsearch}>
              <h3>{i.cpvmainsearch}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlgoliaSearch
