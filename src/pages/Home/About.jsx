import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/about_img.jpg";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  return (
    <Container>
      <section id="about" className="pt-20 dark:bg-slate-900 dark:text-slate-200">
        <SectionTitle heading={"Who We Are"} />

        <div className="flex w-full items-center justify-center bg-white dark:bg-slate-900 dark:text-slate-200 px-2 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-5 items-center xl:gap-10">
            <div className="order-last xl:order-first col-span-3 space-y-4 md:space-y-6">
              <p className="w-full lg:w-10/12 xl:w-full mx-auto lg:text-lg md:text-base text-sm text-gray-600 dark:text-slate-200">
                <strong>KMSS & Associates</strong> is a
                prestigious consultancy firm located in Dhaka, Bangladesh.
              </p>
              <p className="w-full lg:w-10/12 xl:w-full mx-auto lg:text-lg md:text-base text-sm text-gray-600 dark:text-slate-200">
                The firm offers a variety of legal and professional services,
                including consultancy in income tax, accounting, company law and
                corporate affairs, and value-added tax (VAT).
              </p>
              <p className="w-full lg:w-10/12 xl:w-full mx-auto lg:text-lg md:text-base text-sm text-gray-600 dark:text-slate-200">
                KMSS & Associates also provides services in compliance with
                various local laws and regulations such as the Companies Act,
                Trade Organization Act, and Societies Registration Act, among
                others.
              </p>
              <p className="w-full lg:w-10/12 xl:w-full mx-auto lg:text-lg md:text-base text-sm text-gray-600 dark:text-slate-200">
                The firm is dedicated to offering the best services to its
                clients, including assistance with matters related to Bangladesh
                Investment Development Authority Affairs (BIDA), ERC, IRC,
                project profiles, and both local and international accounting
                outsourcing.
              </p>
              <Link to={"/more-about-us"}>
                <button className="py-2 px-3 lg:px-4 text-xs md:text-base bg-blue-600 text-white rounded-sm ms-0 lg:ms-[70px] xl:ms-0 mt-6">
                  More About Us
                </button>
              </Link>
            </div>
            <div className="col-span-2 relative mb-6 xl:mb-0">
              <img
                src={aboutImage}
                className="w-full lg:w-10/12 xl:w-full mx-auto relative bg-gray-400 rounded-t-full xl:rounded-t-none xl:rounded-b-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
