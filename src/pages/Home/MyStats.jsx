import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const MyStats = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="bg-cover md:bg-fixed h-full md:h-44 lg:h-60 flex justify-center items-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("https://i.ibb.co/tzJ3q9F/kms-banner.jpg")',
        backgroundRepeat: "no-repeat",
      }}
      ref={ref}
    >
      <div className="stats bg-transparent text-white stats-vertical md:stats-horizontal shadow">
        <div className="stat px-0 md:px-16 lg:px-28">
          <div className="stat-value text-white">
            {inView ? <CountUp start={0} end={25} duration={3} /> : "25"}
          </div>
          <div className="stat-title text-white">Downloads</div>
        </div>
        <div className="stat px-0 md:px-16 lg:px-28">
          <div className="stat-value text-white">
            {inView ? <CountUp start={0} end={25} duration={3} /> : "25"}
          </div>
          <div className="stat-title text-white">Downloads</div>
        </div>
        <div className="stat px-0 md:px-16 lg:px-28">
          <div className="stat-value text-white">
            {inView ? <CountUp start={0} end={25} duration={3} /> : "25"}
          </div>
          <div className="stat-title text-white">Downloads</div>
        </div>
      </div>
    </section>
  );
};

export default MyStats;
