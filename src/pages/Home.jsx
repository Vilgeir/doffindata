import React from "react";
import { Link } from "react-router-dom";
import structure from "../data/test";
import "../index.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Dette er starten på alt godt!</h1>
      <div>
        <input type="text" placeholder="Søk etter anbud eller CPV koder.." />
      </div>
      <Link to={"categories"}>
        <div className="main-boxes">box1</div>
        <div className="main-boxes">box2</div>
        <div className="main-boxes">box3</div>
        <div className="main-boxes">box4</div>
        <button>Neste side</button>
      </Link>
    </div>
  );
}

export default Home;
