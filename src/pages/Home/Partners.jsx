import React from "react";
import logo1 from "../../assets/partners_logo/logo-1.jpg";
import logo2 from "../../assets/partners_logo/logo-2.jpg";
import logo3 from "../../assets/partners_logo/logo-3.jpeg";
import logo5 from "../../assets/partners_logo/logo-4.png";
import logo4 from "../../assets/partners_logo/logo-5.png";
import logo6 from "../../assets/partners_logo/logo-6.jpeg";
import logo7 from "../../assets/partners_logo/logo-7.png";
import logo8 from "../../assets/partners_logo/logo-8.png";
import logo9 from "../../assets/partners_logo/logo-9.png";

const Partners = () => {
  const partners = [
    {
      name: "Nahid Textile Mills",
      logo: logo1,
      link: "https://nahidtextiles.com",
    },
    {
      name: "Adnan Textile Ltd.",
      logo: logo2,
      link: "https://www.facebook.com/adnantextiles",
    },
    {
      name: "Disability Pride Bangladesh",
      logo: logo3,
      link: "https://www.linkedin.com/in/disability-pride-bangladesh-58a970286",
    },
    {
      name: "Asian Imports Ltd.",
      logo: logo4,
      link: "https://asianimportsltd.com",
    },
    {
      name: "Asian Holdings Ltd.",
      logo: logo5,
      link: "https://asianholdings.com.bd",
    },
    {
      name: "R. A. International Technology Ltd.",
      logo: logo6,
      link: "https://www.raitltd.com",
    },
    {
      name: "Chowman Fusion Ltd.",
      logo: logo7,
      link: "https://chowman.net",
    },
    {
      name: "SaveUp IT Ltd.",
      logo: logo8,
      link: "https://www.facebook.com/SaveUpBD",
    },
    {
      name: "Privilege Technologies Ltd.",
      logo: logo9,
      link: "https://www.privilege.com.bd",
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-700  py-10 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Our Partners & Engagements
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {partners.map((partner, index) => (
            <a target="_blank" href={partner.link}>
              <div
                title={partner.name}
                key={index}
                className="group flex flex-col items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-24 w-full md:w-auto mb-2 dark:border-2 border-slate-300 dark:p-2"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
