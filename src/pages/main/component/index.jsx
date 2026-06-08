import React, { useEffect, useState } from 'react';
import banner from "../../../assets/banner.jpg";
import hero from "../../../assets/hero.png";
import { NavLink } from 'react-router-dom';
import Products from '../../products/component/products';

// Main page is the storefront landing page with hero sliders
// and featured product previews pulled from the Products component.
const Main = () => {
  const slides = [
    {
      id: 1,
      eyebrow: 'LA COLLECTION',
      title: 'Elevate your wardrobe with modern essentials and signature styles.',
      description: 'Discover curated fashion for every season, fast shipping, and effortless styling built for the modern shopper.',
      image: banner,
      ctaPrimary: 'Shop Collections',
      ctaSecondary: 'Contact Support',
      linkPrimary: '/products',
      linkSecondary: '/contact',
    },
    {
      id: 2,
      eyebrow: 'NEW SEASON',
      title: 'Fresh arrivals for every mood and every moment.',
      description: 'Browse standout looks created for comfort, confidence, and everyday effortless style.',
      image: hero,
      ctaPrimary: 'Explore Now',
      ctaSecondary: 'Need Help?',
      linkPrimary: '/products',
      linkSecondary: '/contact',
    },
    {
      id: 3,
      eyebrow: 'LIMITED EDITION',
      title: 'Shop bold staples and timeless essentials today.',
      description: 'Find your next favorite outfit with items curated for premium fit and modern silhouettes.',
      image: banner,
      ctaPrimary: 'View Best Sellers',
      ctaSecondary: 'Support Team',
      linkPrimary: '/products',
      linkSecondary: '/contact',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    let frame = null;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setParallaxOffset(window.scrollY * 0.2);
        frame = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="relative w-full h-130 overflow-hidden sm:h-155">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.eyebrow}
                className="h-130 w-full object-cover transition-transform duration-700 ease-out will-change-transform min-h-screen min-w-screen"
                style={{ transform: `translateY(${parallaxOffset}px)` }}
              />
              <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/30 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-4xl px-6 py-20 sm:px-10 lg:px-16">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
                    {slide.eyebrow}
                  </p>
                  <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                    {slide.title}
                  </h1>
                  <p className="mt-6 max-w-2xl text-base text-slate-100 sm:text-lg">
                    {slide.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <NavLink
                      to={slide.linkPrimary}
                      className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-400/20 transition hover:bg-sky-500"
                    >
                      {slide.ctaPrimary}
                    </NavLink>
                    <NavLink
                      to={slide.linkSecondary}
                      className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                    >
                      {slide.ctaSecondary}
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentSlide === index ? 'bg-sky-400' : 'bg-white/70 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goPrevious}
            className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-lg transition hover:bg-white"
            aria-label="Previous slide"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-lg transition hover:bg-white"
            aria-label="Next slide"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14 sm:px-10 z-100"> 
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Premium quality</h2>
            <p className="mt-3 text-sm text-slate-600">Best-in-class products chosen for look, feel, and long-lasting comfort.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Fast delivery</h2>
            <p className="mt-3 text-sm text-slate-600">Quick order processing and reliable shipping for every purchase.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Customer care</h2>
            <p className="mt-3 text-sm text-slate-600">Support available for sizing, returns, and styling guidance.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <h2 className="text-2xl font-bold text-slate-900">Featured products</h2>
          <p className="mt-2 text-sm text-slate-600">Browse our top picks from the latest collection.</p>
        </div>
        <div className="mt-8">
          <Products />
        </div>
      </section>
    </main>
  );
};

export default Main;
