import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import FAQs from "./FAQs";
import Partners from "./Partners";
import Services from "./Services";

const Home = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-slate-200">
      <Banner />
      <Services />
      <About />
      <Contact />
      <Partners />
      <FAQs />
    </div>
  );
};

export default Home;
