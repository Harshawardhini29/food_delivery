// frontend/src/components/Cart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Adding item to cart
  const addToCart = (dish) => {
    const updatedCart = [...cart, dish];
    setCart(updatedCart);

    // Calculate the total price
    const price = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(price);
  };

  // Place the order
  const placeOrder = async () => {
    try {
      const orderDetails = {
        cart: cart,
        totalPrice: totalPrice,
        customerName: 'John Doe', // Can be dynamically collected
        customerAddress: '123 Street', // Can be dynamically collected
      };

      // Send order details to the backend
      const response = await axios.post('http://localhost:5000/api/order', orderDetails);
      console.log('Order placed successfully:', response.data);
    } catch (error) {
      console.error('Error placing the order:', error);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((dish, index) => (
          <li key={index}>{dish.name} - ${dish.price}</li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
