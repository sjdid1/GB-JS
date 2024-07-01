import React from 'react';
import CartItem from '../components/CartItem';

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
        ))
      )}
      <h3>GRAND TOTAL: ${total}</h3>
    </div>
  );
};

export default CartPage;