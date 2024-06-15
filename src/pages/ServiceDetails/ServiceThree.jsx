import React, { useState } from "react";
import ServiceBanner from "../../components/ServiceBanner";

const ServiceThree = () => {
  // Accordion data
  const dataArr = [
    {
      title: "General Ledger & Financial Statement Preparation",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "Personal Financial Statement Preparation",
      description:
        "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "Bookkeeping (Monthly, Quarterly, Annually)",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Cash Flow Budgeting",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "Profit-Sharing Plans",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
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
      <div className="px-[20px] py-[10px] md:px-[100px] md:py-[30px]">
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
            {dataArr.map((data, idx) => (
              <div
                key={idx}
                onClick={() => handleToggle(idx)}
                className="flex items-center"
              >
                {/* Index div  */}
                <div className="flex size-16 select-none items-center justify-center rounded-md bg-[#0149AB] font-sans text-xl md:text-2xl font-semibold text-white">
                  <span>0{idx + 1}</span>
                </div>

                <div className="relative h-[2px] w-5 md:w-10 bg-[#0149AB]">
                  <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-[#0149AB] bg-white"></span>
                  <span className="h-1 w-5 md:w-10 bg-[#0149AB]"></span>
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
                  <div className="relative md:max-w-[750px] lg:max-w-[850px] border-t-[12px] border-[#0149AB] bg-sky-50 p-3 shadow-md">
                    <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-[#0149AB]"></span>
                    <h1 className="select-none text-lg text-[#0149AB]">
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
                      <div className="max-w-[280px] md:max-w-[550px] lg:max-w-[950px] bg-[#0149AB] p-6 text-sm text-white">
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
