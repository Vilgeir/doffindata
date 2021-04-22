<<<<<<< HEAD
import React, { useEffect, useState } from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ScrollArea } from "@material-ui/data-grid";
=======
import React, { useEffect, useState } from 'react'
import structure from '../data/withMainCategories'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { ScrollArea } from '@material-ui/data-grid'
>>>>>>> 8b872d78a4b37195816c8b74357c912aa9f5d0e4

function SavedSearch() {
  const [saved, setSaved] = useState([]);
  const [openSaved, setOpenSaved] = useState(false);

  let category = structure.map((i) => i.main)
  let arr = Object.keys(localStorage).map((elem) => elem)

  useEffect(() => {
<<<<<<< HEAD
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
=======
    arr.map((elem) =>
      setSaved((prevstate) => [
        ...prevstate,
        { [elem]: JSON.parse(localStorage.getItem(elem)) },
      ])
    )
  }, [])

>>>>>>> 8b872d78a4b37195816c8b74357c912aa9f5d0e4
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
<<<<<<< HEAD
        Object.entries(saved).map(
          (i, index) =>
            i[0] !== "ally-supports-cache" && (
              <Link to={"/"} key={index}>
                {i[0]}
              </Link>
            )
        )}
=======
        saved.map((i, index) => (
          <Link
            to={
              '/' + Object.values(i)[0].category + '/' + Object.values(i)[0].cpv
            }
            key={index}
          >
            {Object.keys(i)[0]}
          </Link>
        ))}
>>>>>>> 8b872d78a4b37195816c8b74357c912aa9f5d0e4
    </div>
  );
}

export default SavedSearch;
