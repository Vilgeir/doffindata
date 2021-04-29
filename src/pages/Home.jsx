import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import structure from "../data/withMainCategories";
import "../index.css";
import SavedSearch from "../components/SavedSearch";
import Footer from "../components/Footer";
import Search from "../components/Search";
import SearchData from "../components/SearchData";
import AlgoliaSearch from "../components/AlgoliaSearch";
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
import { getData } from "../helpers/handleData";

function Home(props) {
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState();
  const [searchDataDefault, setSearchDataDefault] = useState(
    structure.map((i) => i.main)
  );

  console.log(structure.map((i) => i.main));

  const [serverData, setServerData] = useState([]);

  //children.map((it, index) => it.code)  .flat()

  // console.log(searchDataDefault);

  let arrrray = [];
  let mainCpv = "";

  useEffect(() => {
    getData("F02_2014", "cpv", mainCpv, setServerData);
  }, []);

  Object.entries(serverData).map((i) => arrrray.push(i));

  // console.log(serverData);

  const updateInput = (input) => {
    const filtered = searchDataDefault.filter((main) => {
      if (isNaN()) {
        return main.toLowerCase().includes(input.toLowerCase());
      }
      return main;
    });
    if (input === "") return setInput(input), setSearchData([]);
    return setInput(input), setSearchData(filtered);
  };

  //console.log(searchData);

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

  return (
    <div className="errthing">
      <div className="home-container">
        <div className="head">
          <div className="aSearch">
            <AlgoliaSearch />
          </div>

          {/* <Search input={input} onChange={updateInput} />
          <SearchData searchData={searchData} /> */}
          <h3 className="headline">Alle kategorier</h3>
        </div>
      </div>
      <div>
        {/* {searchData.map((result) => {
          if (result) {
            return <h3>{result}</h3>;
          } 
          return null;
        })} */}
      </div>
      <div class="content-container">
        <div className="box-container">
          {structure.map((i, index) => (
            <Link
              className="main-boxes"
              to={i.main}
              key={index}
              id={"main-boxes-" + index}
            >
              <div className="homeicon-container">
                <FontAwesomeIcon id="homeicon-icon" icon={homeIcons(i.main)} />
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
    </div>
  );
}

export default Home;
