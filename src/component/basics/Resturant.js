import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./menuCard";
import { filterByCategory } from "./filter";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const originalMenuData = Menu; // Store the original menu data

  const filteruse = (forall) => {
    if (forall === "All") {
      // If "All" is clicked, reset to the original menu data
      setMenuData(originalMenuData);
    } else {
      const updatedList = Menu.filter((curElem) => {
        return curElem.forall === forall;
      });
      setMenuData(updatedList);
    }
  };

  const filterItem = (category) => {
    const updatedList = filterByCategory(Menu, category);
    setMenuData(updatedList);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={() => filteruse("All")}>
            All
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("Dinner")}
          >
            Dinner
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
