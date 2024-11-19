import React from 'react';
import './App.css';

const FeaturesPage = () => {
    return (
        <div className="features-page" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', padding: '20px' }}>
            {/* Navbar */}
            <nav className="navbar" style={{ backgroundColor: '#00796b', padding: '10px' }}>
                <div className="logo">
                    <img src="logo.jpg" alt="CareSync 24/7 Logo" className="logo-img" />
                </div>
                <ul className="nav-links" style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', padding: 0 }}>
                    <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                    <li><a href="/features" style={{ color: 'white', textDecoration: 'none' }}>Features</a></li>
                    <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
                </ul>
            </nav>

            {/* Header */}
            <header style={{ textAlign: 'center', padding: '30px 0', backgroundColor: '#61dafb', color: 'white' }}>
                <h1>Our Features</h1>
                <p>Explore how CareSync 24/7 is revolutionizing healthcare with technology.</p>
            </header>

            {/* Features Section */}
            <section className="features" style={{ display: 'grid', gap: '20px', padding: '20px' }}>
                {/* Feature 1: AI Chatbot */}
                <div className="feature" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ color: '#00796b' }}>Interactive AI Chatbot for Diagnostics</h2>
                    <p>Experience personalized, AI-driven health diagnostics. Ask questions about your symptoms and receive tailored responses to help guide your next steps.</p>
                    <a href="/ai-diagnostics" style={{ color: '#2196f3', textDecoration: 'none' }}>Learn More →</a>
                </div>

                {/* Feature 2: Secure Data Management */}
                <div className="feature" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ color: '#00796b' }}>Secure Data Management</h2>
                    <p>Store and manage your health records securely with easy access to your data anytime, anywhere.</p>
                    <a href="/data-management" style={{ color: '#2196f3', textDecoration: 'none' }}></a>
                </div>

                {/* Feature 3: Real-time Healthcare */}
                <div className="feature" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ color: '#00796b' }}>Real-time Healthcare Monitoring</h2>
                    <p>Stay updated on your health metrics with real-time monitoring and alerts to ensure your well-being.</p>
                    <a href="/real-time" style={{ color: '#2196f3', textDecoration: 'none' }}>Learn More →</a>
                </div>
            </section>

            {/* Footer */}
            {/* <footer style={{ textAlign: 'center', marginTop: '30px', padding: '10px', backgroundColor: '#00796b', color: 'white' }}>
                <p>&copy; 2024 CareSync 24/7. All rights reserved.</p>
            </footer> */}
        </div>
    );
};

export default FeaturesPage;