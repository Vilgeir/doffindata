import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import structure from "../data/withMainCategories";
import data from "../data/doffin-form2.json";
import { Link } from "react-router-dom";
import { getData } from "../helpers/handleData";

function DetailedList() {
  const [checkedCategories, setcheckedCategories] = useState([]);
  const [removeChecked, setRemoveChecked] = useState([]);
  const [sort, setSort] = useState();
  const [checked, setChecked] = useState([]);

  const [documents, setDocuments] = useState([]);

  const { category, details } = useParams();

  // const { category, details } = useParams()
  let newdetails = details.split("+");
  let categorycpv = newdetails[0];
  let subcategory = newdetails[1];

  console.log(categorycpv);
  useEffect(() => {
    subcategory && setcheckedCategories([{ [subcategory]: [] }]);
    subcategory && setChecked([subcategory]);
  }, []);

  useEffect(() => {
    getData("F02_2014", "cpvnumbermain", categorycpv, setDocuments);
  }, []);

  console.log(documents);

  let arr = ["2020-09-", "2020-10-", "2020-11-"];

  let newArray = [];

  Object.entries(documents).map((i) => newArray.push(i[1]));

  const sorting = (a, b) => {
    if (sort === "asc") {
      return a.tittel > b.tittel ? 1 : -1;
    } else if (sort === "desc") {
      return a.tittel < b.tittel ? 1 : -1;
    } else if (sort === "date") {
      return a.kunngjoringsdato < b.kunngjoringsdato ? 1 : -1;
    }
    return 0;
  };

  const sortedArray = newArray.sort(sorting);
  console.log(sortedArray);
  const onChange = (event) => {
    setSort(event.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    let value = e.target.value
      .split("")
      .filter((item) => item === "0")
      .join("");

    if (value.length === 5) {
      checkedCategories.map(
        (i) =>
          Object.keys(i).join() === e.target.value &&
          setcheckedCategories((prevstate) => [
            ...prevstate.filter(
              (item) => Object.keys(item).join() != [e.target.value]
            ),
          ])
      );
    } else {
      setcheckedCategories((prevState) =>
        prevState.map((i) =>
          Object.keys(i).join().substring(0, 3) ===
          e.target.value.substring(0, 3)
            ? {
                [Object.keys(i).join()]: [
                  ...Object.values(i)[0].filter(
                    (item) => item !== e.target.value
                  ),
                ],
              }
            : i
        )
      );
    }

    setRemoveChecked(e.target.value);
  };

  return (
    <div className="detail-container">
      <div className="search">
        <Filter
          details={categorycpv}
          subcategory={subcategory}
          category={category}
          setcheckedCategories={setcheckedCategories}
          checkedCategories={checkedCategories}
          removeChecked={removeChecked}
          setRemoveChecked={setRemoveChecked}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
      <div className="list-container">
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
                    i.code === categorycpv && (
                      <h1 key={i}>
                        {i.name} (CPV {i.code})
                      </h1>
                    )
                )
            )}
        <select onChange={onChange}>
          <option disabled value="cpv-sort">
            Sorter etter
          </option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
          <option value="date">Publisert</option>
        </select>
        <div>
          <h3>CPV:</h3>
          {checkedCategories.map((i) => (
            <>
              <button
                value={Object.keys(i)[0]}
                onClick={handleChange}
                className="cpv-button"
              >
                {Object.keys(i)[0]}
              </button>
              {Object.values(i)[0].map((item) => (
                <button
                  value={item}
                  onClick={handleChange}
                  className="cpv-button"
                >
                  {item}
                </button>
              ))}
            </>
          ))}
        </div>

        {checkedCategories.length > 0
          ? //           ? data.map((i) =>

            sortedArray.map((i) =>
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
                            ) && <Card i={i} />
                        )
                    )
                  : i.cpvnumber
                      .substring(0, 3)
                      .includes(Object.keys(checked)[0].substring(0, 3)) &&
                    arr.map(
                      (item) =>
                        item.includes(i.kunngjoringsdato.substring(0, 8)) && (
                          <Card i={i} />
                        )
                    )
              )
            )
          : //           : data.map(

            sortedArray.map(
              (i) =>
                i.cpvnumber.substring(0, 2) === categorycpv.substring(0, 2) &&
                arr.map(
                  (item) =>
                    item.includes(i.kunngjoringsdato.substring(0, 8)) && (
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"/" + category + "/" + categorycpv + "/" + i.id}
                        i={i}
                      >
                        <Card i={i} />
                      </Link>
                    )
                )
            )}
      </div>
    </div>
  );
}

export default DetailedList;
