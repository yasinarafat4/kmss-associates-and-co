import { GoArrowRight } from "react-icons/go";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "LICENSING",
      subTitle:
        "We obtain formal government licenses for clients specific business or professional needs.",
      route: "/licencing-service",
    },
    {
      id: 2,
      name: "ENTITY FORMATION",
      subTitle:
        "We guide Registered Companies in complying with business entity formation regulations.",
      route: "/entity-formation-service",
    },
    {
      id: 3,
      name: "ACCOUNTING",
      subTitle:
        "We handle recording, analyzing, and reporting financial transactions for clients.",
      route: "/accounting-service",
    },
    {
      id: 4,
      name: "TAX ADVISORY",
      subTitle:
        "We offer guidance and strategic advice on tax-related matters.",
      route: "/tax-advisory-service",
    },
    {
      id: 5,
      name: "AUDIT & ASSURANCE",
      subTitle:
        "We review financial data to ensure accuracy and compliance with standards.",
      route: "/audit-and-assurance-service",
    },
    {
      id: 6,
      name: "IPO & CAPITAL MARKET",
      subTitle:
        "We assist in IPOs and facilitate trading in capital markets for clients.",
      route: "/ipo-capital-market-service",
    },
  ];

  return (
    <section id="services" className="dark:bg-slate-900 dark:text-slate-200">
      <div className="container mx-auto p-5 md:p-10 xl:px-0">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <SectionTitle heading={"Our Services"} />
          <Link
            to={"/all-services"}
            className="text-slate-900 hover:text-[#C2410C] flex justify-end items-center gap-1 text-md font-medium duration-300 pb-2"
          >
            <span>View All Services</span>
            <GoArrowRight className="text-lg font-medium" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* services */}
          {serviceData.map((service, i) => (
            <div
              data-tip={`Click to View Our ${service.name} Service`}
              key={i}
              className="tooltip"
            >
              <Link
                to={service.route}
                className="group flex items-center gap-2 border border-slate-500 hover:shadow-2xl rounded-md px-2 py-4 xl:px-4 xl:py-8 dark:hover:bg-slate-800 dark:text-slate-200 hover:duration-500 text-left h-full"
              >
                <div>
                  <IoMdCheckmarkCircle className="text-7xl text-[#014AA9] group-hover:text-slate-800 dark:group-hover:text-slate-400 group-hover:duration-500" />
                </div>
                <div>
                  <h2 className="font-semibold text-base xl:text-xl">
                    {service.name}
                  </h2>
                  <p className="text-sm xl:text-lg">{service.subTitle}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
