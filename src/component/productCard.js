import React from "react";
import { NavLink } from "react-router-dom";


const ProductCard = ({product}) => {
  return (
    <>
      <div>
        <div className="border border-gray-200 shadow-md k m-2 p-2 w-auto h-[400px] hover:shadow-2xl transition delay-75 hover:bg-[#C4E2F5] ">
                  <img
                    className="size-[250px] "
                    src={product.image}
                    alt={product.title}md
                  />
                  <h3 className="text-center font-bold mb-5">{product.title.substring(0,12)}...</h3>
                  {/* <h5>{product.description}</h5> */}
                  <h1 className="text-center font-bold m-5">{product.price}</h1>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="flex justify-center border border-[#000000] rounded font-bold w-20 mx-auto hover:bg-[#2C5EAD] hover:text-white  transition delay-75"
                  >
                    Buy Now
                  </NavLink>
                </div>
      </div>
    </>
  );
};

export default ProductCard;
