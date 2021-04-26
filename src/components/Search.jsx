import React from "react";

const Search = ({ input: keyword, onChange: setKeyword }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          className="searchbar"
          placeholder="Søk etter anbud eller CPV-koder"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
