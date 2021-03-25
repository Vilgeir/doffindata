import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import structure from "../data/withMainCategories";
import data from "../data/doffin-bach-default-rtdb-F02_2014-export.json";

function DetailedList() {
  const [checkedValues, setCheckedValues] = useState([]);

  const { category, details, subcategory } = useParams();

  useEffect(() => {
    subcategory && setCheckedValues([subcategory]);
  }, []);

  let arr = ["2020-09-", "2020-10-", "2020-11-"];
  return (
    <div className="detail-container">
      <div className="search">
        <Filter
          details={details}
          subcategory={subcategory}
          category={category}
          setCheckedValues={setCheckedValues}
          checkedValues={checkedValues}
        />
      </div>
      <div className="info-container">
        {subcategory
          ? structure.map(
              (item) =>
                item.main === category &&
                item.children.map((it) =>
                  it.children.map(
                    (i) =>
                      i.code === subcategory && (
                        <h1>
                          {i.name} (CPV {i.code})
                        </h1>
                      )
                  )
                )
            )
          : structure.map(
              (item) =>
                item.main === category &&
                item.children.map(
                  (i) =>
                    i.code === details && (
                      <h1>
                        {i.name} (CPV {i.code})
                      </h1>
                    )
                )
            )}
        <select>
          <option value="cpv-sort">Sorter etter</option>
        </select>
        {checkedValues.map((i) => (
          <button className="cpv-button">{i}</button>
        ))}

        {subcategory
          ? Object.values(data).map(
              (i) =>
                i.cpvnumber.substring(0, 3) === subcategory.substring(0, 3) &&
                arr.map(
                  (item) =>
                    item.includes(i.kunngjoringsdato.substring(0, 8)) && (
                      <Card i={i} />
                    )
                )
            )
          : Object.values(data).map(
              (i) =>
                i.cpvnumber.substring(0, 2) === details.substring(0, 2) &&
                arr.map(
                  (item) =>
                    item.includes(i.kunngjoringsdato.substring(0, 8)) && (
                      <Card i={i} />
                    )
                )
            )}
      </div>
    </div>
  );
}

// RENDRE BASERT På hva som finnes i checked values!!! Og hvis den er tom. ReNDRE ALT SOM ER I DETAILS!! :D

export default DetailedList;
