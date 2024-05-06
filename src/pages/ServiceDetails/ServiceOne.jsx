import { useState } from "react";
import ServiceBanner from "../../components/ServiceBanner";

const ServiceOne = () => {
  // States
  const [isOpen, setIsOpen] = useState(null);
  const toggle = (idx) => setIsOpen((prevIdx) => (prevIdx == idx ? null : idx));

  return (
    <>
      <ServiceBanner heading={"Our Licensing Service"} />
      <div className="px-[15px] md:px-[60px] xl:px-[120px] 2xl:px-[350px] py-[70px] lg:py-[100px] dark:bg-slate-900">
        {/* Trade License */}
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-5 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(1)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-white font-semibold">
                  1. Trade License
                </h2>
                <p className="text-md lg:text-lg text-blue-600 dark:text-white font-medium">
                  Learn about our trade license.
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
                  UNEX & ASSOCIATES provides services in regard of application
                  for Trade License local government / Pouroshava / Union/City
                  Corporation in Bangladesh. Trade License is mandatory for
                  every form of business entity in Bangladesh.
                </p>
                <p className="text-md lg:text-lg">
                  It is issued by the local government of the respective areas.
                  Every business entity must obtain Trade License from each
                  local government where it operates. If a business entity has
                  more than one place of business, it must obtain Trade License
                  from each local government/Pouroshava/Union/City Corporation.
                </p>
                <p className="text-md lg:text-lg">
                  It is issued for one year and have to be renewed annually.
                  Trade License attracts some government fees, which usually
                  depends on the types of business.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Company Registration */}
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-5 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(2)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-white font-semibold">
                  2. Company Registration
                </h2>
                <p className="text-md lg:text-lg text-blue-600 dark:text-white font-medium">
                  Understand the process and requirements for company
                  registration.{" "}
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
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-blue-600 dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  Incorporating a company in Bangladesh could be difficult for
                  some, unless the right applicable procedure is known. For
                  incorporation of a company, there are various applicable
                  provisions from several acts in Bangladesh.{" "}
                  <br className="md:hidden" /> <br className="md:hidden" /> A
                  brief understanding on what is required for the requirements
                  and procedure for incorporation of a company in Bangladesh may
                  be illustrated from the following:
                </p>
                <p className="text-md lg:text-lg">
                  Generally, there are three types of companies, as per the
                  Companies Act 1994:1.
                </p>
                <ul className="text-md lg:text-lg">
                  <li>1. Company limited by shares</li>
                  <li>2. Company limited by guarantee</li>
                  <li>3. Company with unlimited liability</li>
                </ul>
                <p className="text-md lg:text-lg">
                  Amongst the three, a company limited by shares, is the most
                  common form of incorporation of a company in Bangladesh.{" "}
                  <br className="md:hidden" /> <br className="md:hidden" /> The
                  Registrar of Joint Stock Companies and Firms (RJSC) is the
                  sole authority which facilitates formation of companies etc.;
                  and keeps track of all ownership related issues as prescribed
                  by the laws in Bangladesh.
                </p>
                <p className="text-md lg:text-lg">
                  The step by step procedure for the incorporation of a company
                  is the Registrar of Joint Stock Companies and Firms (RJSC), as
                  no set guidelines are provided in the Companies Act 1994.
                </p>
                <ul>
                  <span className="text-md lg:text-lg">
                    For incorporation of a Private Company limited by shares in
                    Bangladesh the following steps must be ensued:
                  </span>
                  <li>
                    <h2 className="text-lg md:text-xl text-blue-600 dark:text-white font-semibold mt-1">
                      1. Name Clearance | Company Incorporation in Bangladesh:
                    </h2>
                    <p className="text-md lg:text-lg">
                      It is an online process where the applicant has to make an
                      application for name clearance. A nominal amount has to be
                      deposited into the bank prescribed by the RJSC website.
                      <br className="md:hidden" /> <br className="md:hidden" />
                      The name clearance is valid for 180 days and it is
                      recommended that the company incorporation in Bangladesh
                      is formed within this time; otherwise a new name clearance
                      will have to be conducted.
                    </p>
                  </li>
                  <li>
                    <h2 className="text-lg md:text-xl text-blue-600 dark:text-white font-semibold mt-2">
                      2. Documentation | Company Incorporation in Bangladesh:
                    </h2>
                    <p className="text-md lg:text-lg">
                      The following documents would be required to be submitted
                      to RJSC for their verification:
                    </p>
                    <ul className="list-disc ms-8 text-base">
                      <li>
                        Memorandum and Articles of Association of the company;
                      </li>
                      <li>
                        Promoters' resolution to open a Company in Bangladesh;
                      </li>
                      <li>
                        Obtaining and executing the following forms for
                        registering the company with RJSC;
                      </li>
                      <li>
                        Filled in Form I: Declaration on registration of
                        Company;
                      </li>
                      <li>
                        Filled in Form VI: Notice of situation of registered
                        office;
                      </li>
                      <li>Filled in Form IX: Consent of director to act;</li>
                      <li>
                        Filled in Form X: List of persons consenting to be
                        directors;
                      </li>
                      <li>
                        Filled in Form XII: Particulars of the directors,
                        manager and managing agents
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-10 lg:mb-14 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(0)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              
              <div className="space-y-3  text-start">
                <h2 className="text-xl text-blue-600 dark:text-white font-semibold">
                1. Trade License
                </h2>
                <p className="text-md text-blue-600 dark:text-white font-medium">
                  Take a look at what goes into your total cost
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
                      isOpen == 0 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 0 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 0
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-blue-600 dark:text-white space-y-6">
                {" "}
                <h2 className="text-lg md:text-xl font-semibold">
                  Every order is different, and your total photo editing rates
                  will be calculated based on your services, number of images,
                  overall complexity, and speed of your edits.
                </h2>
                <p className="text-sm lg:text-base">
                  When you start a new order, we&apos;ll ask a few questions and
                  then analyze your images on the spot. You&apos;ll get an
                  accurate quote right away, so you know exactly how much your
                  order will cost before you finish your request.
                </p>
                <p className="text-sm lg:text-base">
                  Here&apos;s a breakdown of what we&apos;re looking at when we
                  assess your order and determine your photo editing rates:
                </p>
                <ul>
                  <li className="pb-4">
                    <div className="flex items-center gap-2 text-sm lg:text-lg">
                      <span className="text-blue-400 dark:text-white">1.</span>
                      <h3 className="font-semibold">Service type</h3>
                    </div>
                    <div className="text-sm lg:text-base ps-6 py-2">
                      Each service has a different starting price based on how
                      complicated it is, and how long it will take your
                      designer. You can also combine services—for example
                      background removal + shadow—and when you do this,
                      you&apos;ll get a combined total that accounts for all of
                      the services you&apos;ve chosen.
                    </div>
                  </li>
                  <li className="py-4">
                    <div className="flex items-center gap-2 text-sm lg:text-lg">
                      <span className="text-blue-400 dark:text-white">2.</span>
                      <h3 className="font-semibold">Complexity</h3>
                    </div>
                    <div className="text-sm lg:text-base ps-6 py-2">
                      Not all edits are created equal. If you only need a simple
                      cutout against a plain background, that will cost less
                      than something more complicated (for example, a cutout of
                      a birdcage, or a curly-haired model standing against a
                      wire fence). We&apos;ll analyze each image to see how
                      complicated your edits are, then price them to match.
                    </div>
                  </li>
                  <li className="py-4">
                    <div className="flex items-center gap-2 text-sm lg:text-lg">
                      <span className="text-blue-400 dark:text-white">3.</span>
                      <h3 className="font-semibold">Turnaround time</h3>
                    </div>
                    <div className="text-sm lg:text-base ps-6 py-2">
                      The default turnaround time is 24 hours, but if you need
                      your edits faster, you can choose to pay a bit more and
                      get them sooner. Likewise, if you don&apos;t mind waiting,
                      you can save some money.
                    </div>
                  </li>
                  <li className="pb-4">
                    <div className="flex items-center gap-2 text-sm lg:text-lg">
                      <span className="text-blue-400 dark:text-white">4.</span>
                      <h3 className="font-semibold">Number of copies</h3>
                    </div>
                    <div className="text-sm lg:text-base ps-6 py-2">
                      Need multiple copies of the same image in different sizes
                      or formats? These are priced per copy, at a rate of 20¢
                      per file if you&apos;ve chosen the standard turnaround
                      time.
                    </div>
                  </li>
                </ul>
                <div className="bg-blue-100 dark:bg-slate-700 py-8 px-8 rounded-lg space-y-6">
                  <p className="text-lg text-center text-blue-600 dark:text-white">
                    It&apos;s quick and easy to{" "}
                    <span className="font-semibold">
                      see exactly how much your photo editing rates will cost.
                    </span>{" "}
                    Just start a new order, upload your images, and see your
                    total right there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <ul>
          <li>ii) Company Registration</li>
          <li>iii) Tax ID (TIN)</li>
          <li>iv) Value Added Tax (BIN)</li>
          <li>v) ERC Registration</li>
          <li>vi) IRC Registration</li>
          <li>vii) Factory / Establishment Registration</li>
          <li>viii) Fire Licenses </li>
          <li>ix) Environment Clearance Certificate</li>
        </ul>
      </div>
    </>
  );
};

export default ServiceOne;
