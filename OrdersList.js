import { useState, useEffect } from "react";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders") // Make sure backend URL is correct
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul>
  {orders.map((order) => (
    <li key={order._id}>
      <strong>Order ID:</strong> {order._id} <br />
      {order.dishes.map((item, index) => (
        <div key={index}>
          <strong>Dish:</strong> {item.dishId.name} <br />
          <strong>Quantity:</strong> {item.quantity} <br />
        </div>
      ))}
      <strong>Total Price:</strong> ₹{order.totalPrice} <br />
      <strong>Status:</strong> {order.status || "Pending"} <br />
    </li>
  ))}
</ul>

      )}
    </div>
  );
};

export default OrdersList;
