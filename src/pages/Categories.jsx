import React, { useState } from "react";
import { Link } from "react-router-dom";
import structure from "../data/withMainCategories";
import { useParams } from "react-router-dom";

function Categories() {
  const { category } = useParams();

  return (
    <div className="home-container">
      <div className="head">
        <h3 className="headline">Søk i anbud</h3>
        <input
          className="searchbar"
          placeholder="Søk i kategorier, CPV-koder"
        ></input>
        <h3>{category}</h3>
      </div>
      <div class="categories">
        {structure.map(
          (i) =>
            i.main === category &&
            i.children.map((item, i) => (
              <div className="category-card">
                <Link to={"/" + category + "/" + item.code}>
                  <h3>
                    {item.name} {item.countWithChildren}
                  </h3>
                </Link>
                {item.children.map((items) => (
                  <Link
                    to={"/" + category + "/" + item.code + "/" + items.code}
                  >
                    <p>
                      {items.name} {items.countWithChildren}
                    </p>
                  </Link>
                ))}
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default Categories;
