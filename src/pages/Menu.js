import React from "react";
import "../styles/Menu.css";
import Data from "../data/data";
import MenuItems from "../components/MenuItems";
function Menu() {
  return (
    <div className="menu">
      <div className="menuTitle">
        <div className="menuList">
          {Data.map((menuItem, key) => {
            return (
              <MenuItems
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
