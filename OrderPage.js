// src/pages/OrderPage.js
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import styles from '../styles/OrderPage.module.css'; // Import the CSS module

const OrderPage = () => {
  const { cartItems, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    if (!name || !address || !paymentMethod) {
      alert('Please fill all the details');
      return;
    }

    alert(`Order placed successfully!\nName: ${name}\nAddress: ${address}\nPayment Method: ${paymentMethod}`);
    clearCart(); // Clear the cart after placing the order
  };

  return (
    <div className={styles.orderContainer}>
      <h2>Place Your Order</h2>
      {cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty. Please add items to your cart before placing an order.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map(item => (
              <li key={item.id} className={styles.cartItem}>
                <span>{item.name} - ₹{item.price}</span>
              </li>
            ))}
          </ul>
          <div className={styles.orderDetails}>
            <h3>Order Details</h3>
            <input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className={styles.inputField}
            />
            <input 
              type="text" 
              placeholder="Address" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              className={styles.inputField}
            />
            <select 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)}
              className={styles.inputField}
            >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
            <button className={styles.placeOrderButton} onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderPage;
