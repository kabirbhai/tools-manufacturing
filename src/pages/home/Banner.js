import React from "react";
import banner from "../../assets/banner/banner.jpg";
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex-1">
        <h1 className="text-3xl text-orange-500 font-bold">
          Start your business here with us
        </h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit non
          rerum, ratione reiciendis explicabo eveniet? Adipisci, atque quibusdam
          necessitatibus odio tempora cumque, placeat voluptatibus, fugit quod
          velit numquam. Possimus?
        </p>
        <div className="mt-4 space-x-2">
          <Button variant="contained">learn more</Button>
          <Button variant="outlined">Get started</Button>
        </div>
      </div>
      <div className="flex-1">
        <img src={banner} alt="banner" />
      </div>
    </section>
  );
};

export default Banner;
