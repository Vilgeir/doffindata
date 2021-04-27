import React, { createContext, useEffect, useState } from 'react'

export const StateContext = createContext('')

const StateProvider = ({ children }) => {
  const [checkedCategories, setcheckedCategories] = useState([])

  useEffect(() => {
    setcheckedCategories([])
  }, [])

  return (
    <StateContext.Provider value={{ checkedCategories, setcheckedCategories }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
