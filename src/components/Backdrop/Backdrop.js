import React from 'react';

const Backdrop = (props) => (
    <div 
        className="backdrop" 
        onClick = {props.closeSideDrawer} 
    />
);

export default Backdrop;