import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import structure from "../data/withNorwegianNames";
import { useParams } from "react-router-dom";

import { StateContext } from "../context/StateProvider";
import { homeIcons } from "../helpers/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryCards from "../components/CategoryCards";
import AlgoliaSearch from "../components/AlgoliaSearch";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { capitalizeAndReplace } from "../helpers/functions";

function Categories() {
  const { setcheckedCategories, setCheckedFylker } = useContext(StateContext);
  const { category } = useParams();

  useEffect(() => {
    setcheckedCategories([]);
    setCheckedFylker([]);
  }, []);

  return (
    <>
      <div className="breadcrums">
        <Link to={"/"}>Hjem</Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <Link to={{ category }}>Kategori</Link>
      </div>
      <div className="home-container">
        <div className="head">
          <div className="search-home">
            <AlgoliaSearch />
            <div className="categories-head">
              <div
                className="homeicon-container"
                style={homeIcons(category).style}
              >
                <FontAwesomeIcon
                  id="homeicon-icon"
                  icon={homeIcons(category).icon}
                />
              </div>
              <h3>{capitalizeAndReplace(category)}</h3>
            </div>
          </div>
        </div>
        <div className="categories">
          {structure.map(
            (i) =>
              i.main === capitalizeAndReplace(category) &&
              i.children.map((item, idx) => (
                <CategoryCards item={item} key={idx} category={category} />
              ))
          )}
        </div>
      </div>
    </>
  );
}

export default Categories;
