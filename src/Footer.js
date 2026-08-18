import React from 'react';

function Footer () {
    return (
        <footer>
            <div class="footer-left">
                <a href="/" aria-label="Little Lemon Logo">
                <img src="logo.svg" alt="Little Lemon Logo" width="120" height="40">
                </a>
            </div>

            <nav>
                <ul>
                   <li><a href="/home">Home</a></li>
                   <li><a href="/about">About</a></li>
                   <li><a href="/menu">Menu</a></li>
                   <li><a href="/reservations">Reservations</a></li>
                   <li><a href="/order">Order Online</a></li>
                   <li><a href="/login">Login</a></li>
                </ul>
            </nav>

            <address>
                <ul>
                    <li>123 Main Street</li>
                    <li>Anytown, USA 12345</li>
                    <li>(123) 456-7890</li>
                    <li>Email: info@littlelemon.com</li>
                </ul>
            </address>

            <nav>
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