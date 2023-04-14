import React from "react";
import DefaultButton from "../micro/DefaultButton";
import Navigation from "../micro/Navigation";

const Dropdown = () => {
  return (
    <>
        <div className="dropButton">
          <DefaultButton label="Menu" type="button" className="menuButton" />
          <Navigation />
        </div>
    </>
  );
};

export default Dropdown;
