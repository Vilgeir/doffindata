import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import structure from '../data/withMainCategories'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import { StateContext } from '../context/StateProvider'

function Categories() {
  const { checkedCategories, setcheckedCategories } = useContext(StateContext)
  const { category } = useParams()

  useEffect(() => {
    setcheckedCategories([])
  }, [])

  return (
    <div className='home-container'>
      <div className='head'>
        <div>
          <input
            className="searchbar"
            placeholder="Søk etter anbud eller CPV-koder"
            src="../../public/iconer/search.png"
          />
        </div>
        <h3>{category}</h3>
      </div>
      <div className='categories'>
        {structure.map(
          (i) =>
            i.main === category &&
            i.children.map((item, idx) => (
              <div className='category-card'>
                <Link to={'/' + category + '/' + item.code} key={idx}>
                  <p className="sub-category">
                    {item.name} ({item.countWithChildren})
                  </p>
                </Link>
                {item.children.map((items, index) => (
                  <Link
                    to={'/' + category + '/' + item.code + '+' + items.code}
                    key={index}
                  >
                    <p>
                      {items.name} ({items.countWithChildren})
                    </p>
                  </Link>
                ))}
              </div>
            ))
        )}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Categories
