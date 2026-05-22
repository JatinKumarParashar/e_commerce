import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Footer from "./footer";
// import { FaStar } from "react-icons/fa";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  console.log(`this is the id of product ${id}`);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      console.log(`this is after fetching product for backend ${response},`);
      setProduct(await response.json());
      console.log(`this is after setting product ${product}`);
    };
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="flex gap-5 mt-10 mx-10 mb-20">
          <div className="w-1/2 h-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="size-[500px] border border-gray-200 shadow-md hover:shadow-2xl p-2 not-even:hover:bg-[#C4E2F5]"
            />
          </div>
          <div className=" flex-row w-1/2 h-1/2  mt-auto ">
            <h4 className="font-bold text-3xl uppercase mb-10 text-gray-400">{product.category}</h4>
            <h1 className="font-semibold text-3xl uppercase mb-10">{product.title}</h1>
            {/* <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <FaStar />
          </p> */}
            <h3 className="font-bold text-3xl mb-10">$ {product.price}</h3>
            <p className="text-lg mb-10">{product.description}</p>
            <NavLink
              className="border border-[#2C5EAD] px-4 py-2 hover:bg-[#4BB8FA] rounded hover:text-[#2C5EAD]"
              onClick={() => addProduct(product)}
              to="/cart"
            >
              Add to Cart
            </NavLink>
            <NavLink to="/cart" className="border border-[#2C5EAD] bg-[#4BB8FA] rounded text-[#2C5EAD] hover:bg-[#1591DC] hover:text-[#C4E2F5] px-4 py-2 m-2">
              Go to Cart
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <ShowProduct />
      <Footer/>
    </>
  );
};

export default Product;
