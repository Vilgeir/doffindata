import React, { useState } from "react";
import { Link } from "react-router-dom";
import structure from "../data/test";
import { useParams } from "react-router-dom";

function Categories() {
  const { category } = useParams();

  console.log(category);

  return (
    <div>
      {structure.map((i) => (
        <Link to={"categories/" + i.code}>
          <h3>
            {i.name} ({i.countWithChildren})
          </h3>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
