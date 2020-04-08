import React from 'react';

const Button = (props) => (
    <div className="button">
        <a href={props.link} target="_blank" rel="noopener noreferrer">{props.text}</a>
    </div>
);

export default Button;