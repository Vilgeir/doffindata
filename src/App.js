import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DetailedList from "./pages/DetailedList";
import Categories from "./pages/Categories";
// import Filter from "./Filter";
import Filter from "./components/Filter";
import "./App.css";
import { firebase } from "@firebase/app";
import { DataGrid } from "@material-ui/data-grid";
import jsonData from "./data/doffin-bach-default-rtdb-F02_2014-export.json";
import Header from "./components/Header";
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
    <>
      {/* <Header /> */}
      <header />
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/:category"} component={Categories} />
            <Route
              exact
              path={"/:category/:details"}
              component={DetailedList}
            />
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
