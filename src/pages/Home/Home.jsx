import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Services from "./Services";
import Todo from "./Todo";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <Contact />
      <Todo />
    </div>
  );
};

export default Home;
