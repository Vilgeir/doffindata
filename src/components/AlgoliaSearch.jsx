import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import Text from "react";
import structure from "../data/withNorwegianNames";

function AlgoliaSearch() {
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState([]);

  const { category } = useParams();

  const searchClient = algoliasearch(
    "QG9J28HNQ9",
    "bdf4769c7a050792225f3a0613a4bec4"
  );

  let index;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  console.log(
    structure.map((item) => item.children.map((it) => it.code.substring(0, 2)))
  );

  useEffect(() => {
    const search = async () => {
      if (query) {
        index = searchClient.initIndex("tendre");
        const result = await index.search(query);
        setHits(result.hits);
      } else {
        setHits([]);
      }
    };
    search();
  }, [query]);

  const substring = query;
  const original = hits;

  //original.replace(query.query);

  const highlight = () => {
    return hits[0].toString().replace(query, "e");
  };

  const str = () => {
    return;
  };

  const test = () => {
    if (
      hits.map((i) =>
        structure.map((item) =>
          item.children.map(
            (it) => it.code.substring(0, 2) === i.cpvnumber.substring(0, 2)
          )
        )
      )
    ) {
      console.log("worked!");
    } else {
      console.log("didnt work");
    }
  };

  console.log(test());

  return (
    <div className="search-container">
      <input
        className="searchbar"
        type="text"
        onChange={handleChange}
        placeholder="Søk på anbud"
      />
      <div className="a-search">
        {hits.map((i) => (
          <div className="search-result">
            {structure.map((item) =>
              item.children.map((it) =>
                it.code.substring(0, 2) === i.cpvnumber.substring(0, 2) ? (
                  <div className="">
                    <Link
                      to={
                        "/" +
                        item.main +
                        "/" +
                        i.cpvnumbermain +
                        "/" +
                        i.objectID
                      }
                    >
                      <p className="p-search">{i.tittel}</p>
                      <p className="place-search">
                        Sted: {i.sted.toUpperCase()}
                      </p>
                      <h4 className="h4-search">CPV: {i.cpvnumber}</h4>
                    </Link>
                  </div>
                ) : undefined
              )
            )}
            <Link to={"/" + category + "/" + i.cpvsearch}>
              <h3>{i.cpvmainsearch}</h3>
              {/* <p>
                {i.tittel.replace(query, () => {
                  return query.bold();
                })}
              </p> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlgoliaSearch;
