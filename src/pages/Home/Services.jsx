import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "LICENSING",
      subTitle:
        "We obtain formal government licenses for clients specific business or professional needs.",
      route: "licencing-service",
    },
    {
      id: 2,
      name: "ENTITY FORMATION",
      subTitle:
        "We guide Registered Companies in complying with business entity formation regulations.",
      route: "entity-formation-service",
    },
    {
      id: 3,
      name: "ACCOUNTING",
      subTitle:
        "We handle recording, analyzing, and reporting financial transactions for clients.",
      route: "accounting-service",
    },
    {
      id: 4,
      name: "TAX ADVISORY",
      subTitle:
        "We offer guidance and strategic advice on tax-related matters.",
      route: "tax-advisory-service",
    },
    {
      id: 5,
      name: "AUDIT & ASSURANCE",
      subTitle:
        "We review financial data to ensure accuracy and compliance with standards.",
      route: "audit-and-assurance-service",
    },
    {
      id: 6,
      name: "IPO & CAPITAL MARKET",
      subTitle:
        "We assist in IPOs and facilitate trading in capital markets for clients.",
      route: "ipo-capital-market-service",
    },
  ];

  return (
    <Container>
      <section id="services">
        <SectionTitle heading={"Our Services"} />
        <div
          title="Click to View Service"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 dark:bg-slate-900 dark:text-slate-200"
        >
          {/* services */}
          {serviceData.map((service, i) => (
            <Link
              key={i}
              to={service.route}
              className="group flex items-center gap-2 border border-slate-500 hover:shadow-2xl rounded-md px-2 py-4 xl:px-4 xl:py-8 dark:hover:bg-slate-800 dark:text-slate-200 hover:duration-500"
            >
              <div>
                <IoMdCheckmarkCircle className="text-7xl text-[#014AA9] group-hover:text-slate-800 dark:group-hover:text-slate-400 group-hover:duration-500 " />
              </div>
              <div>
                <h2 className="font-semibold text-base xl:text-xl">
                  {service.name}
                </h2>
                <p className="text-sm xl:text-lg">{service.subTitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Services;
