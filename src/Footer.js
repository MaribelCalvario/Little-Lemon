import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer () {
    const location = useLocation();

    // Reusable handler
    const handleNavigationClick = (e, targetPath) => {
        if (location.pathname === targetPath) {
            e.preventDefault(); // Stop navigation if already on this page
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
        }
    };

    return (
        <footer className="footer-section">
            <div className="footer-logo">
                <Link to="/" onClick={(e) => handleNavigationClick(e, '/')} aria-label="Little Lemon Logo">
                    <img src="logo.png" alt="Little Lemon Logo" width="200" height="250" />
                </Link>
            </div>

            <nav className="footer-nav">
                <h5>Navigation</h5>
                <ul>
                        <li><Link to="/" onClick={(e) => handleNavigationClick(e, '/')}>Home</Link></li>
                        <li><Link to="/about" onClick={(e) => handleNavigationClick(e, '/about')}>About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/booking">Reservations</Link></li>
                        <li><Link to="/order">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

            <address className="footer-contact">
                <h5>Contact</h5>
                <ul>
                    <li>123 Main Street</li>
                    <li>Anytown, USA 12345</li>
                    <li>(123) 456-7890</li>
                    <li>Email: info@littlelemon.com</li>
                </ul>
            </address>

            <nav className="footer-socials">
                <h5>Social Media</h5>
                <ul>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
                
            </nav>
        </footer>
    );
}

export default Footer;