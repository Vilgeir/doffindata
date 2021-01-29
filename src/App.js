import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { firebase } from '@firebase/app'
require('firebase/auth')
require('firebase/database')

function App() {
  const [form, setForm] = useState([])
  const [item, setItem] = useState(0)
  
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL4xBKNIhTXeWb3NzkshO3aOfc1mveRo4",
  authDomain: "doli-doffin.firebaseapp.com",
  databaseURL: "https://doli-doffin-default-rtdb.firebaseio.com",
  projectId: "doli-doffin",
  storageBucket: "doli-doffin.appspot.com",
  messagingSenderId: "832880945140",
  appId: "1:832880945140:web:4cb516ab0eb75e50db3ba1",
  measurementId: "G-DY94RRFXFK"
};

// firebase.initializeApp(firebaseConfig)

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

// setForm((prevState) => [...prevState, array])

  const hello = () => 
    setItem((prevState) => prevState + 1)
  
const addItem = () => {

  firebase.database().ref('formattedData/F02_2014').once('value').then((snapshot) => {

    // var obj = (JSON.parse(snapshot.val()))
    // console.log(obj)
    let data = []
    data.push(snapshot.child('3777/').val());
    //console.log(JSON.parse(data))
    setForm(data)

    })

}

  
// console.log(form)

// firebase.database().ref('16/').once('value').then((snapshot) => {
//   console.log(snapshot.val())
//   let data = []
//   data.push(snapshot.child('14244/attr').val());
//   console.log(data)
//   setForm(data)
//   })
  // console.log(database)
  // console.log(form)

  // let he = Object.entries(form)
  console.log(Object.entries(form))
  console.log(JSON.parse(JSON.stringify(form)))

  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={() => hello()}></button>

        <p>
          {item}
        </p>
        <p>
         -------
        </p>
        <button onClick={() => addItem()}></button>
        <div>
          {JSON.parse(JSON.stringify(form)).map((f) => {
            <h1>{f.Bedrift}</h1>
          })}
          {/* {JSON.parse(JSON.stringify(form))} */}
        </div>
      </header>
    </div>
  );
}

export default App;
