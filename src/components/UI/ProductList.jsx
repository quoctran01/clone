import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ items }) => {
  return (
    <>
      {items.map((item, i) => (
        <ProductCard item={item} key={i} />
      ))}
    </>
  );
};

export default ProductList;
