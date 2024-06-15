import React, { useState } from "react";
import ServiceBanner from "../../components/ServiceBanner";

const ServiceThree = () => {
  // Accordion data
  const accountingServiceData = [
    {
      title: "General Ledger & Financial Statement Preparation",
      description:
        "We record all financial transactions in the general ledger and prepare financial statements to reflect your business's performance accurately.",
    },
    {
      title: "Personal Financial Statement Preparation",
      description:
        "Our team prepares detailed personal financial statements, summarizing your assets, liabilities, income, and expenses for financial assessments.",
    },
    {
      title: "Bookkeeping (Monthly, Quarterly, Annually)",
      description:
        "We handle your bookkeeping by recording financial transactions periodically, ensuring accurate and organized financial records throughout the year.",
    },
    {
      title: "Cash Flow Budgeting",
      description:
        "Our comprehensive service involves creating a detailed cash flow budget to plan and manage your cash inflows and outflows, ensuring financial stability.",
    },
    {
      title: "Profit-Sharing Plans",
      description:
        "We design and administer profit-sharing plans to distribute a portion of company profits to employees, enhancing their motivation and engagement.",
    },
  ];

  // Accordion toggle state and function
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div>
      <ServiceBanner heading={"Our Accounting Service"} />
      <div className="px-[20px] py-[10px] md:px-[100px] md:py-[30px] dark:bg-slate-700 dark:text-slate-200">
        <p className="text-md lg:text-lg">
          <strong>KMSS & Associates</strong> provides a wide range of accounting
          services to individuals and businesses in a variety of companies. Here
          we strive to meet each client's specific needs in planning for the
          future and achieving their goals in an ever-changing financial and
          regulatory environment.
          <br className="lg:hidden" /> <br className="lg:hidden" /> From
          start-ups to established enterprises, businesses rely on accurate and
          insightful financial information in order to maintain profitability
          and capitalize on new opportunities. <br /> <br />
          <strong>KMSS & Associates</strong> accounting services steer you
          closer to these goals with accurate record-keeping and reporting as
          well as support on financial issues such as initial accounting system
          setup, cost-containment, tax planning, investments, and employee
          benefit and profit-sharing plans.
        </p>
        <br />
        <span className="underline font-semibold text-md lg:text-lg">
          Below our Accounting Services:
        </span>

        {/* Accordion */}
        <div className="flex w-full justify-center">
          <div className=" md:max-w-[750px] lg:max-w-[850px] cursor-pointer space-y-6 pt-10 pb-20">
            {/* mapping each accordion  */}
            {accountingServiceData.map((data, idx) => (
              <div
                key={idx}
                onClick={() => handleToggle(idx)}
                className="flex items-center"
              >
                {/* Index div  */}
                <div className="flex h-16 w-16 select-none items-center justify-center rounded-md bg-[#0149AB] dark:bg-slate-900 dark:text-slate-200 font-sans text-xl md:text-2xl font-semibold text-white">
                  <span>0{idx + 1}</span>
                </div>

                <div className="relative h-[2px] w-5 md:w-10 bg-[#0149AB] dark:bg-slate-900 dark:text-slate-200">
                  <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-[#0149AB] bg-white"></span>
                  <span className="h-1 w-5 md:w-10 bg-[#0149AB] dark:bg-slate-900 dark:text-slate-200"></span>
                  <span
                    className={`absolute -right-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 ${
                      isOpen === idx
                        ? "border-[#0149AB] bg-white delay-100"
                        : "border-transparent"
                    }`}
                  ></span>
                </div>

                {/* Main accordion div  */}
                <div className="text-center">
                  <div className="relative md:max-w-[750px] lg:max-w-[850px] border-t-[12px] border-[#0149AB] dark:border-slate-900 bg-sky-100 dark:bg-slate-600 p-3 shadow-md">
                    <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-[#0149AB] dark:border-r-slate-900"></span>
                    <h1 className="select-none text-lg text-[#0149AB] dark:text-slate-200">
                      {data.title}
                    </h1>
                  </div>
                  <div
                    className={`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out ${
                      isOpen === idx
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="max-w-[280px] md:max-w-[550px] lg:max-w-[950px] bg-[#0149AB] dark:bg-slate-900 dark:text-slate-200 p-6 text-sm text-white">
                        {data.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceThree;
