import React from "react";

const SearchData = ({ searchData = [] }) => {
  console.log(searchData);
  return (
    <>
      {searchData.map((data, index) => {
        if (data) {
          return (
            <div>
              <h3>{data}</h3>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default SearchData;
