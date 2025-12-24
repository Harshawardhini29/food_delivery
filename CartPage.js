// src/pages/CartPage.js
import React from 'react';
import { useCart } from '../contexts/CartContext'; // Import Cart context
import styles from '../styles/CartPage.module.css'; // Import the CSS module

const CartPage = () => {
  const { cartItems, removeFromCart, calculateTotal, clearCart } = useCart();

  const totalAmount = calculateTotal();

  const handleRemoveFromCart = (dishId) => {
    removeFromCart(dishId);
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map(item => (
              <li key={item.id} className={styles.cartItem}>
                <span className={styles.itemName}>{item.name}</span> - ₹{item.price}
                <button className={styles.removeButton} onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.totalContainer}>
            <h3>Total: ₹{totalAmount}</h3>
            <button className={styles.clearCartButton} onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
