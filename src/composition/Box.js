import React from 'react'
import "./Box.css"

export default function Box(props) {
    const propsClassNameAppend = `box ${props.className}`
    const propsStyle1 = { flex: props.flexBasis }
    return (
         <div 
            className= {propsClassNameAppend}
            style={propsStyle1} 
            >
             {props.children}
            </div>
    );
}
