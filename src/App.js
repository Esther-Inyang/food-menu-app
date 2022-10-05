import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import MenuCategories from "./components/MenuCategories";
import menuItemsData from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(menuItemsData);
  const [categories, setCategories] = useState([]);

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

      <MenuCategories />
      <Menu menuItems={menuItems} />
    </div>
  );
}

export default App;
