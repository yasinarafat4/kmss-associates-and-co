import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const Services = () => {

const serviceData =[
  {
    id:1,
    name:"LICENSING",
    subTitle: 'We obtain formal government licenses for clients specific business or professional needs.',
    route:'service-one'
  },
  {
    id:2,
    name:"ENTITY FORMATION",
    subTitle: 'We guide Registered Companies in complying with business entity formation regulations.',
    route:'service-two'
  },
  {
    id:3,
    name:"ACCOUNTING",
    subTitle: 'We handle recording, analyzing, and reporting financial transactions for clients.',
    route:'service-three'
  },
  {
    id:4,
    name:"TAX ADVISORY",
    subTitle: 'We offer guidance and strategic advice on tax-related matters.',
    route:'service-four'
  },
  {
    id:5,
    name:"AUDIT & ASSURANCE",
    subTitle: 'We review financial data to ensure accuracy and compliance with standards.',
    route:'service-five'
  },
  {
    id:6,
    name:"IPO & CAPITAL MARKET",
    subTitle: 'We assist in IPOs and facilitate trading in capital markets for clients.',
    route:'service-six'
  }
]



  return (
    <Container>
      <section id="services" className="pt-20">
        <SectionTitle heading={"Our Services"} />
        <div title="Click to View Service" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 dark:bg-slate-900 dark:text-white">
          {/* services */}
          {
            serviceData.map((service)=>(
              <Link
            to={service.route}
            className="group flex items-center gap-2 border border-slate-500 hover:shadow-2xl rounded-md px-2 py-4 xl:px-4 xl:py-8 dark:hover:bg-slate-800 dark:text-white hover:duration-500"
          >
            <div>
              <IoMdCheckmarkCircle className="text-7xl text-green-500 group-hover:text-slate-800 dark:group-hover:text-slate-400 group-hover:duration-500 " />
            </div>
            <div>
              <h2 className="font-semibold text-base xl:text-lg">
                {service.name}
              </h2>
              <p className="text-sm xl:text-base">
               {service.subTitle}
              </p>
            </div>
          </Link>
            ))
          }
        </div>
      </section>
    </Container>
  );
};

export default Services;
