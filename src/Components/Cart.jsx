import React from "react";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div>
              <h4>{item.name}</h4>
              <p>${item.price} × {item.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>−</button>
          </div>
        ))
      )}
      <h3 className="total">Total: ${total}</h3>
    </div>
  );
}

export default Cart;
