import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, price, img, name, availableQty, minQty } = product;
  const navigate = useNavigate();
  const handlePurchase = (id) => {
    navigate(`/productDetails/${id}`);
  };
  return (
    <section>
      <div>
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <img src={img} alt="product" />
          </div>
          <div className="flex-grow">
            <p className="text-xl text-orange-600 font-bold">{name}</p>
            <p>Available qty: {availableQty}</p>
            <p>Min qty:{minQty}</p>
            <p>id: {_id}</p>
            <p>Price:{price}</p>
            <div className="my-2">
              <Button onClick={() => handlePurchase(_id)} variant="outlined">
                {" "}
                PURCHASE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
