import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import structure from "../data/withMainCategories";
import "../index.css";
import SavedSearch from "../components/SavedSearch";
import Footer from "../components/Footer";
import Search from "../components/Search";
import SearchData from "../components/SearchData";
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

function Home(props) {
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState();
  const [searchDataDefault, setSearchDataDefault] = useState(
    structure.map((i) => i.main)
  );

  //children.map((it, index) => it.code)  .flat()

  console.log(searchDataDefault);

  // structure.map((it) => it.children[0])
  // const dataExample = [
  //     {
  //       type: "human",
  //       details: [
  //         { id: 1, name: "Peter", description: "friendly, black-hair" },
  //         { id: 5, name: "Susan", description: "blond" },
  //       ],
  //     },
  //     {
  //       type: "animal",
  //       details: [
  //         { id: 2, name: "Will", description: "lazy, cute" },
  //         { id: 3, name: "Bonny", description: "beautiful" },
  //       ],
  //     },
  //   ],
  //   term = "Peter",
  //   result = dataExample.reduce((r, { type, details }) => {
  //     let o = details.filter(
  //       ({ name, description }) =>
  //         name.includes(term) || description.includes(term)
  //     );
  //     if (o && o.length) r.push({ type, details: [...o] });
  //     return r;
  //   }, []);
  // console.log(result);

  // const term = "48100000";

  // const searResult = searchDataDefault.reduce((r, { main, children }) => {
  //   let o = children.filter(
  //     ({ code, name }) => code.includes(term) || name.includes(term)
  //   );
  //   if (o && o.length) r.push({ main, children: [...o] });
  //   return r;
  // }, []);
  // console.log(searResult);

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
    <div>
      <div className="home-container">
        <div className="head">
          <Search input={input} onChange={updateInput} />
          <SearchData searchData={searchData} />
          <h2>Alle kategorier</h2>
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
