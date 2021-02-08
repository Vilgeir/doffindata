import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { firebase } from "@firebase/app";
import { DataGrid } from "@material-ui/data-grid";
require("firebase/auth");
require("firebase/database");

function App() {
  const [form, setForm] = useState(null);

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  useEffect(() => {
    firebase
      .database()
      .ref("formattedData/F02_2014")
      .limitToFirst(100)
      .once("value")
      .then((snapshot) => {
        let data = [];
        data.push(snapshot.val());
        setForm(data.map((item) => Object.values(item))[0]);
      });
  }, []);

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
          cpv: "Loading...",
          cpv: "Loading...",
          dato: "Loading...",
          kategori: "Loading...",
          subkategori: "Loading...",
        },
      ]);

  return (
    <div className="App">
      <h1>Form: F02_2014</h1>
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
      {/* </header> */}
    </div>
  );
}
// 100 av 100 sortert på data

export default App;
