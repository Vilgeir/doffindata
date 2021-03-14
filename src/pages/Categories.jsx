import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import structure from '../data/withMainCategories'
import { useParams } from 'react-router-dom'

function Categories() {
  const { category } = useParams()

  return (
    <div>
      <h3>Søk i anbud</h3>
      <input placeholder='Søk i kategorier, CPV-koder'></input>
      <h1>{category}</h1>
      <div class='categories'>
        {structure.map(
          (i) =>
            i.main === category &&
            i.children.map((item) => (
              <div className='category-card'>
                <Link to={'/' + category + '/' + item.code}>
                  <h3>
                    {item.name} {item.countWithChildren}
                  </h3>
                </Link>
                {item.children.map((items) => (
                  <Link
                    to={'/' + category + '/' + item.code + '/' + items.code}
                  >
                    <p>
                      {items.name} {items.countWithChildren}
                    </p>
                  </Link>
                ))}
              </div>
            ))
        )}
      </div>
    </div>
  )
}

export default Categories
