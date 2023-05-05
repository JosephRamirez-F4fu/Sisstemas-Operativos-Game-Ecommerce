import React from "react";
import "ProductCardComponent"
export default function ProductCard({ name, price, image }) {
  return (
    <div className="ProductCard">
      <div className="ProductCardImgContainer">
        <img className="ProductCardImg" src={image} alt={name} />
      </div>
      <div className="ProductCardInfo">
        <h2 className="ProductCardName">{name}</h2>
        <p className="ProductCardPrice">${price}</p>
        <button className="ProductCardButton">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}