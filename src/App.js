import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailedList from './pages/DetailedList'
import Categories from './pages/Categories'
import './App.css'
require('firebase/auth')
require('firebase/database')
require('firebase/firestore')

function App() {
  return (
    <>
      <header />
      <main>
        <BrowserRouter basename='/doffindata'>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/:category'} component={Categories} />
            <Route
              exact
              path={'/:category/:details'}
              component={DetailedList}
            />
          </Switch>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
