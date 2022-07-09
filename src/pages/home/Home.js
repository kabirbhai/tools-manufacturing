import React from "react";
import Products from "../tools/Products";
import Banner from "./Banner";

const Home = () => {
  return (
    <section className="container mx-auto">
      <Banner />
      <Products />
    </section>
  );
};

export default Home;
