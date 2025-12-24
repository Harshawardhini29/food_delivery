// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'; // Import the CSS module for the navbar styling

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLinks}>
        <Link to="/" className={styles.navLink}>Login</Link>
        <Link to="/home" className={styles.navLink}>Home</Link>
        <Link to="/cart" className={styles.navLink}>Cart</Link>
        <Link to="/order" className={styles.navLink}>Order</Link>
      </div>
    </div>
  );
};

export default Navbar;
