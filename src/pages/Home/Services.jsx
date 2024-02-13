import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const Services = () => {
  return (
    <Container>
      <section id="services" className="pt-20">
        <SectionTitle heading={"Our Services"} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-slate-900 dark:text-white">
          {/* service-1 */}
          <Link
            to={"/service-one"}
            className="flex items-center gap-2 shadow-lg rounded-md px-2 py-4 xl:px-4 xl:py-8 hover:bg-slate-200 hover:duration-500"
          >
            <div>
              <IoMdCheckmarkCircle className="text-7xl text-green-500 hover:text-slate-800 hover:duration-500" />
            </div>
            <div>
              <h2 className="font-semibold text-base xl:text-lg">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-sm xl:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit, labore corporis!{" "}
              </p>
            </div>
          </Link>
          {/* service-2 */}
          <Link
            to={"/service-two"}
            className="flex items-center gap-2 shadow-lg rounded-md px-2 py-4 xl:px-4 xl:py-8 hover:bg-slate-200 hover:duration-500"
          >
            <div>
              <IoMdCheckmarkCircle className="text-7xl text-green-500 hover:text-slate-800 hover:duration-500" />
            </div>
            <div>
              <h2 className="font-semibold text-base xl:text-lg">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-sm xl:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit, labore corporis!{" "}
              </p>
            </div>
          </Link>
          {/* service-3 */}
          <Link
            to={"/service-three"}
            className="flex items-center gap-2 shadow-lg rounded-md px-2 py-4 xl:px-4 xl:py-8 hover:bg-slate-200 hover:duration-500"
          >
            <div>
              <IoMdCheckmarkCircle className="text-7xl text-green-500 hover:text-slate-800 hover:duration-500" />
            </div>
            <div>
              <h2 className="font-semibold text-base xl:text-lg">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-sm xl:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit, labore corporis!{" "}
              </p>
            </div>
          </Link>
          {/* service-4 */}
          <Link
            to={"/service-four"}
            className="flex items-center gap-2 shadow-lg rounded-md px-2 py-4 xl:px-4 xl:py-8 hover:bg-slate-200 hover:duration-500"
          >
            <div>
              <IoMdCheckmarkCircle className="text-7xl text-green-500 hover:text-slate-800 hover:duration-500" />
            </div>
            <div>
              <h2 className="font-semibold text-base xl:text-lg">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-sm xl:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit, labore corporis!{" "}
              </p>
            </div>
          </Link>
          {/* service-5 */}
          <Link
            to={"/service-five"}
            className="flex items-center gap-2 shadow-lg rounded-md px-2 py-4 xl:px-4 xl:py-8 hover:bg-slate-200 hover:duration-500"
          >
            <div>
              <IoMdCheckmarkCircle className="text-7xl text-green-500 hover:text-slate-800 hover:duration-500" />
            </div>
            <div>
              <h2 className="font-semibold text-base xl:text-lg">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-sm xl:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit, labore corporis!{" "}
              </p>
            </div>
          </Link>
          {/* service-6 */}
          <Link
            to={"/service-six"}
            className="flex items-center gap-2 shadow-lg rounded-md px-2 py-4 xl:px-4 xl:py-8 hover:bg-slate-200 hover:duration-500"
          >
            <div>
              <IoMdCheckmarkCircle className="text-7xl text-green-500 hover:text-slate-800 hover:duration-500" />
            </div>
            <div>
              <h2 className="font-semibold text-base xl:text-lg">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-sm xl:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit, labore corporis!{" "}
              </p>
            </div>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default Services;
