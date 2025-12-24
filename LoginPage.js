// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/LoginPage.module.css'; // Import the CSS module

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Login and Sign Up
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      // Send login data to the backend for validation
      alert(`Logged in successfully! Welcome, ${username}`);
      navigate('/home'); // Redirect to HomePage after successful login
    } else {
      alert('Please enter both username and password');
    }
  };

  const handleSignUp = () => {
    if (username && password) {
      // Send sign-up data to the backend to create a new account
      alert(`Account created successfully! Welcome, ${username}`);
      setIsSignUp(false); // Switch to Login after successful sign-up
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>

        <input
          className={styles.inputField}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          className={styles.loginButton} 
          onClick={isSignUp ? handleSignUp : handleLogin}>
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>

        <div className={styles.toggleLink}>
          <span>
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <a
              href="#!"
              onClick={() => setIsSignUp(!isSignUp)} // Toggle between Sign Up and Login
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
