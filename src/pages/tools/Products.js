import React from "react";
import { useQuery } from "react-query";
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("http://localhost:5000/api/products").then((res) => res.json())
  );

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <section>
      <div>
        <h1 className="text-center text-3xl py-10 font-bold text-green-500">
          AVAILABLE PRODUCTS
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <Product key={p._id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default Products;
