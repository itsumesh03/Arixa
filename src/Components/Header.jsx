import React from "react";
// import "./App.css";

function Header() {
  return (
    <header className="header">
      {/* Brand Name */}
      <div className="brand">Arixa</div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <button>Shop</button>
        <button>About</button>
        <button>Explore</button>
      </nav>

      {/* Right Side Icons */}
      <div className="header-actions">
        <button className="icon-btn">❤️</button>
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}

export default Header;
