import React, { useEffect, useState } from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ScrollArea } from "@material-ui/data-grid";

function SavedSearch() {
  const [saved, setSaved] = useState([]);
  const [openSaved, setOpenSaved] = useState(false);

  useEffect(() => {
    setSaved(JSON.parse(JSON.stringify(localStorage)));
  }, []);

  let arr = Object.entries(saved).map((i) =>
    i[1].split('"').filter((elem) => elem.length === 8)
  );

  const regex = new RegExp("/[A-Za-z0-9]+/", "g");
  let filtered = Object.values(saved).map((i) =>
    i
      .split('"')
      .filter(
        (elem) =>
          elem.includes("a") ||
          elem.includes("c") ||
          elem.includes("e") ||
          elem.includes("0")
      )
  );

  // console.log(Object.values(saved).map((i) => i.split('"')));

  // console.log(saved)
  // console.log(filtered)
  // console.log(Object.values(saved).map((i) => i.split('"')))
  // window.localStorage.clear()
  // console.log(arr[0][0].substring(0, 2) + '00000')
  return (
    <div className="home-buttons">
      <button className="home-button">
        Siste søk <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <button
        className="home-button"
        onClick={() => setOpenSaved((prev) => !prev)}
      >
        Lagrede søk <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {openSaved &&
        Object.entries(saved).map(
          (i, index) =>
            i[0] !== "ally-supports-cache" && (
              <Link to={"/"} key={index}>
                {i[0]}
              </Link>
            )
        )}
    </div>
  );
}

export default SavedSearch;
