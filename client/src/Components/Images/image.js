import React from 'react';

const Image = (props) => {
    return (
        <div>
            <img {...props}></img>
            {props.children}
        </div>
    );
}

export default Image;