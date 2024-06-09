import React from "react";
import logo1 from "../../assets/partners_logo/logo-1.png";
import logo2 from "../../assets/partners_logo/logo-2.png";
import logo3 from "../../assets/partners_logo/logo-3.png";

const Partners = () => {
  const partners = [
    {
      name: "ALKA Associates",
      logo: logo1,
      link: "https://alka-associates.com",
    },
    { name: "Real Estate", logo: logo2, link: "https://www.realestate.com.au" },
    { name: "UNEX", logo: logo3, link: "https://www.unex.com" },
    // Add more companies here
  ];

  return (
    <section className="bg-white dark:bg-slate-200 py-10 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Our Partners & Supporters
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <a target="_blank" href={partner.link}>
              <div
                key={index}
                className="group flex flex-col items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 w-auto mb-2 dark:border-2 border-slate-800 dark:p-2"
                />
                <span className="group-hover:text-[#FE322E] duration-300 text-base text-slate-800 dark:text-slate-700">
                  {partner.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
