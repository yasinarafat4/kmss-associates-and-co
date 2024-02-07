import React from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-300px)]">
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default App;
