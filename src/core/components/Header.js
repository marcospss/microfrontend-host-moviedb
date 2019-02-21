import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from './../../assets/images/logo.png';
import Search from './Search'; 
const Header = () => {
    return (
        <header className="site-header">
            <div className="container">
                <Link to='/' id="branding">
                    <img src={logo} alt="" className="logo" />
                    <div className="logo-copy">
                        <h1 className="site-title">The Movie Database (TMDb)</h1>
                        <small className="site-description">Is a community built movie and TV database.</small>
                    </div>
                </Link>
        
                <div className="main-navigation">
                    <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                    <ul className="menu">
                        <li className="menu-item"><NavLink activeClassName="current-menu-item" exact to='/'>Home</NavLink></li>
                        <li className="menu-item"><NavLink activeClassName="current-menu-item" to='/discover'>Discover</NavLink></li>
                        <li className="menu-item"><NavLink activeClassName="current-menu-item" to='/favorites'>Favorites</NavLink></li>
                    </ul>
                    <Search />
                </div>
                <div className="mobile-navigation"></div>
            </div>
        </header>
    );
};

export default Header;
