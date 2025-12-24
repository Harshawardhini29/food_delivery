// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('http://localhost:5000/api/dishes')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch dishes");
        }
        return response.json();
      })
      .then((data) => {
        setDishes(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (dish) => {
    addToCart(dish);
  };

  return (
    <div className={styles['homepage-container']}>
      <h2 className={styles['homepage-header']}>Welcome to Our Restaurant</h2>

      {loading && <p className={styles['loading']}>Loading dishes...</p>}
      {error && <p className={styles['error-message']}>Error: {error}</p>}

      <div className={styles['dishes-list']}>
        {dishes.length > 0 ? (
          dishes.map((dish) => (
            <div key={dish._id} className={styles['dish-item']}>
              <img
                src={dish.image || 'https://via.placeholder.com/200x150?text=No+Image'}
                alt={dish.name}
                className={styles['dish-image']}
              />
              <h3 className={styles['dish-name']}>{dish.name}</h3>
              <p className={styles['dish-price']}>₹{dish.price}</p>
              <button
                className={styles['add-to-cart-btn']}
                onClick={() => handleAddToCart(dish)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No dishes found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
