import React from 'react';
import './App.css'; // Make sure your CSS file is imported here!

function Header() {
    return (
        // 1. This full-width band stretches the dark green background across the screen
        <header className="hero-section-background">
            
            {/* 2. This inner box centers and tightens the content layout */}
            <div className="hero-container">
                
                {/* Left Column: Text content and button */}
                <div className="hero-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional ecipes served with a modern twist.
                    </p>
                    <button className="reserve-btn">Reserve a Table</button>
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