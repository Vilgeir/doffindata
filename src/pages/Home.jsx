import React from "react";
import { Link } from "react-router-dom";
import structure from "../data/withMainCategories";
import "../index.css";

function Home() {
  return (
    <div className="home-container">
      <h3 className="headline">Velg hovedkategori</h3>
      <div>
        <input
          type="text"
          className="search"
          placeholder="Søk etter anbud eller CPV koder.."
        />
      </div>

      <div className="box-container">
        {structure.map((i) => (
          <Link className="main-boxes" to={i.main}>
            {i.main}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
