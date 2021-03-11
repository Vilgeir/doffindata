import React from "react";
import { Link } from "react-router-dom";
import structure from "../data/test";
import "../index.css";

function Home() {
  return (
    <div className="home-container">
      <div>
        <input type="text" placeholder="Søk etter anbud eller CPV koder.." />
      </div>
      <h2>Velg hovedkategori</h2>
      <Link to={"categories/"}>
        <div className="box-container">
          <div className="box-row">
            <div className="main-boxes">Varer</div>
            <div className="main-boxes">Bygg og anlegg</div>
          </div>
          <div className="box-row">
            <div className="main-boxes">Tjenester</div>
            <div className="main-boxes">Resterende</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Home;
