import React from 'react';
import DrawerButton from './SideDrawer/DrawerButton';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

export default class Test extends React.Component {
    constructor(props){ 
        super(props);

        this.state = {
            isOpen: false,

        };
    }

    closeSideDrawer = () => {
        this.setState({ isOpen: false });
    };

    openSideDrawer = (prevState) => {
        this.setState({ isOpen: !prevState.isOpen });
    };

    render() {
        let sideDrawer;
        let backdrop;

        if (this.state.isOpen) {
            sideDrawer = <SideDrawer />;
            backdrop = <Backdrop closeSideDrawer = {this.closeSideDrawer} />;
        }
        return (
            <div>
                <DrawerButton 
                    openSideDrawer = {this.openSideDrawer}
                />
                {sideDrawer}
                {backdrop}
            </div>
        );
    }
}

