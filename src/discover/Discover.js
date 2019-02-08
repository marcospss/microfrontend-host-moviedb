import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Discover extends Component {
  render() {
    return (
      <div className="page">
        <div className="breadcrumbs">
          <NavLink activeClassName="current-menu-item" exact to='/'>Home</NavLink>
          <span>Movie Review</span>
        </div>
        <article className="row">
          <div className="col-sm-6 col-md-3">

          </div>
        </article>
      </div>
    );
  }
}

export default Discover;
