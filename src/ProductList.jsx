import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';

// The catalogue contains six houseplants in each of three categories.
export const products = [
  {
    id: 'ap-1', category: 'Air-Purifying Plants', name: 'Snake Plant', price: 18,
    description: 'An architectural favourite that thrives with little fuss.',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b3b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'ap-2', category: 'Air-Purifying Plants', name: 'Peace Lily', price: 22,
    description: 'Elegant green leaves and graceful white blooms.',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'ap-3', category: 'Air-Purifying Plants', name: 'Areca Palm', price: 35,
    description: 'A tropical, feathery plant for a bright corner.',
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a917d9b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'ap-4', category: 'Air-Purifying Plants', name: 'Spider Plant', price: 16,
    description: 'A cheerful, easy-growing plant with arching leaves.',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'ap-5', category: 'Air-Purifying Plants', name: 'Rubber Plant', price: 28,
    description: 'Glossy, deep-green leaves add a bold natural accent.',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'ap-6', category: 'Air-Purifying Plants', name: 'Boston Fern', price: 20,
    description: 'Lush, textured fronds for a soft, leafy look.',
    image: 'https://images.unsplash.com/photo-1597055181449-1a4e8e3b4a69?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'lm-1', category: 'Low-Maintenance Plants', name: 'Golden Pothos', price: 15,
    description: 'A forgiving trailing plant that brightens shelves.',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'lm-2', category: 'Low-Maintenance Plants', name: 'Monstera Deliciosa', price: 32,
    description: 'Iconic split leaves with a relaxed tropical feel.',
    image: 'https://images.unsplash.com/photo-1616479779745-68e7e5c9d4ef?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'lm-3', category: 'Low-Maintenance Plants', name: 'ZZ Plant', price: 24,
    description: 'Sculptural leaves and a wonderfully easy routine.',
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a4a9361?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'lm-4', category: 'Low-Maintenance Plants', name: 'Jade Plant', price: 19,
    description: 'A compact succulent with plump, oval leaves.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'lm-5', category: 'Low-Maintenance Plants', name: 'Parlour Palm', price: 26,
    description: 'A small-space palm that prefers a gentle routine.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'lm-6', category: 'Low-Maintenance Plants', name: 'Chinese Evergreen', price: 23,
    description: 'Beautiful patterned foliage for indirect light.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'su-1', category: 'Succulents & Cacti', name: 'Echeveria', price: 12,
    description: 'A rosette-shaped succulent for a sunny sill.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'su-2', category: 'Succulents & Cacti', name: 'Aloe Vera', price: 14,
    description: 'A striking succulent with upright fleshy leaves.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'su-3', category: 'Succulents & Cacti', name: 'Golden Barrel Cactus', price: 17,
    description: 'A sculptural cactus that loves bright light.',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'su-4', category: 'Succulents & Cacti', name: 'Haworthia', price: 11,
    description: 'A compact rosette with distinctive striped leaves.',
    image: 'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'su-5', category: 'Succulents & Cacti', name: 'String of Pearls', price: 21,
    description: 'Bead-like leaves cascade beautifully from a pot.',
    image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'su-6', category: 'Succulents & Cacti', name: 'Moon Cactus', price: 13,
    description: 'A colourful little cactus for a sunny desk.',
    image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=900&q=85',
  },
];

const categories = ['Air-Purifying Plants', 'Low-Maintenance Plants', 'Succulents & Cacti'];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="page-shell catalog-page">
      <section className="catalog-heading">
        <div>
          <p className="eyebrow">THE HOUSEPLANT COLLECTION</p>
          <h1>Find your kind of green.</h1>
          <p>Thoughtful greenery for sunny windows, cosy corners, and busy routines.</p>
        </div>
        <div className="catalog-note"><span>18</span><small>plants to explore</small></div>
      </section>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <div className="category-heading">
            <h2>{category}</h2>
            <span>{products.filter((product) => product.category === category).length} plants</span>
          </div>
          <div className="product-grid">
            {products.filter((product) => product.category === category).map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image-wrap">
                  <img className="product-image" src={product.image} alt={product.name} loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85';
                    }} />
                  <span className="product-tag">Plant pick</span>
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-card-bottom">
                    <strong className="price">${product.price.toFixed(2)}</strong>
                    <button
                      type="button"
                      className={`button ${isInCart(product.id) ? 'button-added' : 'button-primary'}`}
                      onClick={() => dispatch(addItem(product))}
                      disabled={isInCart(product.id)}
                      aria-label={isInCart(product.id) ? `${product.name} already added` : `Add ${product.name} to cart`}
                    >
                      {isInCart(product.id) ? '✓ Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
