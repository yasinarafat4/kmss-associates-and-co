import React from "react";
import ServiceBanner from "../../components/ServiceBanner";

const ServiceThree = () => {
  return (
    <div>
      <ServiceBanner heading={"Our Accounting Service"} />
      <div className="px-[100px] py-[30px]">
        <p className="text-md lg:text-lg">
          <strong>KMSS & Associates</strong> provides a wide range of accounting services to
          individuals and businesses in a variety of companies. Here we strive
          to meet each client's specific needs in planning for the future and
          achieving their goals in an ever-changing financial and regulatory
          environment.
          <br className="lg:hidden" /> <br className="lg:hidden" /> From start-ups to established enterprises, businesses
          rely on accurate and insightful financial information in order to
          maintain profitability and capitalize on new opportunities. <br />{" "}
          <br />
          <strong>KMSS & Associates</strong> accounting services steer you closer to these goals
          with accurate record-keeping and reporting as well as support on
          financial issues such as initial accounting system setup,
          cost-containment, tax planning, investments, and employee benefit and
          profit-sharing plans.
        </p>
      </div>
    </div>
  );
};

export default ServiceThree;
