import React from "react";
import { NavLink } from "react-router-dom";

// About page for LA COLLECTION.
// This component provides an overview of the brand, values, and calls to action.
const About = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        {/* Left column: brand story, feature cards, and primary CTAs */}
        <div>
          <p className="text-sm font-semibold text-sky-500 uppercase tracking-[0.2em]">About LA COLLECTION</p>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Modern fashion for every day, delivered with care.
          </h1>
          <p className="mt-6 text-slate-600 leading-8">
            At LA COLLECTION, we believe shopping should feel effortless, personal, and inspiring. Our curated collections bring together quality styles for women and men, plus accessories that complete the look.
          </p>

          {/* Key feature summaries */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Trusted Quality</h2>
              <p className="mt-3 text-slate-600">Every product is selected for style, durability, and value so you can shop with confidence.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Fast Delivery</h2>
              <p className="mt-3 text-slate-600">Enjoy smooth checkout and reliable shipping for every order, from new arrivals to daily essentials.</p>
            </div>
          </div>

          {/* Primary call-to-action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Shop New Arrivals
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Contact Support
            </NavLink>
          </div>
        </div>

        {/* Right column: mission statement and brand values */}
        <div className="rounded-4xl bg-sky-50 p-8 shadow-lg ring-1 ring-slate-200">
          <div className="space-y-6">
            <div>
              <span className="inline-block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Our Mission</span>
              <p className="mt-4 text-slate-600 leading-7">
                To make style accessible and effortless through curated collections, thoughtful service, and a seamless shopping experience.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Made for you</h3>
                <p className="mt-2 text-sm text-slate-600">Collections inspired by modern lifestyles and everyday confidence.</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Curated styling</h3>
                <p className="mt-2 text-sm text-slate-600">Discover outfits that feel polished, fresh, and easy to wear.</p>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Customer-first support</h3>
              <p className="mt-2 text-sm text-slate-600">Need help? Our team is ready to answer questions about product fit, orders, and returns.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
