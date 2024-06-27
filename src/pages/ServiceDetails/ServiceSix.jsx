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
          <br /> <br /> Initiating
          an IPO involves several steps, starting with the formation of an IPO
          team that includes experts in securities and exchange regulations
          (such as those from the Securities and Exchange Commission, or SEC).
          <br className="lg:hidden" /> <br className="lg:hidden" />
          Additionally, the company must prepare a prospectus, which details its
          financial performance and provides comprehensive information about the
          company.
          <br className="lg:hidden" /> <br className="lg:hidden" />
          Afterward, the financial statements must be audited to ensure that all
          included information is accurate. Finally, the company submits the
          prospectus to the SEC and sets a date for the offering.
          <br /> <br />
          The main advantage of an IPO is that it helps the company raise
          capital. Holding stocks in a public company can also attract talented
          employees, which is beneficial for recruiting better talent.
          <br className="lg:hidden" /> <br className="lg:hidden" />
          However, there are disadvantages to offering an IPO. As a public
          company, it must disclose information that could be advantageous to
          competitors when filing various reports with the SEC.<br className="lg:hidden" /> <br className="lg:hidden" /> To conduct an
          IPO, an organization must work with investment banks or multiple
          banks. The company conducting the IPO is called the issuer.
          <br /> <br />
          The capital market involves collecting assets from various entities
          and making them available to those needing funds. Its core function is
          to enhance transaction efficiency, so individual entities do not need
          to conduct extensive searches and analyses.<br className="lg:hidden" /> <br className="lg:hidden" />  The capital market acts as
          an intermediary, gathering funds from different sources and making
          them available to entities that need them most.
          <br /> <br />
          The capital market has two main types: the primary market and the
          secondary market. In the primary market, underwriting occurs, where
          new securities are sold for the first time. In the secondary market,
          existing securities are traded, either over-the-counter (OTC) or
          through other platforms.
        </p>
      </div>
    </div>
  );
};

export default ServiceSix;
