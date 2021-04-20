import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import structure from "../data/withMainCategories";
import "../index.css";
import SavedSearch from "../components/SavedSearch";
import Footer from "../components/Footer";
import { faArrowRight, faPlug } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const homeIcons = (icon) => {
  switch (icon) {
    case "IT":
      return faLaptopCode;
    case "Bygg og anlegg":
      return faTools;
    case "Helse":
      return faUserMd;
    case "Varer og utstyr":
      return faShoppingCart;
    case "Tjenester":
      return faBriefcase;
    case "Elektronisk utstyr":
      return faPlug;
    case "Transport":
      return faShippingFast;
    case "Kontor":
      return faClipboardList;
    case "Olje og kjemikalier":
      return faAtom;
    case "Offentlige ytelser":
      return faCity;
    default:
      return faAtom;
  }
};

function Home() {
  // console.log(structure.map((i) => i.children[0].code));
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
      </div>
      <div class="content-container">
        <div className="box-container">
          {structure.map((i, index) => (
            <Link className="main-boxes" to={i.main} key={index}>
              <div className="homeicon-container">
                <FontAwesomeIcon icon={homeIcons(i.main)} color="White" />
              </div>
              <div className="main-box-text">
                <p className="main-boxes-title">{i.main}</p>
                <p className="main-boxes-cpv">CPV {i.children[0].code}</p>
              </div>
              <div className="main-boxes-arrow">
                <FontAwesomeIcon icon={faArrowRight} color="#4DBFAC" />
              </div>
            </Link>
          ))}
        </div>
        <SavedSearch />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
