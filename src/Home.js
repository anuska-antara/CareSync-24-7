import React from 'react';
import './Home.css';
import logo from "./logo.jpg";

const Home = () => {
    return (
        <div className="home">

            <div className="navbar" style={{background: 'black', opacity: '0.7'}}>
                <div className="logo">
                    <img src={logo} alt="CareSync 24/7 Logo" />
                </div>
                    <ul className="nav-links">
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/data-management">Data Management</a></li>
                    <li><a href="/ai-diagnostics">AI-driven Diagnostics</a></li>
                    <li><a href="/real-time">Real-Time Health Monitoring</a></li>
                    <li><a href="/feature">Features</a></li>
                    {/* <li><a href="/data_management.js">Secure Data Management</a></li> */}
                </ul>
            </div>

            <section className="hero">
                <h1>Welcome to CareSync 24/7</h1>
                <p>Your personalized AI-driven health management system.</p>
            </section>

            <section className="features">
                <h2>Features</h2>
                <div className="feature-grid">
                    <div className="feature-item">
                        <h3>AI Diagnostics</h3>
                        <p>Analyze your health data with our advanced AI tools.</p>
                        <a href="/ai-diagnostics" className="btn">Explore</a>
                    </div>
                    <div className="feature-item">
                        <h3>Data Management</h3>
                        <p>Securely store and manage your medical records.</p>
                        <a href="/data-management" className="btn">Explore</a>
                    </div>
                    <div className="feature-item">
                        <h3>Health Monitoring</h3>
                        <p>Track your real-time health stats effortlessly.</p>
                        <a href="/monitoring" className="btn">Explore</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
