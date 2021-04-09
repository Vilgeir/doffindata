import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import structure from "../data/withMainCategories";
import data from "../data/doffin-bach-default-rtdb-F02_2014-export.json";

function DetailedList() {
  const [checkedCategories, setcheckedCategories] = useState([]);
  const [checkedSubCategory, setcheckedSubCategory] = useState([]);
  const [sort, setSort] = useState();

  const { category, details, subcategory } = useParams();

  useEffect(() => {
    subcategory && setcheckedCategories([{ [subcategory]: [] }]);
  }, []);

  let arr = ["2020-09-", "2020-10-", "2020-11-"];

  let newArray = [];

  const sortTest = Object.entries(data).map((i) => newArray.push(i[1]));

  const sorting = (a, b) => {
    if (sort == "asc") {
      return a.tittel > b.tittel ? 1 : -1;
    } else if (sort == "desc") {
      return a.tittel < b.tittel ? 1 : -1;
    } else if (sort == "date") {
      return a.kunngjoringsdato < b.kunngjoringsdato ? 1 : -1;
    }
    return 0;
  };

  const sortedArray = newArray.sort(sorting);

  const onChange = (event) => {
    setSort(event.target.value);
  };

  console.log(sortedArray);

  return (
    <div className="detail-container">
      <div className="search">
        <Filter
          details={details}
          subcategory={subcategory}
          category={category}
          setcheckedCategories={setcheckedCategories}
          checkedCategories={checkedCategories}
          checkedSubCategory={checkedSubCategory}
          setcheckedSubCategory={setcheckedSubCategory}
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
                        <h1 key={i}>
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
                      <h1 key={i}>
                        {i.name} (CPV {i.code})
                      </h1>
                    )
                )
            )}
        <select onChange={onChange}>
          <option value="cpv-sort">Sorter etter</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
          <option value="date">Publisert</option>
        </select>
        <div>
          <h3>CPV:</h3>
          {checkedCategories.map((i) => (
            <>
              <button className="cpv-button">{Object.keys(i)[0]}</button>
              {Object.values(i)[0].map((item) => (
                <button className="cpv-button">{item}</button>
              ))}
            </>
          ))}
        </div>

        {checkedCategories.length > 0
          ? sortedArray.map((i) =>
              checkedCategories.map((checked) =>
                Object.values(checked)[0].length > 0
                  ? Object.values(checked)[0].map(
                      (check) =>
                        i.cpvnumber
                          .substring(0, 4)
                          .includes(check.substring(0, 4)) &&
                        arr.map(
                          (item) =>
                            item.includes(
                              i.kunngjoringsdato.substring(0, 8)
                            ) && <Card key={i} i={i} />
                        )
                    )
                  : i.cpvnumber
                      .substring(0, 3)
                      .includes(Object.keys(checked)[0].substring(0, 3)) &&
                    arr.map(
                      (item) =>
                        item.includes(i.kunngjoringsdato.substring(0, 8)) && (
                          <Card key={i} i={i} />
                        )
                    )
              )
            )
          : sortedArray.map(
              (i) =>
                i.cpvnumber.substring(0, 2) === details.substring(0, 2) &&
                arr.map(
                  (item) =>
                    item.includes(i.kunngjoringsdato.substring(0, 8)) && (
                      <Card key={i} i={i} />
                    )
                )
            )}
      </div>
    </div>
  );
}

export default DetailedList;
