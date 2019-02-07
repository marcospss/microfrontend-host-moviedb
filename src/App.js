import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";
import Home from "./home/Home";
import Discover from './discover/Discover';
import Favorites from './favorites/Favorites';

import Header from './core/components/Header';
import Footer from './core/components/Footer';
import PageNotFound from './core/components/PageNotFound';
class App extends Component {
  render() {
    return (
      <Router>
        <div id="site-content">
          <Header />
          <main className="main-content">
                <div className="container">
                  <Switch>
                      <Route exact path="/" component={ Home } />
                      <Route path="/discover" component={ Discover } />
                      <Route path="/favorites" component={ Favorites } />
                      <Route component={ PageNotFound } />
                  </Switch>
                </div>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
