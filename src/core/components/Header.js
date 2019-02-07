import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <header className="site-header">
            <div className="container">
                <Link to='/' id="branding">
                    <img src="/assets/images/logo.png" alt="" className="logo" />
                    <div className="logo-copy">
                        <h1 className="site-title">The Movie Database (TMDb)</h1>
                        <small className="site-description">Is a community built movie and TV database.</small>
                    </div>
                </Link>
        
                <div className="main-navigation">
                    <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                    <ul className="menu">
                        <li className="menu-item"><Link to='/'>Home</Link></li>
                        <li className="menu-item"><Link to='/discover'>Discover</Link></li>
                        <li className="menu-item"><Link to='/favorites'>Favorites</Link></li>
                    </ul>
                    <form className="search-form" role="search">
                        <input type="text" name="query" id="query" placeholder="Search..." />
                        <button><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="mobile-navigation"></div>
            </div>
        </header>
    );
  }
}

export default Header;
