import React from "react";
import Hamburger from "../../assets/pics/charte/hamburger-menu2.png";
import menuLogo from "../../assets/pics/charte/home.png";
import menuGalery from "../../assets/pics/charte/galery.png";

const Dropdown = () => {
  return (
    <div>
      <div className="menu-container">
        <div className="menu-trigger">
          <img src={Hamburger} alt="menu Hamburger"></img>
        </div>
      </div>
      <div className="dropdown-menu">
        <ul>
          <DropdownItem img={menuLogo} text="accueil" link="#" />
          <DropdownItem img={menuGalery} text="Gallerie" link="#" />
        </ul>
      </div>
    </div>
  );
};
function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img} alt="logo maison qui est le menu"></img>
      <a href={props.link}> {props.text}</a>
    </li>
  );
}

export default Dropdown;
