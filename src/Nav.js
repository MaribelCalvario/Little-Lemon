import React from 'react';

function Nav () {
    return (
        // 1. Full-width outer band for the navigation area
        <nav className="navigation-bar-wrapper">
            
            {/* 2. Narrow inner container that matches the 900px hero width constraint */}
            <div className="nav-container">
                
                <div className="nav-logo">
                    {/* Fixed the file path typo by removing the space in "logo .svg" */}
                    <img src="logo .svg" alt="Little Lemon Logo"/>
                </div>
                
                <ul className="nav-links">
                    <li ><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>

            </div>
        </nav>
    );
}

export default Nav;