import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  connectAutoComplete,
} from "react-instantsearch-dom";

import "../algoliaCss.css";

function AlgoliaSearch() {
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState([]);

  const searchClient = algoliasearch(
    "QG9J28HNQ9",
    "bdf4769c7a050792225f3a0613a4bec4"
  );

  let index;

  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  //   search();
  // };

  const search = async (e) => {
    setQuery(e.target.value);

    if (e.target.value) {
      index = searchClient.initIndex("tendre");
      const result = await index.search(query);
      setHits(result.hits);
    } else {
      setHits([]);
    }
  };

  //console.log(hits.length > 0 ? hits.map((i) => i.cpv) : null);

  return (
    <div>
      <input
        className="searchbar"
        type="text"
        onChange={search}
        placeholder="Søk på anbud"
      />
      <div className="a-search">
        {hits.map((i) => (
          <div>
            <p>{i.cpvmain}</p>
            <p>CPV: {i.cpv}</p>
          </div>
        ))}
      </div>
      {/* <InstantSearch searchClient={searchClient} indexName="tendre">
        <SearchBox translations={{ placehoder: "Søøøøøk" }} />
        <Hits hitComponent={Hit} />
      </InstantSearch> */}
    </div>
  );
}

export default AlgoliaSearch;

// const Hit = ({ hit }) => {
//   console.log(hit.cpvmain);
//   return (
//     <Link to={hit.cpv}>
//       <div className="contentAlgo">
//         <p>{hit.cpvmain}</p>
//         <p>{hit.cpv}</p>
//       </div>
//     </Link>
//   );
// };
