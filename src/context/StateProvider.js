import React, { createContext, useEffect, useState } from 'react'

export const StateContext = createContext('')

const StateProvider = ({ children }) => {
  const [checkedCategories, setcheckedCategories] = useState([])
  const [checkedFylker, setCheckedFylker] = useState([])
  const [kommuner, setKommuner] = useState([])

  useEffect(() => {
    setcheckedCategories([])
  }, [])

  useEffect(() => {
    setCheckedFylker([])
  }, [])

  useEffect(() => {
    setKommuner([])
  }, [])

  return (
    <StateContext.Provider
      value={{
        kommuner,
        setKommuner,
        checkedFylker,
        setCheckedFylker,
        checkedCategories,
        setcheckedCategories,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
