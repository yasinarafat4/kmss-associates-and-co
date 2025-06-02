import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../src/assets/kmss_logo.png";
import TopNav from "./TopNav";

const Navbar = () => {
  // States
  const [navToggle, setNavToggle] = useState(false);
  const [targetSection, setTargetSection] = useState(null);

  // Navigate & Location
  const location = useLocation();

  // Check the current path
  const isHomePage = location.pathname === "/";
  const isServicesPage = location.pathname === "/all-services";
  const isAboutPage = location.pathname === "/more-about-us";
  const isContactPage = location.pathname === "/contact-us";

  // Scroll to target section after navigation
  useEffect(() => {
    if (targetSection) {
      const section = document.querySelector(targetSection);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setTargetSection(null);
    }
  }, [targetSection]);

  return (
    <div className="sticky top-0 z-[1000]">
      <TopNav />
      <nav className="bg-white shadow-lg dark:bg-slate-900  dark:text-slate-200">
        <div className="navbar xl:!px-0 container mx-auto">
          <div className="flex-1">
            <Link to="/">
              <div className="flex flex-col justify-center items-center">
                <img className="w-20 md:w-28" src={logo} alt="nav_logo" />
              </div>
            </Link>
          </div>
          <div
            className={`absolute ${
              navToggle ? "left-0" : "left-[-120%]"
            } top-[6rem] md:top-[7rem] flex w-full flex-col bg-white pb-3 pt-2 transition-all duration-300 dark:bg-slate-900 lg:static lg:w-[unset] lg:flex-row lg:items-center lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent`}
          >
            <div className="menu menu-horizontal flex-col space-y-3 lg:space-y-0 px-1 lg:flex-row lg:items-center lg:gap-4 xl:gap-6">
              {isHomePage ? (
                <div>
                  <Link onClick={() => setNavToggle(false)} to="/">
                    <p className="text-lg 2xl:text-xl font-medium text-[#C2410C] hover:duration-500">
                      Home
                    </p>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link onClick={() => setNavToggle(false)} to="/">
                    <p className="text-lg 2xl:text-xl font-medium hover:text-[#C2410C] hover:duration-500">
                      Home
                    </p>
                  </Link>
                </div>
              )}

              {/* Services */}
              <Link to="/all-services" onClick={() => setNavToggle(false)}>
                <p
                  className={`cursor-pointer text-lg lg:text-base 2xl:text-lg font-medium hover:duration-500 ${
                    isServicesPage ? "text-[#C2410C]" : "hover:text-[#C2410C]"
                  }`}
                >
                  Services
                </p>
              </Link>
              {/* About */}
              <Link to="/more-about-us" onClick={() => setNavToggle(false)}>
                <p
                  className={`cursor-pointer text-lg lg:text-base 2xl:text-lg font-medium hover:duration-500 ${
                    isAboutPage ? "text-[#C2410C]" : "hover:text-[#C2410C]"
                  }`}
                >
                  About
                </p>
              </Link>
              {/* Contact */}
              <Link to="/contact-us" onClick={() => setNavToggle(false)}>
                <p
                  className={`cursor-pointer text-lg lg:text-base 2xl:text-lg font-medium hover:duration-500 ${
                    isContactPage ? "text-[#C2410C]" : "hover:text-[#C2410C]"
                  }`}
                >
                  Contact
                </p>
              </Link>
            </div>
          </div>
          <label className="swap-rotate swap btn-ghost btn-circle btn bg-white dark:bg-slate-900 lg:hidden">
            <input
              checked={navToggle}
              onChange={() => setNavToggle((pre) => !pre)}
              type="checkbox"
            />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
