import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import the Link component

function Nav () {
    return (
        // 1. Full-width outer band for the navigation area
        <nav className="navigation-bar-wrapper" aria-label="Main Menu">
            
            {/* 2. Narrow inner container that matches the 900px hero width constraint */}
            <div className="nav-container">
                
                <div className="nav-logo">
                    {/* Updated to use absolute root path for static assets */}
                    <img src="/logo .svg" alt="Little Lemon Logo"/>
                </div>
                
                <ul className="nav-links">
                    {/* 2. Swapped <a> for <Link>, and 'href' for 'to' */}
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