import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import structure from '../data/test'

function Categories() {
  return (
    <div>
      {structure.map((i) => (
        <Link to={'categories/' + i.code}>
          <h3>
            {i.name} ({i.countWithChildren})
          </h3>
        </Link>
      ))}
    </div>
  )
}

export default Categories
