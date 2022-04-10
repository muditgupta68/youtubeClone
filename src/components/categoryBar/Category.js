import React, { useState } from "react";
import "./_category.scss";

const category = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art ",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];

const Category = () => {
  const [Category, setCategory] = useState("All");

  return (
    <div className="categoryBar">
      {category.map((value, i) => {
        return (
          <span
            key={i}
            onClick={() => setCategory(value)}
            className={value === Category ? "active" : ""}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
};

export default Category;
