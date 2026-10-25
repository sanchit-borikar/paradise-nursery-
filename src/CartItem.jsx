import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice.jsx';

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const changeQuantity = (item, nextQuantity) => {
    dispatch(updateQuantity({ id: item.id, quantity: nextQuantity }));
  };

  return (
    <main className="page-shell cart-page">
      <section className="cart-heading">
        <div>
          <p className="eyebrow">YOUR GREEN PICKS</p>
          <h1>Shopping cart</h1>
          <p>{totalItems} {totalItems === 1 ? 'plant' : 'plants'} selected for your home</p>
        </div>
        <Link className="text-link" to="/plants">← Continue shopping</Link>
      </section>

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-cart-icon" aria-hidden="true">♧</div>
          <h2>Your cart is ready to grow.</h2>
          <p>You haven’t added any plants yet. Explore the collection and find your first favourite.</p>
          <Link to="/plants" className="button button-primary">Explore Plants</Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-list" aria-label="Cart items">
            {cartItems.map((item) => (
              <article className="cart-row" key={item.id}>
                <img className="cart-thumb" src={item.image} alt={item.name}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80';
                  }} />
                <div className="cart-product-info">
                  <span className="cart-category">{item.category}</span>
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)} <span>each</span></p>
                  <button className="remove-link" type="button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button type="button" onClick={() => changeQuantity(item, item.quantity - 1)} disabled={item.quantity <= 1} aria-label={`Decrease ${item.name} quantity`}>−</button>
                  <span aria-live="polite">{item.quantity}</span>
                  <button type="button" onClick={() => changeQuantity(item, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`}>+</button>
                </div>
                <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
              </article>
            ))}
          </section>

          <aside className="order-summary">
            <p className="eyebrow">ORDER SUMMARY</p>
            <h2>Your total</h2>
            <div className="summary-line"><span>Items ({totalItems})</span><span>${totalCost.toFixed(2)}</span></div>
            <div className="summary-line"><span>Delivery</span><span className="free-shipping">Free</span></div>
            <div className="summary-divider" />
            <div className="summary-line summary-total"><span>Total cost</span><strong>${totalCost.toFixed(2)}</strong></div>
            <button className="button button-primary checkout-button" type="button" onClick={() => window.alert('Coming Soon!')}>Checkout</button>
            <p className="summary-note">Checkout is a demo feature and is not connected to a payment service.</p>
          </aside>
        </div>
      )}
    </main>
  );
}
