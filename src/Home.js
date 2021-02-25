import React, { useEffect, useState } from "react";
import cpvMain from "./cpvmain.json";
import logo from "./logo.svg";
import count from "./data/count.json";
import "./App.css";
import { firebase } from "@firebase/app";
import { DataGrid } from "@material-ui/data-grid";
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");

function Home({ cpvCount }) {
  const firebaseConfig = {
    apiKey: "AIzaSyCMDIwwubzh4Xt6nujcK65akULxjgHnT3E",
    authDomain: "doffin-bach.firebaseapp.com",
    databaseURL:
      "https://doffin-bach-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "doffin-bach",
    storageBucket: "doffin-bach.appspot.com",
    messagingSenderId: "16468608817",
    appId: "1:16468608817:web:f708022a44a453b4ca1210",
    measurementId: "G-QXSYS06S5N",
  };
  const [form, setForm] = useState([]);
  const [cpv, setCpv] = useState(null);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleChange = (e) => {
    setCpv(e);
  };
  console.log(cpv);

  let db = firebase.firestore();

  // useEffect(() => {
  // 	setForm([])
  // 	db.collection('F02_2014')
  // 		.limit(10)
  // 		.where('object.cpvmain', '==', cpv)
  // 		.get()
  // 		.then((querySnapshot) => {
  // 			querySnapshot.forEach((doc) => {
  // 				let newArr = Object.values(doc.data())[0]
  // 				// setForm([newArr])
  // 				setForm((prevState) => [...prevState, newArr])
  // 			})
  // 		})
  // }, [cpv])

  const gridStyle = { minHeight: 550 };

  const columns = [
    { field: "bedrift", headerName: "Bedrift", width: 200 },
    { field: "beskrivelse", headerName: "Beskrivelse", width: 700 },
    { field: "cpv", headerName: "CPV", width: 200 },
    { field: "cpvmain", headerName: "CPV Kategori", width: 200 },
    { field: "dato", headerName: "Dato", width: 120 },
    { field: "kategori", headerName: "Kategori", width: 200 },
    { field: "subkategori", headerName: "Sub kategori", width: 300 },
  ];

  let newCount = Object.values(count)[0];
  console.log(newCount);
  //  Cloudfunction i firebase
  // 52, 102, 02, 12, 21,
  let rows;
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
        };
      }))
    : (rows = [
        {
          id: 520982058,
          bedrift: "Loading...",
          beskrivelse: "Loading...",
          cpvmain: "Loading...",
          cpv: "Loading...",
          dato: "Loading...",
          kategori: "Loading...",
          subkategori: "Loading...",
        },
      ]);

  //   console.log(cpvCount)
  //   console.log(cpvCount['03'])
  //   console.log(cpvMain.map((item) => item.cpv.substring(0, 2)))

  return (
    <div className="App">
      <h1>Form: F02_2014</h1>
      <label for="cpvmain">Velg en kategori:</label>
      <select name="cpvmain" id="cpvmain" onChange={handleChange}>
        <option value="" disabled selected>
          Velg hovedkategori
        </option>
        {cpvMain.map((item) => (
          <option value={item.cpvmain}>
            {item.cpvmain} (
            {newCount[item.cpv.substring(0, 2) + "000000"].count})
          </option>
        ))}
      </select>
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
          idProperty="id"
          rowHeight={100}
          columns={columns}
          rows={rows}
          multiline={true}
          style={gridStyle}
        />
      </div>
      {/* <Count /> */}
      {/* </header> */}
    </div>
  );
}
// 100 av 100 sortert på data

export default Home;
