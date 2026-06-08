import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, removeWishList } from "../../../store/action";

// Wishlist component shows saved products, letting users move items to cart
// or remove them from their favorites list.

const Wish = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleWishList);

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const remove = (product) => {
    dispatch(removeWishList(product));
  };

  if (state.length === 0) {
    return (
      <main className="min-h-[70vh] bg-slate-50 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl rounded-4xl bg-white p-10 text-center shadow-xl ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500">Wishlist</p>
          <h1 className="mt-6 text-4xl font-extrabold text-slate-900">Your wishlist is empty</h1>
          <p className="mt-4 text-slate-600">Save items you love and return later to purchase them.</p>
          <NavLink
            to="/products"
            className="mt-8 inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Browse Products
          </NavLink>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[80vh] bg-slate-50 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-4xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500">Wishlist</p>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900">Favorites saved for later</h1>
          <p className="mt-2 text-slate-600">Manage your saved items, move them to cart, or remove them whenever you want.</p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {state.map((product) => (
            <article key={product.id} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="grid gap-6 md:grid-cols-[152px_1fr]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[150px] w-[150px] rounded-3xl bg-slate-100 object-contain p-4"
                />
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-sky-500">{product.category}</p>
                    <h2 className="mt-3 text-xl font-semibold text-slate-900">{product.title}</h2>
                    <p className="mt-3 text-slate-600 line-clamp-3">{product.description}</p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                    <div className="flex flex-wrap gap-3">
                      <NavLink
                        to="/cart"
                        onClick={() => addProduct(product)}
                        className="inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                      >
                        Add to Cart
                      </NavLink>
                      <button
                        onClick={() => remove(product)}
                        className="inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Wish;
