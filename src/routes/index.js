import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./../containers/Home";
import Details from "./../containers/Details";
import Discover from "./../containers/Discover";
import Favorites from "./../containers/Favorites";
import PageNotFound from "./../components/PageNotFound";
import Header from "./../components/Header";
// import Footer from "./../components/Footer";

const Routes = () => (
  <BrowserRouter basename="moviedb">
    <div id="site-content">
      <Header />
      <main className="main-content">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/discover" component={Discover} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/details/:mediaType/:mediaId" component={Details} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  </BrowserRouter>
);

export default Routes;
