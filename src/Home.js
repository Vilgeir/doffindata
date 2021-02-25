import React, { useEffect, useState } from 'react'
import cpvMain from './cpvmain.json'
import CPVcodes from './data/cpv.json'
import logo from './logo.svg'
import count from './data/count.json'
import data from './data/doffin-bach-default-rtdb-F02_2014-export.json'
import './App.css'
import { firebase } from '@firebase/app'
import { DataGrid } from '@material-ui/data-grid'
require('firebase/auth')
require('firebase/database')
require('firebase/firestore')

function Home() {
  const firebaseConfig = {
    apiKey: 'AIzaSyCMDIwwubzh4Xt6nujcK65akULxjgHnT3E',
    authDomain: 'doffin-bach.firebaseapp.com',
    databaseURL:
      'https://doffin-bach-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'doffin-bach',
    storageBucket: 'doffin-bach.appspot.com',
    messagingSenderId: '16468608817',
    appId: '1:16468608817:web:f708022a44a453b4ca1210',
    measurementId: 'G-QXSYS06S5N',
  }
  const [form, setForm] = useState([])
  const [cpvstate, setCpv] = useState(null)
  const [subkat, setSubKat] = useState()
  const [cpvName, setCpvName] = useState([])
  const [cpvNameSUBSUB, setCpvNameSUBSUB] = useState([])
  const [chooseSubkat, setChooseSubkat] = useState()
  const [subSubKat, setSubSubkat] = useState()

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  useEffect(() => {
    let arr = []
    if (subSubKat) {
      let hello = Object.keys(subSubKat).filter((e) => e.length === 8)
      console.log(hello)
      let test2 = hello.map((item) => item.slice(0, 4))

      for (let [k, v] of Object.entries(CPVcodes)) {
        hello.includes(k) && arr.push([v, k])
      }
      console.log(arr)

      let newArr = arr.filter(
        (value, index, arr) => arr.indexOf(value) == index
      )
      setCpvNameSUBSUB(newArr)
    }
  }, [subSubKat])

  useEffect(() => {
    setSubSubkat(newCount[chooseSubkat])
  }, [chooseSubkat])

  console.log(chooseSubkat)
  console.log(subSubKat)
  useEffect(() => {
    let arr = []
    if (subkat) {
      let hello = Object.keys(subkat).filter((e) => e.length === 8)
      console.log(hello)
      let test2 = hello.map((item) => item.slice(0, 3))
      // console.log(test2)
      for (let [k, v] of Object.entries(CPVcodes)) {
        hello.includes(k) && arr.push([v, k])
      }
      console.log(arr)

      let newArr = arr.filter(
        (value, index, arr) => arr.indexOf(value) == index
      )
      setCpvName(newArr)
    }
  }, [subkat])

  useEffect(() => {
    setSubKat(newCount[cpvstate])
  }, [cpvstate])

  const handleClick = (e) => setChooseSubkat(e.target.value)

  const handleChange = (e) => setCpv(e.target.value)

  // let db = firebase.firestore()

  // useEffect(() => {
  //   setForm([])
  //   db.collection('F02_2014')
  //     .limit(10)
  //     .where('object.cpvmain', '==', cpv)
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         let newArr = Object.values(doc.data())[0]
  //         // setForm([newArr])
  //         setForm((prevState) => [...prevState, newArr])
  //       })
  //     })
  // }, [cpv])

  const gridStyle = { minHeight: 550 }
  const columns = [
    { field: 'bedrift', headerName: 'Bedrift', width: 200 },
    { field: 'beskrivelse', headerName: 'Beskrivelse', width: 700 },
    { field: 'cpv', headerName: 'CPV', width: 200 },
    { field: 'cpvmain', headerName: 'CPV Kategori', width: 200 },
    { field: 'dato', headerName: 'Dato', width: 120 },
    { field: 'kategori', headerName: 'Kategori', width: 200 },
    { field: 'subkategori', headerName: 'Sub kategori', width: 300 },
  ]

  let newCount = Object.values(count)[0]
  let testData = Object.values(data)[0]

  //  Cloudfunction i firebase
  // 52, 102, 02, 12, 21,
  let rows
  form
    ? (rows = form.map((item, i) => {
        return {
          id: i,
          bedrift: item.bedrift,
          beskrivelse: item.beskrivelse,
          cpvmain: item.cpvmain,
          cpv: item.cpv,
          dato: item.dato,
          kategori: item.kategorier,
          subkategori: item.subkategori,
        }
      }))
    : (rows = [
        {
          id: 520982058,
          bedrift: 'Loading...',
          beskrivelse: 'Loading...',
          cpvmain: 'Loading...',
          cpv: 'Loading...',
          dato: 'Loading...',
          kategori: 'Loading...',
          subkategori: 'Loading...',
        },
      ])

  return (
    <div className='App'>
      <h1>Form: F02_2014</h1>
      <label for='cpvmain'>Velg en kategori:</label>
      <select name='cpvmain' id='cpvmain' onChange={handleChange}>
        <option value='' disabled selected>
          Velg hovedkategori
        </option>

        {cpvMain.map((item) => (
          <option value={item.cpv.substring(0, 2) + '000000'}>
            {item.cpvmain} (
            {newCount[item.cpv.substring(0, 2) + '000000'].count})
            {item.cpv.substring(0, 2) + '000000'}
          </option>
        ))}
      </select>
      <div className='buttons'>
        {cpvName
          ? cpvName.map((e) => (
              <button className='button' value={e[1]} onClick={handleClick}>
                {e[0]} ({newCount[e[1].substring(0, 2) + '000000'][e[1]].count})
              </button>
            ))
          : ''}
      </div>
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          idProperty='id'
          rowHeight={100}
          columns={columns}
          rows={rows}
          multiline={true}
          style={gridStyle}
        />
      </div>
    </div>
  )
}

export default Home
