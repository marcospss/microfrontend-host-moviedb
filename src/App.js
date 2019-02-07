import React, { Component, Fragment } from 'react';
import { Route } from "react-router-dom";
import Home from "./home/Home";
import Discover from './discover/Discover';
import Favorites from './favorites/Favorites';

import Header from './core/components/Header';
class App extends Component {
  render() {
    return (
        <Fragment>
          <Header />
        <div>
          <Route path="/" exact component={ Home } />
          <Route path="/discover" component={ Discover } />
          <Route path="/favorites" component={ Favorites } />
        </div>
        </Fragment>
    );
  }
}

export default App;
