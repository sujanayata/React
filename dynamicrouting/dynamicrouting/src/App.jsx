import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Navbar from "./Components/Navbar";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
