import logo1 from "../../assets/partners_logo/logo-1.jpg";
import logo10 from "../../assets/partners_logo/logo-10.jpg";
import logo11 from "../../assets/partners_logo/logo-11.jpg";
import logo12 from "../../assets/partners_logo/logo-12.jpg";
import logo13 from "../../assets/partners_logo/logo-13.jpg";
import logo14 from "../../assets/partners_logo/logo-14.jpg";
import logo15 from "../../assets/partners_logo/logo-15.jpg";
import logo2 from "../../assets/partners_logo/logo-2.jpg";
import logo3 from "../../assets/partners_logo/logo-3.jpeg";
import logo5 from "../../assets/partners_logo/logo-4.png";
import logo4 from "../../assets/partners_logo/logo-5.png";
import logo6 from "../../assets/partners_logo/logo-6.jpeg";
import logo7 from "../../assets/partners_logo/logo-7.png";
import logo8 from "../../assets/partners_logo/logo-8.png";
import logo9 from "../../assets/partners_logo/logo-9.png";

const AllPartners = () => {
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
    {
      name: "Falaq Creative Properties Ltd.",
      logo: logo10,
      link: "https://www.facebook.com/profile.php?id=61550571279669",
    },
    {
      name: "Karaachi Dastarkhwan",
      logo: logo11,
      link: "https://www.facebook.com/KaraachiDastarkhwan",
    },
    {
      name: "Fipper",
      logo: logo12,
      link: "https://www.fipperslipper.com",
    },
    {
      name: "Privilege Technologies Ltd.",
      logo: logo13,
      link: "https://www.privilege.com.bd",
    },
    {
      name: "Privilege Technologies Ltd.",
      logo: logo14,
      link: "https://www.privilege.com.bd",
    },
    {
      name: "Privilege Technologies Ltd.",
      logo: logo15,
      link: "https://www.privilege.com.bd",
    },
  ];

  return (
    <div>
      {/* Partners Banner */}
      <div className="bg-gradient-to-r from-blue-800 via-purple-700 to-purple-900 py-20 text-center dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 dark:text-gray-200">
          Partners & Engagements
        </h2>
        <p className="text-lg lg:text-xl font-medium text-white opacity-90 dark:text-gray-300">
          Collaborating with trusted firms and professionals to deliver reliable
          Tax and VAT solutions.
        </p>
      </div>

      {/* Top Section */}
      <section className="dark:bg-slate-800">
        <div className="container mx-auto px-4 py-10 xl:px-0 grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-10">
          {partners.map((partner, i) => (
            <a key={i} target="_blank" href={partner.link} rel="noreferrer">
              <div
                data-tip={partner.name}
                className="tooltip group flex flex-col items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-32 w-full md:w-auto mb-2 dark:border-2 border-slate-300 dark:p-2"
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllPartners;
