import React from "react";
import ServiceBanner from "../../components/ServiceBanner";

const ServiceSix = () => {
  return (
    <div>
      <ServiceBanner heading={"Our Stock Capital Market Service"} />
      <div className="px-[20px] py-[10px] md:px-[100px] md:py-[20px] dark:bg-slate-700 dark:text-slate-200">
        <h2 className="text-lg font-semibold mb-1">Profit-Sharing Plans</h2>
        <p className="text-md lg:text-base">
          When a company raises capital by issuing shares of stock, it is called
          an Initial Public Offering (IPO). An IPO is the process by which a
          company issues stock to the public for the first time, often referred
          to as "going public."
          <br className="lg:hidden" /> <br className="lg:hidden" /> One reason
          for the existence of the stock market is to facilitate the issuance of
          shares through IPOs. This process allows a company to raise capital
          for various purposes.
          <br className="lg:hidden" /> <br className="lg:hidden" /> Initiating
          an IPO involves several steps, starting with the formation of an IPO
          team that includes experts in securities and exchange regulations
          (such as those from the Securities and Exchange Commission, or SEC).
          <br className="lg:hidden" /> <br className="lg:hidden" />
          Additionally, the company must prepare a prospectus, which details its
          financial performance and provides comprehensive information about the
          company.
        </p>
      </div>
    </div>
  );
};

export default ServiceSix;
