import React, { useEffect, useState } from "react";
// import img from "../assets/mathematic book.jpg";
import { NavLink } from "react-router-dom";
import ProductCard from "../productCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAndSearchItems } from "../../../../store/action";

// Products page displays the product catalog, handles category filters,
// and paginates the displayed product cards.
// import Footer from "./footer";
// import ProductCard from "./productCard";

const Products = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.searchItemsReducer);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchAndSearchItems(""));
  }, [dispatch]);

  useEffect(() => {
    const allItems = filteredItems.allItems || [];
    const filtered = filteredItems.filteredItems || allItems;
    setData(allItems);
    setFilter(filtered);
    setCurrentPage(1);
  }, [filteredItems]);

  const paginatedItems = filter.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.max(1, Math.ceil(filter.length / itemsPerPage));

  const filterProduct = (category) => {
    const filterproducts = data.filter((x) => x.category === category);
    setFilter(filterproducts);
    setCurrentPage(1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goPrevious = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const goNext = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  //   const liveSearch = (event) => {
  //     const value = event.target.value;
  //     setSearchItem(value);

  //     const filteredProducts = data.filter(
  //       (x) =>
  //         x.title.toLowerCase().includes(value.toLowerCase()) ||
  //         x.description.toLowerCase().includes(value.toLowerCase()),
  //     );

  //     setFilter(filteredProducts);
  //   };

  //   const search = (event) => {
  //     event.preventDefault();

  //     const filteredProducts = data.filter(
  //       (x) =>
  //         x.title.toLowerCase().includes(searchItem.toLowerCase()) ||
  //         x.description.toLowerCase().includes(searchItem.toLowerCase()),
  //     );

  //     setFilter(filteredProducts);
  //   };

  return (
    <section className="bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Shop the collection</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">Trending Products</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">Browse our curated selection of apparel, electronics, and accessories designed for effortless style.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5 mb-8">
          <button
            onClick={() => setFilter(data)}
            className="rounded-full border border-sky-500 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-500 hover:text-white"
          >
            All
          </button>
          <button
            onClick={() => filterProduct("electronics")}
            className="rounded-full border border-sky-500 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-500 hover:text-white"
          >
            Electronics
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className="rounded-full border border-sky-500 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-500 hover:text-white"
          >
            Men's Clothing
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className="rounded-full border border-sky-500 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-500 hover:text-white"
          >
            Women's Clothing
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className="rounded-full border border-sky-500 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-500 hover:text-white"
          >
            Jewelry
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {paginatedItems.length > 0 ? (
            paginatedItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <p className="text-lg font-semibold text-slate-900">No products available</p>
              <p className="mt-2 text-sm text-slate-600">Try selecting another category or clear the filter.</p>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl bg-white px-5 py-5 shadow-sm sm:flex-row">
          <button
            onClick={goPrevious}
            disabled={currentPage === 1}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => goToPage(pageNumber)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${currentPage === pageNumber
                      ? "bg-sky-500 text-white"
                      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          <button
            onClick={goNext}
            disabled={currentPage === totalPages}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
