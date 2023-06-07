import React from "react";
import "../styles/products.css";

export default function Products({ products }) {
  return (
    <section className="products">
      <h3 className="products-title">Products</h3>
      <ul className="products-list">
        {products.map((product, index) => {
          const { imgUrl, name, price } = product;

          return (
            <li className="products-item" key={index}>
              <div className="product">
                <img className="product-image" src={imgUrl} alt="name" />
                <div className="product-info">
                  <h4 className="product-name">{name}</h4>
                  <span className="product-price">{price} $</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
