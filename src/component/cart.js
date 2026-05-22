import React, { useEffect, useState } from "react";
import img from "../assets/mathematic book.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../redux/action";
import Footer from "./footer";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart);
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      console.log(
        `this is the object of getting product from database ${response}`,
      );
      setProducts(await response.json());
      console.log(`this is the cart product ${products}`);
    };
    getProduct();
  }, []);

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const ShowCart = () => {
    return (
      <>
        {state.map((product) => {
          return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
              <div className="flex">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      height="200px"
                      width="180px"
                      className=" ml-5 mb-10 border border-gray-200 shadow-md hover:shadow-2xl hover:bg-[#C4E2F5]"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center mx-auto">
                  <div className="">
                    <h3 className="text-3xl font-bold text-[#4BB8FA]">
                      {product.title}
                    </h3>
                    <p className="block flex justify-center font-semibold text-[#4BB8FA] m-3 text-lg">
                      {product.quantity} X ${product.price} = $
                      {product.quantity * product.price}
                    </p>
                    <div className="flex justify-center mt-3">
                      <button
                        className="px-3 hover:"
                        onClick={() => handleDel(product)}
                      >
                        <i className="px-3">
                          <svg
                            className="w-[38px] h-[38px] text-gray-800 dark:text-[#4BB8FA] hover:dark:text-[#1591DC]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.757-1a1 1 0 1 0 0 2h8.486a1 1 0 1 0 0-2H7.757Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </i>
                      </button>
                      <button
                        className="px-3"
                        onClick={() => handleAdd(product)}
                      >
                        <i className="px-3">
                          <svg
                            className="w-[38px] h-[38px] text-gray-800 dark:text-[#4BB8FA] hover:dark:text-[#1591DC]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const EmptyCart = () => {
    return (
      <>
        <div className="m-20 text-7xl text-[#1591DC]">
          <h1>Your cart is empty</h1>
        </div>
      </>
    );
  };

  return (
    <>
      {state.length === 0 && EmptyCart()}
      {state.length !== 0 && ShowCart()}

      <Footer />
    </>
  );
};

export default Cart;
