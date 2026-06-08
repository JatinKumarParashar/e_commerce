import React from "react";
import { NavLink } from "react-router-dom";

// ProductCard renders a single product preview used inside the products grid.
// It combines the image, title, category and price into a clickable card.
const ProductCard = ({ product }) => {
  return (
    <article className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden bg-slate-100 p-6">
        <img
          className="mx-auto h-56 w-full max-w-45 object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="space-y-4 px-5 pb-6 pt-5">
        <div className="space-y-2">
          <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            {product.category}
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{product.title}</h3>
          <p className="text-sm text-slate-500">{product.description.substring(0, 100)}...</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-2xl font-bold text-slate-900">${product.price}</span>
          <NavLink
            to={`/products/${product.id}`}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Buy Now
          </NavLink>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
