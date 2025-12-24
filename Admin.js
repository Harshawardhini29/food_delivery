import React, { useState } from "react";
import axios from "../services/api";
import Navbar from "../components/Navbar";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addDish = () => {
    axios.post("/dishes", { name, price }).then(() => {
      alert("Dish added!");
    });
  };

  return (
    <div>
      <Navbar />
      <h1>Admin Panel</h1>
      <input type="text" placeholder="Dish Name" onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <button onClick={addDish}>Add Dish</button>
    </div>
  );
}

export default Admin;
