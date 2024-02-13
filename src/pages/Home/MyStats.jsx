import React from "react";

const MyStats = () => {
  return (
    <div
      className="bg-cover md:bg-fixed h-full md:h-44 lg:h-60 flex justify-center items-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("https://i.ibb.co/tzJ3q9F/kms-banner.jpg")',
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="stats bg-transparent text-white stats-vertical md:stats-horizontal shadow">
        <div className="stat px-0 md:px-16 lg:px-28">
          <div className="stat-title text-white">Downloads</div>
          <div className="stat-value text-white">31K</div>
        </div>
        <div className="stat px-0 md:px-16 lg:px-28">
          <div className="stat-title text-white">Downloads</div>
          <div className="stat-value text-white">31K</div>
        </div>
        <div className="stat px-0 md:px-16 lg:px-28">
          <div className="stat-title text-white">Downloads</div>
          <div className="stat-value text-white">31K</div>
        </div>
      </div>
    </div>
  );
};

export default MyStats;
