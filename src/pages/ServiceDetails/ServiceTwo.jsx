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
        <div className="rounded-lg border-2 border-[#014AA8] dark:border-white mb-4 lg:mb-8 bg-white dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(1)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-[#014AA8] dark:text-white font-semibold">
                  1. Proprietorship
                </h2>
                <p className="text-md lg:text-lg text-[#014AA8] dark:text-white font-medium">
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
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-[#014AA8] dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  Generally three types of business operate in Bangladesh. These
                  are Limited Company, Partnership Firm and Proprietorship
                  Business. Among them, the most preferable trade is
                  proprietorship business in Bangladesh. <br /> <br /> A single
                  entrepreneur can start a proprietorship business. Generally,
                  small and medium scale businesses are regularly forming by
                  proprietorship as it is an easy way to form this type of
                  business.
                </p>
                <p className="text-md lg:text-lg">
                  If someone wants to start proprietorship business at first
                  make a Trade License in Bangladesh from local authority, he or
                  she may apply to the City Corporation Office, Municipality
                  Office, Upozila Council, Union Council or other respective
                  Government authority.
                  <br className="lg:hidden" /> <br className="lg:hidden" /> For
                  having a Trade License firstly, one needs to select a name for
                  his or her proprietorship business. <br />
                  <br /> After that all the necessary documents have to be
                  submitted and the necessary Govt.
                  <br className="lg:hidden" /> <br className="lg:hidden" /> Fees
                  have to be paid (depending on the kinds of business) to the
                  Trade License issuing authority. After checking of all the
                  papers, the Trade License is issued by the issuing body.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Private Limited Company */}
        <div className="rounded-lg border-2 border-[#014AA8] dark:border-white mb-4 lg:mb-8 bg-white dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(2)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-[#014AA8] dark:text-white font-semibold">
                  2. Private Limited Company
                </h2>
                <p className="text-md lg:text-lg text-[#014AA8] dark:text-white font-medium">
                  Liability and Legal Structure
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
                      isOpen == 2 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 2 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 2
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-[#014AA8] dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  Most of the companies are running their businesses through an
                  incorporation of a private limited liability company in
                  Bangladesh. <br className="lg:hidden" />{" "}
                  <br className="lg:hidden" /> A private limited company is a
                  separate legal entity where shareholders are only liable for
                  the debts of the company up to the share capital they have
                  contributed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Public Limited Company */}
        <div className="rounded-lg border-2 border-[#014AA8] dark:border-white mb-4 lg:mb-8 bg-white dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(3)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-[#014AA8] dark:text-white font-semibold">
                  3. Public Limited Company
                </h2>
                <p className="text-md lg:text-lg text-[#014AA8] dark:text-white font-medium">
                  Governance and Shareholder Rights
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
                      isOpen == 3 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 3 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 3
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-[#014AA8] dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  In our country, to establish a public limited company in
                  Bangladesh, there must be a minimum of 7 and a maximum of 7
                  limited shareholders/directors.
                  <br className="lg:hidden" /> <br className="lg:hidden" />{" "}
                  Public limited companies can offer public shares if they are
                  listed on any stock exchange. Limited companies can also
                  distribute dividends.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Liaison Or Branch Office */}
        <div className="rounded-lg border-2 border-[#014AA8] dark:border-white mb-4 lg:mb-8 bg-white dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(4)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-[#014AA8] dark:text-white font-semibold">
                  4. Liaison Or Branch Office
                </h2>
                <p className="text-md lg:text-lg text-[#014AA8] dark:text-white font-medium">
                  Understanding the Liaison Office
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
                      isOpen == 4 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 4 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 4
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-[#014AA8] dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  One of the options to start investing and starting a business
                  in Bangladesh is to open a liaison office. The approval of the
                  Bangladesh Investment Development Authority (BIDA) is required
                  to set up a liaison office.
                  <br className="lg:hidden" /> <br className="lg:hidden" /> The
                  key difference to the branch concept is that the liaison
                  office would not have a local source of income in Bangladesh,
                  but the foreign parent company would have to bear all the
                  establishment and operating costs.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Joint Venture Company */}
        <div className="rounded-lg border-2 border-[#014AA8] dark:border-white mb-4 lg:mb-8 bg-white dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(5)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-[#014AA8] dark:text-white font-semibold">
                  5. Joint Venture Company
                </h2>
                <p className="text-md lg:text-lg text-[#014AA8] dark:text-white font-medium">
                  Collaboration with Local Entrepreneurs
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
                      isOpen == 5 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 5 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 5
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-[#014AA8] dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  In Bangladesh, several foreign entrepreneurs can establish a
                  joint venture in Bangladesh by cooperating with at least one
                  or more Bangladeshi entrepreneurs.{" "}
                  <br className="lg:hidden" /> <br className="lg:hidden" />{" "}
                  Currently, The Register of Joint Stock Companies & Firms
                  (RJSC) is the only authority to register a Joint Venture
                  Company in Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Society / Trust / Foundation */}
        <div className="rounded-lg border-2 border-[#014AA8] dark:border-white mb-4 lg:mb-8 bg-white dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(6)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-[#014AA8] dark:text-white font-semibold">
                  6. Society / Trust / Foundation
                </h2>
                <p className="text-md lg:text-lg text-[#014AA8] dark:text-white font-medium">
                  Trust Registration Process and Requirements
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
                      isOpen == 6 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 6 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 6
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-[#014AA8] dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  Here at KMSS & Associates, we can help you register and set up
                  your trust. The details and procedure for opening a trust in
                  Bangladesh are set below:
                  <br />
                  <br />
                  Trust can be preferred as an entity to do either social
                  business or charity since it affords relatively greater
                  flexibility in terms of status, registration, and management.
                  <br className="lg:hidden" /> <br className="lg:hidden" />
                  If there exists any legal clear purpose, then any person
                  (natural/legal) can form trust through incorporating a trust
                  deed. <br />
                  <br /> It can be created by any person competent to form a
                  contract. The governing law is the Trust Act 1882 and the
                  responsible authority is the relevant sub-registry office.
                  <br className="lg:hidden" /> <br className="lg:hidden" /> The
                  main document required to do a Trust is a trust deed - duly
                  stamped including the author's intention, purpose,
                  beneficiary, trust property, and transfer of trust property to
                  the trustee.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Trade Organization */}
        <div className="rounded-lg border-2 border-[#014AA8] dark:border-white mb-4 lg:mb-8 bg-white dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(7)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-[#014AA8] dark:text-white font-semibold">
                  7. Trade Organization
                </h2>
                <p className="text-md lg:text-lg text-[#014AA8] dark:text-white font-medium">
                  Trade Organization Registration Guidelines
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
                      isOpen == 7 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 7 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 7
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-[#014AA8] dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  We can help you register your Trade Organization. The details
                  and registration procedure for setting up the Trade
                  Organization in Bangladesh are set out below:
                  <br /> <br />
                  The laws relating to Business Organization in Bangladesh are The Trade Organization Ordinance, 1961, as amended by The Trade Organization (Amendment) Ordinance, 1984.<br className="lg:hidden" /> <br className="lg:hidden" /> The Rules made in March 1994, after repealing the Rules made in 1985, were further amended in July 1994. <br /><br /> Besides the above, the other law that is relevant for a
                  business organization is the Companies Act, 1994.{" "}
                  <br className="lg:hidden" /> <br className="lg:hidden" />
                  All references to The Trade Organization Ordinance, 1961, imply its 1984 amendment. References to the Companies Act mean the Companies Act, 1994. <br />{" "}
                  <br />
                  The Trade Organization Ordinance was promulgated in 1961. It
                  was amended in 1984 by The Trade Organization (Amendment)
                  Ordinance, 1984.<br className="lg:hidden" /> <br className="lg:hidden" /> The object of the Ordinance is to provide for
                  the regulation and control of Trade Organizations in the
                  country and for matters ancillary thereto.{" "}
                  <br /> <br />A trade organization is defined as an association formed or intended to be formed with the object of promoting any trade, commerce, or industry, or any group or class thereof.<br className="lg:hidden" /> <br className="lg:hidden" /> It also aims to represent any purpose, in any manner, and to any extent, any trade, commerce, or industry, or any group or class thereof. <br /><br /> A trade organization has to be capable of being
                  formed as a limited company. It has to be, however, a
                  non-profit organization. The law prohibits the payment of any
                  dividend to the members of a Trade Organization.{" "}
                  
                  A Trade Organization applies or intends to apply its profits
                  or other income to achieve its objectives. <br className="lg:hidden" /> <br className="lg:hidden" />No trade
                  organization shall be registered under the Companies Act or
                  such other law unless it holds a license granted by the
                  Government authorizing it to be so registered.
                  <br /> <br />
                  No trade organization shall function or engage in any
                  activities without first obtaining a license under this
                  Ordinance. <br className="lg:hidden" />{" "}
                  <br className="lg:hidden" />
                  Nor any company or a trade organization other than a
                  registered trade organization can use in its name or title the
                  words "Federation" "Chamber" or "Association".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
vii)	Foreign Company
ix)	Liaison Or Branch Office
*/}
    </>
  );
};

export default ServiceTwo;
