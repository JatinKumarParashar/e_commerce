import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/home";
import Navbar from "./component/navbar";
import Products from "./component/Products";
import Contact from "./component/Contact";
import Product from "./component/Product";
import Cart from "./component/cart";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
      {/* <Home/> */}
    </>
  );
}

export default App;
