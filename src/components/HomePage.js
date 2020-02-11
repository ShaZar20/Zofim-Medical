import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Test from './Test';

const HomePage = () => (
    <BrowserRouter>
    <div className="container">
        <div className="page-container">
                <Switch>
                    <Route path="/" component={Test} exact={true} />
                    <Route path="/01" component={Test}  />
                    <Route path="/02" component={Test}  />
                    <Route path="/03" component={Test}  />
                    <Route path="/04" component={Test}  />
                    <Route path="/05" component={Test}  />
                </Switch>
        </div>
        <div className="menu-container">
            <div className="user-box">
            </div>
            <div className="menuSub-container">
                <div className="box">
                    <NavLink to="/01" className="link" >01</NavLink>
                </div>
                <div className="box">
                    <NavLink to="/02" className="link" >02</NavLink>    
                </div>
                <div className="box">
                    <NavLink to="/03" className="link" >03</NavLink>    
                </div>
                <div className="box">
                    <NavLink to="/04" className="link" >04</NavLink>    
                </div>
                <div className="box">
                    <NavLink to="/05" className="link" >05</NavLink>    
                </div>
            </div>
        </div>
    </div>
    </BrowserRouter>
);

export default HomePage;
