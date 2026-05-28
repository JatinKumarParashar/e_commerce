import React, { useEffect, useState } from "react";
// import img from "../assets/mathematic book.jpg";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import ProductCard from "./productCard";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [searchItem, setSearchItem] = useState("");
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.clone().json());
      setFilter(await response.clone().json());
      console.log(data);
    };
    getProduct();
  }, []);

  const filterProduct = (category) => {
    const filterproducts = data.filter((x) => x.category === category);
    setFilter(filterproducts);
  };

  const liveSearch = (event) => {
    const value = event.target.value;
    setSearchItem(value);

    const filteredProducts = data.filter(
      (x) =>
        x.title.toLowerCase().includes(value.toLowerCase()) ||
        x.description.toLowerCase().includes(value.toLowerCase()),
    );

    setFilter(filteredProducts);
  };

  const search = (event) => {
    event.preventDefault();

    const filteredProducts = data.filter(
      (x) =>
        x.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        x.description.toLowerCase().includes(searchItem.toLowerCase()),
    );

    setFilter(filteredProducts);
  };

  return (
    <>
      <div className="">
        <div className="flex gap-5 justify-center my-5 text-2xl">
          <button
            onClick={() => setFilter(data)}
            className=" border rounded px-2 py-1  transition delay-75 border-[#2C5EAD] hover:bg-[#2C5EAD] hover:text-white"
          >
            All
          </button>
          <button
            onClick={() => filterProduct("electronics")}
            className=" border rounded px-2 py-1  transition delay-75 border-[#2C5EAD] hover:bg-[#2C5EAD] hover:text-white"
          >
            Electronics
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className=" border rounded px-2 py-1  transition delay-75 border-[#2C5EAD] hover:bg-[#2C5EAD] hover:text-white"
          >
            Men's Clothing
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className=" border rounded px-2 py-1  transition delay-75 border-[#2C5EAD] hover:bg-[#2C5EAD] hover:text-white"
          >
            Women's Clothing
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className=" border rounded px-2 py-1  transition delay-75 border-[#2C5EAD] hover:bg-[#2C5EAD] hover:text-white"
          >
            Jewelery
          </button>
          <div className="flex gap-">
            {/*  FIXED: Removed invalid HTML attribute type="search" from form tag */}
            <form onSubmit={search} className="flex h-auto items-center gap-2">
              <input
                type="text"
                value={searchItem}
                onChange={liveSearch}
                required
                className="border border-[#2C5EAD] rounded px-2 py-1 outline-none text-black"
              />

              <button
                type="submit"
                className="border border-[#2C5EAD] rounded px-2 py-1 transition delay-75 hover:bg-[#2C5EAD] hover:text-white"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-4 shadow-2xl m-20 p-2 gap-2">
          {filter.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;
