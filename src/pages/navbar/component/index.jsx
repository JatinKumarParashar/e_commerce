
import React, { useEffect, useRef, useState } from 'react';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// import { searchItems } from '../../../store/reducer/handleData';
import { fetchAndSearchItems } from '../../../store/action';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const state = useSelector((state) => state.handleCart);
  const wishList = useSelector((state) => state.handleWishList);
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();
  const searchTimeoutRef = useRef(null);
  const inputRef = useRef(null);

  const searchItem = (event) => {
    const value = event.target.value;

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      dispatch(fetchAndSearchItems(value));
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 font-sans">

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-slate-900 cursor-pointer">
              LA COLLECTION
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 
                  `}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Utility Icons & Search */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                onChange={searchItem}
                placeholder="Search our collection..."
                className={`bg-slate-100 text-sm rounded-full py-2 pl-4 pr-10 w-64 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all ${showSearch ? 'block' : 'hidden'}`}
              />
              <button
                type="button"
                aria-label="Toggle search"
                onClick={() => {
                  setShowSearch((s) => {
                    const next = !s;
                    if (next) setTimeout(() => inputRef.current?.focus(), 0);
                    return next;
                  });
                }}
                className="absolute right-3 top-2.5 "
              >
                <Search className="h-4 w-4 text-slate-400" />
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-5 text-slate-700">

              <NavLink to="/wish" className="hover:text-slate-900 transition-colors relative group">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-white text-[10px] font-bold px-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {wishList.length}
                </span>
              </NavLink>

              <NavLink to="/cart" className="hover:text-slate-900 transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                  {state.length}
                </span>
              </NavLink>

              <button className="hover:text-slate-900 transition-colors">
                <NavLink to="/register"><User className="h-5 w-5" /></NavLink>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex items-center space-x-6">
              <NavLink to="/wish"><Heart className="h-6 w-6 text-slate-600" /></NavLink>
              <NavLink to="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-slate-600" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                  {state.length}
                </span>
              </NavLink>
              <User className="h-6 w-6 text-slate-600" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;