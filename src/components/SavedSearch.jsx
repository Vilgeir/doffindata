import React, { useContext, useEffect, useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { StateContext } from "../context/StateProvider";

function SavedSearch() {
  const [last, setLast] = useState([]);
  const [openLast, setOpenLast] = useState(false);
  const [saved, setSaved] = useState([]);
  const [openSaved, setOpenSaved] = useState(false);
  const { setcheckedCategories, setCheckedFylker, setKommuner } = useContext(
    StateContext
  );


  const getSaved = () => {
    let arr = Object.keys(localStorage).filter(
      (elem) => elem !== 'ally-supports-cache' && elem !== 'lastSearch'
    )
    arr.map((elem) =>
      setSaved((prevstate) => [
        ...prevstate,
        { [elem]: JSON.parse(localStorage.getItem(elem)) },
      ])

    )
  }
  useEffect(() => {
    getSaved()
  }, [])

  const getLast = () => {
    let data = JSON.parse(localStorage.getItem('lastSearch'))
    let arr = []

    data &&
      (arr = [
        data.category,
        data.cpv,
        Object.values(data.checkedCategories).map((i) =>
          Object.entries(i).flat().join(" - ")
        ),
      ]);


    setLast(arr)
  }
  useEffect(() => {
    getLast()
  }, [])


  const handleClick = (i) => {
    Object.values(i).map(
      (item) =>
        item.checkedCategories && setcheckedCategories(item.checkedCategories)
    );
    Object.values(i).map(
      (item) => item.fylker && setCheckedFylker(item.fylker)
    );
    Object.values(i).map((item) => item.kommuner && setKommuner(item.kommuner));
  };

  return (
    <div className="home-buttons">
      <button
        className="home-button"
        onClick={() => setOpenLast((prev) => !prev)}
      >
        Siste søk{" "}
        {openLast ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>

      {openLast && (
        <Link
          to={"/" + Object.values(last)[0] + "/" + Object.values(last)[1]}
          onClick={() => handleClick(last)}
        >
          {Object.values(last).flat().join(" - ")}
        </Link>
      )}
      <button
        className="home-button"
        onClick={() => setOpenSaved((prev) => !prev)}
      >
        Lagrede søk{" "}
        {openSaved ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>

      {openSaved &&
        saved.map((i, index) => (
          <Link
            to={
              "/" + Object.values(i)[0].category + "/" + Object.values(i)[0].cpv
            }
            key={index}
            onClick={() => handleClick(i)}
          >
            {Object.keys(i)[0]}
          </Link>
        ))}
    </div>
  );
}

export default SavedSearch;
