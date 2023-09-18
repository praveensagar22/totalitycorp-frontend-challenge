import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";


export const Shop = () => {
 

  const captionStyle = {
    backgroundColor: "lightgreen", // Background color for the caption box
    padding: "10px", // Padding around the caption text
    textAlign: "center", // Center-align the caption text
    fontSize: "2rem", // Font size for the caption text
    fontWeight: "bold", // Font weight for the caption text
    color: "black", // Text color for the caption text
    borderRadius: "20px", // Border radius for the caption box
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        {/* Apply the style to the h1 element */}
        <h1 className="titleStyle">Shop Savvy</h1>
      </div>

      <div className="captionBox">
        <div style={captionStyle}>
          <p className="parastyle">Where Style Meets Comfort: Discover Your Fashion Journey</p>
        </div>
      </div>

      <div className="products"  >
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
