import React from "react";
import "./styles.css";

const CareSync = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="logo.jpg" alt="CareSync 24/7 Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Real-time Health Monitoring Section */}
      <section className="content">
        <h2>Real-time Health Monitoring</h2>
        <p>
          Our Real-time Health Monitoring feature allows you to stay updated
          with your vital signs, such as heart rate, blood pressure, and glucose
          levels, from anywhere at any time. Through our app, you can receive
          alerts and reminders for your medication, and share this data with
          your healthcare provider in real-time.
        </p>
        <ul>
          <li>Track Vitals</li>
          <li>Medication Reminders</li>
          <li>24/7 Health Data Access</li>
          <li>Instant Sharing with Healthcare Providers</li>
        </ul>
      </section>

      {/* Footer */}
      {/* <footer>
        <p>&copy; 2024 CareSync 24/7. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default CareSync;