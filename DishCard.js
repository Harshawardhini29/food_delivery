import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DishCard = ({ dish }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const addToCart = () => {
    // Handle adding dish to the cart (could use context or localStorage)
    alert(`${dish.name} added to cart`);
  };

  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p>₹{dish.price}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
      />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default DishCard;
