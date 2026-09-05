import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {
    return (
        // navigation area
        <nav className="navigation-bar-wrapper" aria-label="Main Menu">

            <div className="nav-container">
                
                <div className="nav-logo">
                    <img src="/logo .svg" alt="Little Lemon Logo"/>
                </div>
                
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/order">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>

            </div>
        </nav>
    );
}

export default Nav;