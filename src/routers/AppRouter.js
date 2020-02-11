import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Test from '../components/Test';
import MenuContainer from '../components/MenuContainer';
import PageContainer from '../components/PageContaier';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <div className="container">
                <PageContainer />
                    <Switch>
                        <Route path="/" component={Test} exact={true} />
                        <Route path="/01" component={Test}  />
                        <Route path="/02" component={Test}  />
                        <Route path="/03" component={Test}  />
                        <Route path="/04" component={Test}  />
                        <Route path="/05" component={Test}  />
                    </Switch>
                <MenuContainer />
            </div>
        </div>
    </BrowserRouter>
);

export default AppRouter;