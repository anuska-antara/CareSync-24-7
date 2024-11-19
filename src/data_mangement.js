import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., send to an API
        console.log('Contact Form Submitted:', contact);
        // Reset the form
        setContact({ name: '', email: '', message: '' });
    };

    const viewRecord = (recordName) => {
        alert(`Viewing record: ${recordName}`);
        // Implement the logic to view the record
    };

    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src="logo.jpg" alt="CareSync 24/7 Logo" />
                </div>
                <ul className="nav-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/real-time">Real-time Health Monitoring</a></li>
                    <li><a href="/ai-diagnostics">AI-driven Diagnostics</a></li>
                    {/* <li><a href="/data_management.js">Secure Data Management</a></li> */}
                </ul>
            </div>

            {/* Secure Data Management Section */}
            <div className="features">
                <h2>Secure Data Management</h2>
                <p>Our platform allows you to securely store and manage your health records. Below, you can access your past medical records and view detailed information.</p>

                <div className="data-records">
                    <div className="record-item">
                        <h3>Blood Test Results - 2024</h3>
                        <p>View your detailed blood test results from the last year. Download or share these securely with your healthcare provider.</p>
                        <button className="btn" onClick={() => viewRecord('Blood Test Results - 2024')}>View Record</button>
                    </div>
                    <div className="record-item">
                        <h3>Annual Physical Exam - 2023</h3>
                        <p>Access your annual physical exam report including doctor's notes, lab results, and suggested follow-ups.</p>
                        <button className="btn" onClick={() => viewRecord('Annual Physical Exam - 2023')}>View Record</button>
                    </div>
                    <div className="record-item">
                        <h3>MRI Scan - 2022</h3>
                        <p>Review your MRI scan images and the accompanying diagnostic report. Ensure your data is always available when you need it.</p>
                        <button className="btn" onClick={() => viewRecord('MRI Scan - 2022')}>View Record</button>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="contact">
                <h2>Contact Us</h2>
                <p>Have questions about your health data? Get in touch with us, and we’ll assist you in managing your health records securely.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={contact.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={contact.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            </div>

            {/* Footer */}
            {/* <footer>
                <p>&copy; 2024 CareSync 24/7. All rights reserved.</p>
            </footer> */}
        </div>
    );
};

export default App;