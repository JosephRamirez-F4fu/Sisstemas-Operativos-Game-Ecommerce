import React from "react";
import ProductCard from "./ProductList.css";

export default function ProductList({ products }) {
  return (
    <div className="ProductList">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onAddToCart={() => {
            console.log("Producto agregado al carrito");
          }}
        />
      ))}
    </div>
  );
}
