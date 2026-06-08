import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart, addWishList } from "../../../../store/action/";

// ProductDetail page fetches a single product by id and shows detailed information.
// Users can add the product to cart or wishlist from this view.

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const addWish = (product) => {
    dispatch(addWishList(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    };
    getProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-6 py-20">
        <div className="rounded-3xl bg-white px-8 py-10 shadow-lg text-slate-700">Loading product...</div>
      </div>
    );
  }

  return (
    <main className="bg-slate-50 px-6 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start max-w-7xl">
        <div className="rounded-4xl bg-white p-6 shadow-xl ring-1 ring-slate-200 md:p-8">
          <img
            src={product.image}
            alt={product.title}
            className="mx-auto h-105 w-full max-w-105 object-contain"
          />
          <div className="mt-6 space-y-3 text-center">
            <span className="inline-flex rounded-full bg-sky-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              {product.category}
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{product.title}</h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">{product.description}</p>
          </div>
        </div>

        <div className="space-y-6 rounded-4xl bg-white p-6 shadow-xl ring-1 ring-slate-200 md:p-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Featured details</p>
            <div className="flex items-center justify-between rounded-3xl bg-slate-100 px-5 py-4">
              <span className="text-sm text-slate-600">Price</span>
              <span className="text-3xl font-bold text-slate-900">${product.price}</span>
            </div>
            <div className="grid gap-4 text-slate-600">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Rating</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">{product.rating?.rate ?? "N/A"} / 5</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Count in stock</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">{product.rating?.count ?? 0}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => addProduct(product)}
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-700"
            >
              Add to Cart
            </button>
            <NavLink
              to="/cart"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Go to Cart
            </NavLink>
            <button
              onClick={() => addWish(product)}
              className="w-full rounded-full bg-sky-50 px-6 py-3 text-base font-semibold text-sky-700 transition hover:bg-sky-100"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
