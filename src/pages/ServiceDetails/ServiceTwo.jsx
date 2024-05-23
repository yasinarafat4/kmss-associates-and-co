import React, { useState } from "react";
import ServiceBanner from "../../components/ServiceBanner";

const ServiceTwo = () => {
  // States
  const [isOpen, setIsOpen] = useState(null);
  const toggle = (idx) => setIsOpen((prevIdx) => (prevIdx == idx ? null : idx));

  return (
    <>
      <ServiceBanner heading={"Our Entity Formation Service"} />
      <div className="px-[15px] md:px-[60px] xl:px-[120px] 2xl:px-[350px] py-[16px] lg:py-[40px] dark:bg-slate-900">
        {/* Proprietorship */}
        <div className="rounded-lg border-2 border-blue-600 dark:border-white mb-4 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(1)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-white font-semibold">
                  1. Proprietorship
                </h2>
                <p className="text-md lg:text-lg text-blue-600 dark:text-white font-medium">
                Starting a Proprietorship in Bangladesh
                </p>
              </div>
              <div className="rounded-full bg-white p-5">
                <svg
                  className="shrink-0 fill-[#00A2FF]"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${
                      isOpen == 1 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 1 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 1
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-blue-600 dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                Generally three types of business operate in Bangladesh. These are Limited Company, Partnership Firm and Proprietorship Business. Among them, the most preferable trade is proprietorship business in Bangladesh. <br /> <br /> A single entrepreneur can start a proprietorship business. Generally, small and medium scale businesses are regularly forming by proprietorship as it is an easy way to form this type of business.
                </p>
                <p className="text-md lg:text-lg">
                If someone wants to start proprietorship business at first make a Trade License in Bangladesh from local authority, he or she may apply to the City Corporation Office, Municipality Office, Upozila Council, Union Council or other respective Government authority.<br className="lg:hidden" /> <br className="lg:hidden" /> For having a Trade License firstly, one needs to select a name for his or her proprietorship business. <br /><br /> After that all the necessary documents have to be submitted and the necessary Govt.<br className="lg:hidden" /> <br className="lg:hidden" /> Fees have to be paid (depending on the kinds of business) to the Trade License issuing authority. After checking of all the papers, the Trade License is issued by the issuing body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* i)	Proprietorship
ii)	Partnership
iii)	Private Limited
iv)	Public Limited
v)	Society / Trust / Foundation
vi)	Trade Organization
vii)	Foreign Company
viii)	Joint Venture Company
ix)	Liaison Or Branch Office */}

    </>
  );
};

export default ServiceTwo;
