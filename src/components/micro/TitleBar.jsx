import React from 'react';

const TitleBar = (props) => {
    return (
        <div className = "titleBar-title">
            <p>{ props.title }</p>
        </div>
    );
};

export default TitleBar;