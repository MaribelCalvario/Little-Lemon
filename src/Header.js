import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="hero-section-background">
            
            <div className="hero-container">
                
                {/* Left Column: Text content and button */}
                <div className="hero-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional ecipes served with a modern twist.
                    </p>
                    <Link to="/booking" className="reserve-btn">
                        Reserve a Table
                    </Link>
                </div>
                
                {/* Right Column: Handles the floating portrait image placement */}
                <div className="hero-image-wrapper">
                    <img 
                        className="hero-img" 
                        src="restauranfood.jpg" 
                        alt="Little Lemon Restaurant Food"
                    />
                </div>

            </div>
        </header>
    );
}

export default Header;