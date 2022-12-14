import React from 'react';



const DisplayGalery = (props) => {
    return (
        <div>
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