import React from "react";


import "./product.css";

const Product = ({result}) => {
  return (
    <>
      <section className="card-container">
        {result}
      </section>
    </>
  );
};

export default Product;
