import React from "react";
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <section>
      <div>
        <h1>Start your business here with us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit non
          rerum, ratione reiciendis explicabo eveniet? Adipisci, atque quibusdam
          necessitatibus odio tempora cumque, placeat voluptatibus, fugit quod
          velit numquam. Possimus?
        </p>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <div>
        <h1 className="w-1/2 bg-slate-900">hello</h1>
      </div>
    </section>
  );
};

export default Banner;
