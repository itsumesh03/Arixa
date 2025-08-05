import React from "react";

function ShoeList({ shoes, addToCart }) {
  return (
    <div className="shoe-list">
      <h2>🔥 Trending Shoes</h2>
      <div className="shoes">
        {shoes.map((shoe) => (
          <div className="shoe-card" key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p className="price">${shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoeList;
