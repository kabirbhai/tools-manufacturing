import React from "react";

// pages and components
import Products from "../tools/Products";
import Banner from "./Banner";
import Summary from "./Summary";

const Home = () => {
  return (
    <section className="container mx-auto">
      <Banner />
      <Products />
      <Summary />
    </section>
  );
};

export default Home;
