import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart, removeCart } from "../../../store/action";
import { NavLink } from "react-router-dom";

// Cart page shows items currently placed in the user's shopping cart.
// It allows quantity changes and removes items while showing summaries.

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart);

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const handleRemove = (item) => {
    dispatch(removeCart(item));
  }

  const totalSum = state.reduce((sum, product) => sum + product.quantity * product.price, 0);
  const deliveryCharge = state.length > 0 ? 20 : 0;

  if (state.length === 0) {
    return (
      <main className="min-h-[70vh] bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-4xl bg-white p-10 text-center shadow-xl ring-1 ring-slate-200">
          <h1 className="text-4xl font-extrabold text-slate-900">Your cart is empty</h1>
          <p className="mt-4 text-slate-600">Browse our collection and add your favorite items to get started.</p>
          <NavLink
            to="/products"
            className="mt-8 inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Continue Shopping
          </NavLink>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[80vh] bg-slate-50 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto grid gap-10 lg:grid-cols-[1.6fr_0.9fr] max-w-7xl">
        <section className="space-y-6">
          <div className="rounded-4xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-slate-900">Shopping cart</h2>
            <p className="mt-2 text-slate-600">Review your selected items and update quantities before checkout.</p>
          </div>

          <div className="space-y-4">
            {state.map((product) => (
              <article key={product.id} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-28 w-28 rounded-3xl bg-slate-100 object-contain p-3"
                  />
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-sky-500">{product.category}</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900">{product.title}</h3>
                      </div>
                      <span className="text-lg font-bold text-slate-900">${product.price}</span>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{product.description}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                        <button
                          onClick={() => handleDel(product)}
                          className="rounded-full bg-slate-200 px-2 py-1 text-slate-700 transition hover:bg-slate-300"
                        >
                          -
                        </button>
                        <span className="mx-3">{product.quantity}</span>
                        <button
                          onClick={() => handleAdd(product)}
                          className="rounded-full bg-slate-200 px-2 py-1 text-slate-700 transition hover:bg-slate-300"
                        >
                          +
                        </button>
                        
                      </div>
                      <button
                          onClick={() => handleRemove(product)}
                          className="rounded-full bg-slate-200 px-2 py-1 text-slate-700 transition hover:bg-slate-300"
                        >
                          Remove
                        </button>
                      <p className="text-sm text-slate-600">Subtotal: <span className="font-semibold text-slate-900">${(product.quantity * product.price).toFixed(2)}</span></p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-4xl bg-slate-900 p-6 text-slate-100 shadow-xl ring-1 ring-slate-800 sm:p-8">
          <div className="space-y-5">
            <div>
              <h2 className="text-3xl font-bold">Order summary</h2>
              <p className="mt-2 text-sm text-slate-300">Secure checkout with fast shipping estimates.</p>
            </div>
            <div className="space-y-3 rounded-3xl bg-slate-800 p-5">
              <div className="flex justify-between text-sm text-slate-400">
                <span>Subtotal</span>
                <span>${totalSum.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-400">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-sm text-slate-400">
                <span>Delivery charge</span>
                <span>${deliveryCharge.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-3xl bg-slate-950 p-5">
              <span className="text-lg text-slate-300">Grand total</span>
              <span className="text-2xl font-bold text-white">${(totalSum + deliveryCharge).toFixed(2)}</span>
            </div>
            <NavLink
              to="/cart"
              className="block rounded-full bg-sky-400 px-6 py-3 text-center text-base font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
