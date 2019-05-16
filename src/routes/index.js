import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./../containers/Home";
import Details from './../containers/Details';
import Discover from './../containers/Discover';
import Favorites from './../containers/Favorites';
import PageNotFound from './../components/PageNotFound';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/discover" component={ Discover } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/details/:mediaType/:mediaId" component={ Details } />
        <Route component={ PageNotFound } />
    </Switch>
);

export default Routes;