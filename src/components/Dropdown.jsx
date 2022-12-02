import React from "react";
import menuButton from "../assets/pics/charte/icons8-menu-squared-96.png";
import DefaultButton from "./micro/DefaultButton";

const Dropdown = () => {
  return (
    <div className="menuContainer">
      <div className="menuTrigger">
        <img src={menuButton} alt="bouton menu"></img>
      </div>
      <div classname="dropdownmenu">
        <ul>
          <DropdownItem />
        </ul>
      </div>
    </div>
  );
};

function DropdownItem({ label }) {
  return <DefaultButton label="menu" />;
}

export default Dropdown;
