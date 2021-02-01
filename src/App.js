import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { firebase } from '@firebase/app'
import { DataGrid } from '@material-ui/data-grid'
require('firebase/auth')
require('firebase/database')

function App() {
	const [form, setForm] = useState(null)

	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: 'AIzaSyBL4xBKNIhTXeWb3NzkshO3aOfc1mveRo4',
		authDomain: 'doli-doffin.firebaseapp.com',
		databaseURL: 'https://doli-doffin-default-rtdb.firebaseio.com',
		projectId: 'doli-doffin',
		storageBucket: 'doli-doffin.appspot.com',
		messagingSenderId: '832880945140',
		appId: '1:832880945140:web:4cb516ab0eb75e50db3ba1',
		measurementId: 'G-DY94RRFXFK',
	}

	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig)
	}
	useEffect(() => {
		firebase
			.database()
			.ref('formattedData/F02_2014')
			.once('value')
			.then((snapshot) => {
				let data = []
				data.push(snapshot.val())
				setForm(data.map((item) => Object.values(item))[0])
			})
  })

	const columns = [
		{ field: 'bedrift', headerName: 'Bedrift', width: 200 },
		{ field: 'beskrivelse', headerName: 'Beskrivelse', width: 700},
		{ field: 'cpv', headerName: 'CPV', width: 100 },
		{ field: 'dato', headerName: 'Dato', width: 120 },
		{ field: 'kategori', headerName: 'Kategori', width: 200 },
		{ field: 'subkategori', headerName: 'Sub kategori', width: 300 },
  ]
  
	let rows
	form
		? (rows = form.map((item, i) => {
				return {
					id: i,
					bedrift: item.Bedrift,
					beskrivelse: item.Beskrivelse,
					cpv: item.CPV,
					dato: item.Dato,
					kategori: item.Kategorier,
					subkategori: item.Subkategori,
				}
		  }))
		: (rows = [
				{
					id: 520982058,
					bedrift: 'Loading...',
					beskrivelse: 'Loading...',
					cpv: 'Loading...',
					dato: 'Loading...',
					kategori: 'Loading...',
					subkategori: 'Loading...',
				},
		  ])

	return (
		<div className="App">
			<h1>Form: F02_2014</h1>
			<div style={{ height: 800, width: '100%' }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={10000}
					checkboxSelection
				/>
			</div>
			{/* </header> */}
		</div>
	)
}
// 100 av 100 sortert på data

export default App