import React from 'react';

const DefaultButton = (props) => {
    return (
        <div>
            <button name="button" type={ props.type } className={ props.className }>{ props.label }</button>
        </div>
    );
};

export default DefaultButton;