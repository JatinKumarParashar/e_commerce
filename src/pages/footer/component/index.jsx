import React from "react";
import { NavLink } from "react-router-dom";
import { LuInstagram } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
// Footer renders site-wide navigation links and support info.
// It appears under the main content on every page.
const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-sky-400">LA COLLECTION</h2>
          <p className="text-sm text-slate-300 max-w-xs leading-6">
            Discover premium fashion and everyday essentials with fast delivery, secure checkout, and curated collections for every style.
          </p>
          <p className="text-sm text-slate-400">Shop the latest trends for men, women, and accessories.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-100 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <NavLink to="/products" className="hover:text-sky-300 transition-colors">Products</NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="hover:text-sky-300 transition-colors">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/wish" className="hover:text-sky-300 transition-colors">Wishlist</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-100 mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="hover:text-sky-300 transition-colors"><NavLink to="/contact">Contact Us</NavLink></li>
            <li className="hover:text-sky-300 transition-colors"><NavLink to="/faq">FAQs</NavLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-100 mb-4">Contact</h3>
          <p className="text-sm text-slate-300 leading-6">
            Email: abc@gmail.com
            <br />
            Phone: +91 9876543210
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p className="font-semibold text-slate-100">Follow Us</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com" className="text-slate-300 hover:text-sky-300 transition-colors" target="_blank" rel="noopener noreferrer"><LuInstagram /></a>
              <a href="https://www.facebook.com" className="text-slate-300 hover:text-sky-300 transition-colors" target="_blank" rel="noopener noreferrer"><LuFacebook /></a>
              <a href="https://www.twitter.com" className="text-slate-300 hover:text-sky-300 transition-colors" target="_blank" rel="noopener noreferrer"><LuTwitter /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} LA COLLECTION. Made for modern shoppers who want style, value, and fast delivery.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
