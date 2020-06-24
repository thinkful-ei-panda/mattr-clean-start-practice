import React from 'react'
import './Split.css'
function Split(props) {
    const combinedClassName = `split ${props.className}`;
    const newStyles = { flex: props.flexBasis };
    return (
        <div 
        className={combinedClassName}
        style={newStyles}
        >
            {/* This is the content of the split component. */}
            {props.children}
        </div>
      );
}

export default Split