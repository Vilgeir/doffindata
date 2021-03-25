import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import structure from '../data/count.structure'
import structure from "../data/withMainCategories";
import fylker from "../data/fylker";
import Categories from "../pages/Categories";
import CheckedValues from "./CheckedValues";

function Filter({
  category,
  details,
  subcategory,
  checkedValues,
  setCheckedValues,
}) {
  const handleClick = (e) => {
    checkedValues.map(
      (i) =>
        i === e.target.value &&
        setCheckedValues((prevstate) => [
          ...prevstate.filter((item) => item !== e.target.value),
        ])
    );

    e.target.checked === true &&
      setCheckedValues((prevstate) => [...prevstate, e.target.value]);
  };

  return (
    <div>
      <h3 className="">Søk</h3>
      {/* <label className="check-container">
        <input type="checkbox"></input>
        <span className="checkmark"></span>
      </label> */}
      <div>
        <input
          type="text"
          className="searchbar"
          id="detail-search"
          placeholder="Søk"
        />
      </div>
      <h3 className="">Filter</h3>
      <h4>Kategorier</h4>
      <Link to="/categories">Alle Kategorier</Link>
      {structure.map(
        (it) =>
          it.main === category &&
          it.children.map(
            (i) =>
              i.code === details &&
              i.children.map((item, i) => (
                <div className="checkboxes">
                  {subcategory && subcategory === item.code ? (
                    <div className="check-container">
                      <div>
                        <input
                          key={i}
                          type="checkbox"
                          value={item.code}
                          defaultChecked={true}
                          onClick={handleClick}
                        ></input>
                        <label className="check-label">
                          {item.name} ({item.countWithChildren})
                        </label>
                      </div>

                      {checkedValues.map(
                        (check) =>
                          check.includes(item.code) &&
                          item.children.map((it, index) => (
                            <div className="subcheckboxes">
                              <input
                                key={index}
                                type="checkbox"
                                value={it.code}
                                onClick={handleClick}
                              ></input>
                              <label className="check-label">
                                {it.name} ({it.countWithChildren})
                              </label>
                            </div>
                          ))
                      )}
                    </div>
                  ) : (
                    <>
                      <input
                        key={i}
                        type="checkbox"
                        value={item.code}
                        onClick={handleClick}
                      ></input>
                      <label className="check-label">
                        {item.name} ({item.countWithChildren})
                      </label>
                      {checkedValues.map(
                        (check) =>
                          check.includes(item.code) &&
                          item.children.map((it, index) => (
                            <div className="subcheckboxes">
                              <input
                                key={index}
                                type="checkbox"
                                value={it.code}
                                onClick={handleClick}
                              ></input>
                              <label className="check-label">
                                {it.name} ({it.countWithChildren})
                              </label>
                            </div>
                          ))
                      )}
                    </>
                  )}
                </div>
              ))
          )
      )}

      <h4>Fylker</h4>
      {fylker.map((item, i) => (
        <div className="checkboxes">
          <input key={i} type="checkbox" value={item.navn}></input>
          <label>{item.navn}</label>
        </div>
      ))}

      <h4>Kunngjøringsdato</h4>
      <p>Kalender</p>

      <h4>Tilbudsfrist</h4>
      <p>Kalender</p>

      <h4>Publikasjonstype</h4>
      <div className="checkboxes">
        <input type="checkbox" value="nasjonal"></input>
        <label>Nasjonal</label>
        {/* <span className='checkmark'></span> */}
      </div>
      <div className="checkboxes">
        <input type="checkbox" value="europeisk"></input>
        <label>Europeisk</label>
        {/* <span className='checkmark'></span> */}
      </div>
      <div className="checkboxes">
        {/* <span className='checkmark'></span> */}
        <input type="checkbox" value="marketcunsulting"></input>
        <label>Market Cunsulting</label>
      </div>
    </div>
  );
}

export default Filter;
