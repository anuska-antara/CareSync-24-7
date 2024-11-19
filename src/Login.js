import React, { useState } from 'react';
import './styles.css'; // Include the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };

    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.status === 200) {
      alert(result.message);
      window.location.href = '/home';
    } else {
      alert(result.message);
    }
  };

  // Handle Forgot Password click
  const handleForgotPassword = async () => {
    const email = prompt('Please enter your email to reset your password:');

    if (email) {
      const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      alert(result.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        <a href="#" id="forgotPassword" onClick={handleForgotPassword}>
          Forgot Password?
        </a>
      </p>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default Login;