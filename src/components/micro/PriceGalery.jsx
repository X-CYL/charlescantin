import React from 'react';

const PriceGalery = (props) => {
    return (
        <div>
            <div className= {props.className}>
                <img src = { props.src }  alt= { props.alt }></img>    
            </div>
        </div>
    );
};

export default PriceGalery;