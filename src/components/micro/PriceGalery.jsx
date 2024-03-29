import React from "react";

const PriceGalery = (props) => {
  return (
    <div className="mainContainertarifs">
      <div className="containertarifs">
        <div className="picturePrice">
          <div>
            <img src={props.src1} alt={props.alt1}></img>
          </div>
          <div>
            <img src={props.src2} alt={props.alt2}></img>
          </div>
        </div>
        <div className="container-col">
          <span> {props.titre}</span>
          <span> {props.description}</span>
        </div>
        <p> {props.price} </p>
      </div>
    </div>
  );
};

export default PriceGalery;
