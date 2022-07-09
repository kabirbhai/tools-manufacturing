import React from "react";
import Review from "../review/Review";

// pages and components
import Products from "../tools/Products";
import Banner from "./Banner";
import Summary from "./Summary";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <section className="container mx-auto">
      <Banner />
      <Products />
      <Summary />
      <Review />
      <Testimonials />
    </section>
  );
};

export default Home;
