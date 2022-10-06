import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import MenuCategories from "./components/MenuCategories";
import data from "./data";

const allCategories = [
  "all",
  ...new Set(
    data.map((datum) => {
      return datum.category;
    })
  ),
];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filteredMenu = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const filterCat = data.filter((datum) => {
      return datum.category === category;
    });

    setMenuItems(filterCat);
  };

  return (
    <div className="app-container">
      <div className="page-title_container">
        <h1 className="page-title">
          <span className="your-food">Your Food</span>

          <span className="menu-texts_container">
            <span className="m">M</span>
            <span className="e">E</span>
            <span className="n">N</span>
            <span className="u">U</span>
          </span>

          <span className="menu-underline"></span>
        </h1>
      </div>

      <MenuCategories categories={categories} filteredMenu={filteredMenu} />
      <Menu menuItems={menuItems} />
    </div>
  );
}

export default App;
