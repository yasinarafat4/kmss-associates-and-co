import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/tzJ3q9F/kms-banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">
            Hello there
          </h1>
          <p className="mb-5 text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-4">
            <button className="py-2 px-4 text-sm md:text-base bg-green-600 text-white rounded-sm">My Company</button>
            <button className="py-2 px-4 text-sm md:text-base bg-black hover:bg-green-600 duration-300 text-white rounded-sm">Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
