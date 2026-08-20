import React from 'react';

function Footer () {
    return (
        /* We add our container class to align it with the 1440px grid layout */
        <footer className="container footer-section">
            <div className="footer-logo">
                <a href="/" aria-label="Little Lemon Logo">
                    {/* Added the self-closing slash at the end of the img tag */}
                    <img src="logo.png" alt="Little Lemon Logo" width="200" height="250" />
                </a>
            </div>

            <nav className="footer-nav">
                <h5>Navigation</h5>
                <ul>
                   <li><a href="/home">Home</a></li>
                   <li><a href="/about">About</a></li>
                   <li><a href="/menu">Menu</a></li>
                   <li><a href="/reservations">Reservations</a></li>
                   <li><a href="/order">Order Online</a></li>
                   <li><a href="/login">Login</a></li>
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
                    <li><a href="/facebook">Facebook</a></li>
                    <li><a href="/twitter">Twitter</a></li>
                    <li><a href="/instagram">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;