import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import Text from "react";

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
            <Link to={"/" + category + "/" + i.cpvsearch}>
              <h3>{i.cpvmainsearch}</h3>
            </Link>
            <Link to={"/" + category + "/" + i.cpvnumber + "/" + i.objectID}>
              {/* <p>
                {i.tittel.replace(query, () => {
                  return query.bold();
                })}
              </p> */}
              <h4>{i.cpvnumber}</h4>
              <p className="text-search">{i.tittel}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlgoliaSearch;
