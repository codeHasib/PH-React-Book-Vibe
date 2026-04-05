import React from "react";
import hero_img from "../assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="hero my-10 rounded-4xl bg-base-300 min-h-150 container mx-auto px-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={hero_img} className="rounded-lg shadow-2xl w-[50%]" />
        <div>
          <h1 className="text-5xl font-bold mb-10 mt-5">
            Books to freshen up <br />
            your bookshelf
          </h1>
          <button className="btn btn-accent">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
