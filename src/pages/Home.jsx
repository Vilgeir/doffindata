import React from "react";
import { Link } from "react-router-dom";
import structure from "../data/withMainCategories";
import Footer from "../components/Footer";
import "../index.css";

function Home() {
  console.log(structure.map((i) => i.children[0].code));
  return (
    <div>
      <div className="home-container">
        <div className="head">
          <div>
            <input
              type="text"
              className="searchbar"
              placeholder="Søk etter anbud eller CPV koder"
            />
          </div>
          <h3 className="headline">Alle kategorier</h3>
        </div>

        <div className="box-container">
          {structure.map((i, index) => (
            <Link className="main-boxes" to={i.main} key={index}>
              <div>{i.main}</div>
              <div className="main-boxes-cpv">CPV {i.children[0].code}</div>
            </Link>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
