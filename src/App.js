import React, { useState } from "react";
import Header from "./Components/Header";
import ShoeList from "./Components/ShoeList";
import Cart from "./Components/Cart";
import "./App.css";

function App() {
  const shoes = [
    { id: 1, name: "Air Zoom Pegasus", price: 120, image: "/shoe2.jpg" },
    { id: 2, name: "React Infinity Run", price: 150, image: "shoe5.jpg" },
    { id: 3, name: "Metcon 8", price: 130, image: "shoe6.jpg" },
    { id: 4, name: "Air Force 1", price: 100, image: "shoe1.webp" }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    const exists = cart.find((item) => item.id === shoe.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const removeFromCart = (shoeId) => {
    const exists = cart.find((item) => item.id === shoeId);
    if (exists.quantity === 1) {
      setCart(cart.filter((item) => item.id !== shoeId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  return (
    <>
     
    <div className="container">
      <Header />
      <ShoeList shoes={shoes} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
    </>
  );
 
}

export default App;
