import React, { useState, createContext } from "react";
import "./App.css";
import Header from "components/header/Header.js";
import DayPhoto from "components/dayPhoto/dayPhoto/DayPhoto";
import Album from "components/album/Album";

export const CartContext = createContext(null);

function App() {
  const [cart, setCart] = useState([]);
  const [cartDetailes, setCartDetailes] = useState({
    price: "",
    img: {},
    name: "",
  });
  return (
    <div className="App">
      <div className="main">
        <CartContext.Provider
          value={{ cart, setCart, cartDetailes, setCartDetailes }}
        >
          <Header />
          <DayPhoto />
          <Album />
        </CartContext.Provider>
      </div>
    </div>
  );
}

export default App;
