import React from "react";
import { NavLink } from "react-router-dom";
import logo from './../../assets/images/logo.png';

const Header = () => {
        return (
            <header className="site-header">
            <div className="container">
                <NavLink to='/' id="branding">
                    <img src={logo} alt="" className="logo" />
                    <div className="logo-copy">
                        <h1 className="site-title">The Movie Database (TMDb)</h1>
                        <small className="site-description">Is a community built movie and TV database.</small>
                    </div>
                </NavLink>
        
                <div className="main-navigation">
                    <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                    <ul className="menu">
                        <li className="menu-item"><NavLink activeClassName="current-menu-item" exact to='/'>Home</NavLink></li>
                        <li className="menu-item"><NavLink activeClassName="current-menu-item" to='/discover'>Discover</NavLink></li>
                        <li className="menu-item"><NavLink activeClassName="current-menu-item" to='/favorites'>Favorites</NavLink></li>
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
};

export default Header;
