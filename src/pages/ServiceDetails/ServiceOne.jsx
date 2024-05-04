import React from "react";
import ServiceBanner from "../../components/ServiceBanner";

const ServiceOne = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-slate-200">
      <ServiceBanner heading={"Our Licensing Service"} />
      <div>
        <ul>
          <li>i) Trade License </li>
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
    </div>
  );
};

export default ServiceOne;
