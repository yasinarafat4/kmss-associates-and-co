import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/tzJ3q9F/kms-banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex items-center justify-start text-neutral-content">
        <div>
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">
            Hello there
          </h1>
          <p className="mb-5 w-full md:w-3/5 lg:w-2/5 text-sm md:text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-4">
            <Link to={"/more-about-us"}>
              <button className="py-2 px-3 lg:px-4 text-xs md:text-base bg-green-600 text-white rounded-sm">
                My Company
              </button>
            </Link>

            <a href="#services">
              {" "}
              <button className="py-2 px-3 lg:px-4 text-xs md:text-base bg-orange-700 hover:bg-slate-950 duration-300 text-white rounded-sm">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
