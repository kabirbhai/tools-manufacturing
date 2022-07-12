import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  const { data: product, isLoading } = useQuery(["product"], () =>
    fetch(`http://localhost:5000/api/products/${productId}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product?.name}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Animated Night Hill Illustrations
            </h1>
            <div className="flex mb-4">
              <span className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Product Description
              </span>
            </div>
            <div className=" mb-4">
              <p>{product.desc}</p>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Color</span>
              <span className="ml-auto text-gray-900">Blue</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Size</span>
              <span className="ml-auto text-gray-900">Medium</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Min quantity</span>
              <span className="ml-auto text-gray-900">{product?.minQty}</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Available quantity</span>
              <span className="ml-auto text-gray-900">
                {product?.availableQty}
              </span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Order now
              </button>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product?.img}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
