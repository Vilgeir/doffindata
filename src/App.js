import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Home from "./Home";
import Filter from "./Filter";
import "./App.css";
import { firebase } from "@firebase/app";
import { DataGrid } from "@material-ui/data-grid";
import jsonData from "./data/doffin-bach-default-rtdb-F02_2014-export.json";
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");

function App() {
  const [cpvCount, setCpvCount] = useState({});

  useEffect(() => {
    let cpvNumbers = Object.values(jsonData).map((js) => js.cpvnumber);

    let firstTwo = cpvNumbers.map((js) => js.split("").slice(0, 2).join(""));
    let count = {};
    firstTwo.forEach((i) => (count[i] = (count[i] || 0) + 1));
    // console.log(Object.keys(count))
    setCpvCount(count);
  }, []);

  return (
    <div className="main-container">
      {/* <Home cpvCount={cpvCount}></Home> */}
      <Filter></Filter>
    </div>
  );
}

export default App;
