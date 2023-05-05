import React from "react";

export default function ProductPage({ product }) {
  return (
    <div className="ProductPage">
      <div className="ProductImages">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={product.name} />
        ))}
      </div>
      <div className="ProductVideos">
        {product.videos.map((video, index) => (
          <iframe
            key={index}
            width="560"
            height="315"
            src={video}
            title={product.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
      <div className="ProductInfo">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}