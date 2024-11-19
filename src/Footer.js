import React from 'react';
import './Footer.css'; // Add styles for the footer

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 CareSync 24/7. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/feature">Features</a></li>
            </ul>
        </footer>
    );
};

export default Footer;