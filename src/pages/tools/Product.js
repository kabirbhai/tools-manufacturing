import { Button } from "@mui/material";
import React from "react";

const Product = ({ product }) => {
  const { id, price, img, name, available_quantity, min_quantity } = product;
  return (
    <section>
      <div>
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <img src={img} alt="" />
          </div>
          <div class="flex-grow">
            <p class="text-xl text-orange-600 font-bold">{name}</p>
            <p class="text-sm">Available qty: {available_quantity}</p>
            <p class="text-sm">Min qty:{min_quantity}</p>
            <p class="text-sm">id: {id}</p>
            <p class="text-sm">Price:{price}</p>
            <Button variant="outlined"> PURCHASE</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
