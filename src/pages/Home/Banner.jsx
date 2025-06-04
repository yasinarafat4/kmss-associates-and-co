
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen z-0"
      style={{
        backgroundImage: "url(https://i.ibb.co/tzJ3q9F/kms-banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="flex items-center justify-start text-neutral-content z-0">
        <div className="container mx-auto p-5 md:p-10 xl:px-0">
          <h1 className="mb-5 text-[21px] md:text-4xl lg:text-5xl font-bold">
            Welcome to <span className="text-[#C2410C] dark:text-white">KMSS Associates</span> &<span className="text-[#2563EB] dark:text-white"> Co.</span>
          </h1>
          <p className="mb-5 w-full md:w-3/5 lg:w-2/5 text-sm md:text-base lg:text-lg">
          Trusted legal and professional consultants specializing in corporate law, tax, accounting, VAT, and investment services. Get expert guidance and personalized support. Choose us for comprehensive solutions.
          </p>
          <div className="flex gap-4">
            <Link to={"/more-about-us"}>
              <button className="py-2 px-3 lg:px-4 text-xs md:text-base bg-[#014AA9] dark:bg-slate-800 text-white rounded-sm">
                My Company
              </button>
            </Link>

            <a href="#services">
              {" "}
              <button className="py-2 px-3 lg:px-4 text-xs md:text-base bg-[#C2410C] dark:bg-slate-900 hover:bg-slate-950 duration-300 text-white rounded-sm">
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
