import { useState, useEffect } from "react";

const DishesList = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dishes")  // Make sure backend URL is correct
      .then((response) => response.json())
      .then((data) => setDishes(data))
      .catch((error) => console.error("Error fetching dishes:", error));
  }, []);

  return (
    <div>
      <h2>Available Dishes</h2>
      {dishes.length === 0 ? (
        <p>No dishes available.</p>
      ) : (
        <ul>
          {dishes.map((dish) => (
            <li key={dish._id}>
              <strong>{dish.name}</strong> - ₹{dish.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DishesList;
