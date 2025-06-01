import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import LightDarkSwitcher from "../components/LightDarkSwitcher";
import PhoneButton from "../components/PhoneButton";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Spinner from "../shared/Spinner";

const Main = () => {
  // Set loading spinner
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Navbar />
      <LightDarkSwitcher />
      <div className="min-h-[calc(100vh-324px)]">
        <Outlet />
      </div>
      <Footer />
      <BackToTop />
      <PhoneButton />
    </>
  );
};

export default Main;
