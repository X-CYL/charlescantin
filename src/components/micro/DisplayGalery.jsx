import React from 'react';



const DisplayGalery = (props) => {
    return (
        <div>
            <h4> {props.categorie} </h4>
            <div className= 'displayGaleryFormat'>
                <figure>
                    <img src = { props.src } alt= { props.alt }></img>
                    <figcaption>{ props.figcaption }</figcaption>
                </figure>
            </div>
        </div>
    );
};

export default DisplayGalery;