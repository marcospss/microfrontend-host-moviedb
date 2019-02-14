import React, { Component } from "react";
import { Link } from "react-router-dom";
class Favorites extends Component {
  render() {
    return (
      <div className="page">
        <div className="breadcrumbs">
          <Link to='/'>Home</Link>
          <span>Favorites</span>
        </div>
        <div className="row">

          <article className="col-md-3">
          <div className="team">
          <figure className="team-image">

          </figure>
          <h2 className="team-name">ddddd</h2>
          <small className="team-title">dddd</small>
          </div>
          </article>

        </div>
      </div>
    );
  }
}

export default Favorites;
