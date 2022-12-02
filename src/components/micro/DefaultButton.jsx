import React from 'react';

const DefaultButton = ({label}) => {
    return (
        <div className="defaultButton">
            <button type="button" className="menuButton">{label}</button>
        </div>
    );
};

export default DefaultButton;