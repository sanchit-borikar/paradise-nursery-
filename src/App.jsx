import React from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <header className={`site-header ${isLanding ? 'site-header-landing' : ''}`}>
      <Link to="/" className="brand" aria-label="Paradise Nursery home">
        <span className="brand-mark" aria-hidden="true">♧</span>
        <span>paradise<span className="brand-light">nursery</span></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/about">Our Story</NavLink>
        <NavLink to="/cart" className="nav-cart">
          Cart <span className="cart-count" aria-label={`${itemCount} items in cart`}>{itemCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-hero">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">A LITTLE MORE NATURE, EVERY DAY</p>
          <h1>Make room<br />for <em>green.</em></h1>
          <p className="hero-description">
            Thoughtfully chosen houseplants for every corner, every kind of home, and every stage
            of your plant-parent journey.
          </p>
          <div className="hero-actions">
            <Link to="/plants" className="button button-light">Get Started <span aria-hidden="true">↗</span></Link>
            <Link to="/about" className="hero-secondary-link">Get to know us</Link>
          </div>
          <div className="hero-note"><span className="hero-note-dot" /> GOOD PLANTS. GENTLE LIVING.</div>
        </div>
        <div className="hero-side-note" aria-hidden="true"><span>GROW YOUR OWN PARADISE</span><span>✳</span></div>
      </section>
      <section className="landing-benefits">
        <div><span className="benefit-icon">✳</span><div><strong>Green made simple</strong><p>Plants for beginners and enthusiasts.</p></div></div>
        <div><span className="benefit-icon">☼</span><div><strong>Find your fit</strong><p>Choose greenery for your space and routine.</p></div></div>
        <div><span className="benefit-icon">♡</span><div><strong>Carefully curated</strong><p>A collection made to bring joy home.</p></div></div>
      </section>
      <section className="landing-bottom">
        <div><p className="eyebrow">START SMALL. GROW HAPPY.</p><h2>Your next favourite<br />corner is waiting.</h2></div>
        <Link className="button button-primary" to="/plants">Explore the plants <span aria-hidden="true">→</span></Link>
      </section>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Paradise Nursery</span><span>Grown with a little love and a lot of green.</span></footer>
    </main>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
