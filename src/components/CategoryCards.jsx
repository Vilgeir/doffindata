import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCards = ({ item, idx, category }) => {
  return (
    <div className='category-card'>
      <Link to={'/' + category + '/' + item.code} key={idx}>
        <p className='sub-category'>
          {item.name} ({item.countWithChildren})
        </p>
      </Link>
      {item.children.map((items, index) => (
        <Link
          className='sub-sub-category'
          to={'/' + category + '/' + item.code + '+' + items.code}
          key={index}
        >
          <p>
            {items.name} ({items.countWithChildren})
          </p>
        </Link>
      ))}
    </div>
  )
}

export default CategoryCards
