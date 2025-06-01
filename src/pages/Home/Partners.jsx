import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import logo1 from "../../assets/partners_logo/logo-1.jpg";
import logo2 from "../../assets/partners_logo/logo-2.jpg";
import logo3 from "../../assets/partners_logo/logo-3.jpeg";
import logo4 from "../../assets/partners_logo/logo-5.png";
import logo6 from "../../assets/partners_logo/logo-6.jpeg";
import logo7 from "../../assets/partners_logo/logo-7.png";
import logo8 from "../../assets/partners_logo/logo-8.png";
import logo5 from "../../assets/partners_logo/logo-9.png";
import SectionTitle from "../../components/SectionTitle";

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
      logo: logo5,
      link: "https://www.privilege.com.bd",
    },
  ];

  return (
    <section>
      <div className="container mx-auto p-4 xl:px-0">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <SectionTitle heading={"Our Partners"} />
          <Link to={'/all-partners'} className="text-slate-900 hover:text-[#C2410C] flex justify-end items-center gap-1 text-md font-medium duration-300 pb-2">
            <span>View All Partners</span>
            <GoArrowRight className="text-lg font-medium" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((partner, i) => (
            <a key={i} target="_blank" href={partner.link} rel="noreferrer">
              <div
                title={partner.name}
                className="group flex flex-col items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-28 w-full md:w-auto mb-2 dark:border-2 border-slate-300 dark:p-2"
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
