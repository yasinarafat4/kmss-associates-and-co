import React, { useState } from 'react';
import ServiceBanner from '../../components/ServiceBanner';

const ServiceTwo = () => {
     // States
  const [isOpen, setIsOpen] = useState(null);
  const toggle = (idx) => setIsOpen((prevIdx) => (prevIdx == idx ? null : idx));

    return (
        <div>
             <ServiceBanner heading={'Our Entity Formation Service'} />
              {/* Trade License */}
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-4 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
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
                  KMSS & ASSOCIATES provides services in regard of application
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
        </div>
    );
};

export default ServiceTwo;