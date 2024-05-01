import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import FAQs from "./FAQs";
import Services from "./Services";

const Home = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Banner />
      <Services />
      <About />
      <Contact />
      <FAQs />
    </div>
  );
};

export default Home;
