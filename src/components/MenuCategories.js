import React from "react";
import "./MenuCategories.css";

function MenuCategories({ categories, filteredMenu }) {
  return (
    <section className="menu-category-container">
      <h1 className="menu-category-title">
        Choose your Menu<span className="dot-a">.</span>
        <span className="dot-b">.</span>
        <span className="dot-c">.</span>
      </h1>

      <div className="category-btn-container btn">
        {categories.map((category, index) => {
          return (
            <button
              className="category-btn"
              key={index}
              onClick={() => filteredMenu(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default MenuCategories;
