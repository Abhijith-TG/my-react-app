import React, { useState } from 'react';
import '../styles/CartPage.css';

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Wireless Headphones', price: 100, image: 'https://picsum.photos/200/300?random=1' },
    { id: 2, name: 'Smartwatch', price: 200, image: 'https://picsum.photos/200/300?random=2' },
  ]);

  const [wishlist, setWishlist] = useState([
    { id: 3, name: 'Bluetooth Speaker', price: 150, image: 'https://picsum.photos/200/300?random=3' },
  ]);

  const moveToWishlist = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    setWishlist([...wishlist, item]);
  };

  const moveToCart = (item) => {
    setWishlist(wishlist.filter((wishItem) => wishItem.id !== item.id));
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const removeFromWishlist = (itemId) => {
    setWishlist(wishlist.filter((item) => item.id !== itemId));
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty. Add items to get started!</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="cart-item-actions">
                    <button onClick={() => moveToWishlist(item)}>Move to Wishlist</button>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="cart-summary">
          <h3>Subtotal ({cart.length} items): ${cart.reduce((acc, item) => acc + item.price, 0)}</h3>
          <button className="proceed-to-checkout" onClick={()=>window.location.href='https://dribbble.com/tags/payment-successful'}>Proceed to Checkout</button>
        </div>
      </div>

      <div className="wishlist-container">
        <h2>Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty. Save items you like here!</p>
        ) : (
          <div className="wishlist-items">
            {wishlist.map((item) => (
              <div key={item.id} className="wishlist-item">
                <img src={item.image} alt={item.name} className="wishlist-item-image" />
                <div className="wishlist-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="wishlist-item-actions">
                    <button onClick={() => moveToCart(item)}>Move to Cart</button>
                    <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;