import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DetailedList from "./pages/DetailedList";
import DetailedInfo from "./pages/DetailedInfo";
import Categories from "./pages/Categories";
import "./App.css";
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");

function App() {
  return (
    <>
      <BrowserRouter basename="/doffindata">
        <Header />
        <main>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/:category"} component={Categories} />
            <Route
              exact
              path={"/:category/:details"}
              component={DetailedList}
            />
            <Route
              exact
              path={"/:category/:details/:procurement"}
              component={DetailedInfo}
            ></Route>
            <Route></Route>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
