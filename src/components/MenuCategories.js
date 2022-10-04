import React from "react";
import "./MenuCategories.css";

function MenuCategories() {
  return (
    <section className="menu-category-container">
      <h1 className="menu-category-title">
        Select your Menu<span className="dot-a">.</span>
        <span className="dot-b">.</span>
        <span className="dot-c">.</span>
      </h1>
      <div className="category-btn-container">
        <button className="category-btn category-btn-a">btn</button>
        <button className="category-btn category-btn-b">btn</button>
        <button className="category-btn category-btn-c">btn</button>
        <button className="category-btn category-btn-d">btn</button>
      </div>
    </section>
  );
}

export default MenuCategories;
