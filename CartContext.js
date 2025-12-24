// src/contexts/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (dish) => {
    setCartItems([...cartItems, dish]);
  };

  // Remove item from cart
  const removeFromCart = (dishId) => {
    setCartItems(cartItems.filter(item => item.id !== dishId));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, calculateTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
