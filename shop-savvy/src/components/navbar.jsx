import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";


export const Navbar = ({ cartItemCount }) => {
  return (
    <div className="navbar  navflex">
      <h1 className="logo">SS</h1>
      <div className="links">
        
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
          {cartItemCount > 0 && <span className="cart-notification">{cartItemCount}</span>}
        </Link>
      </div>
    </div>
  );
};
