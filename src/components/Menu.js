import React from "react";
import "./Menu.css";

export default function Menu({ menuItems }) {
  return (
    <section className="menu-section">
      {menuItems.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;

        return (
          <article key={id} className="menu-item-container">
            <div className="menu-item">
              <div className="food-img-container">
                <img src={img} alt={title} className="food-img" />
              </div>
              <div className="menu-details">
                <div className="menu-title-container">
                  <h1 className="menu-title">{title}</h1>
                  <div className="menu-price">${price}</div>
                </div>
                <div className="menu-title_underline-container">
                  <div className="menu-title-underline"></div>
                </div>
                <p className="menu-desc">{desc}</p>
                <div className="buy-btn_container">
                  <button className="buy-btn">buy</button>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
