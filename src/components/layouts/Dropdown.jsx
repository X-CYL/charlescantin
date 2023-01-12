import React from "react";
import DefaultButton from "../micro/DefaultButton";

const Dropdown = () => {
  return (
    <>
        <div className="dropButton">
          <DefaultButton label="Menu" type="button" className="menuButton" />
        </div>
    </>
  );
};

export default Dropdown;
