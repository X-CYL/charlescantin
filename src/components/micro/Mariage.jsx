import React from "react";
import marie from "../../assets/pics/Alliance.jpg";

function Mariage(props) {
  return (
    <div className='container-Expo'>
      <div className="expo-Format">
        <img src={props.src} alt= {props.alt}></img>
        <h2> {props.h2} </h2>
      </div>
    </div>
  );
}

export default Mariage;
