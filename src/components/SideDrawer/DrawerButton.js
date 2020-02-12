import React from 'react';

const DrawerButton = (props) => (
    <button 
        className="drawer-button"
        onClick={props.openSideDrawer}
    >
        <div className="drawer-button_line" />
        <div className="drawer-button_line" />
        <div className="drawer-button_line" />
    </button>
);

export default DrawerButton;