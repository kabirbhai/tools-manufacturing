import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section>
      <div>
        <h1 className="text-center text-3xl py-10 font-bold text-green-500">
          AVAILABLE PRODUCTS
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default Products;
