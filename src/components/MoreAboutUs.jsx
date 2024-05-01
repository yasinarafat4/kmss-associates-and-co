import React from "react";
import Container from "./Container";

const MoreAboutUs = () => {
  return (
    <Container>
      <h2 className="text-4xl font-semibold text-center text-orange-700 dark:text-white">
        About Us
      </h2>
      <div className="px-2 lg:px-10 py-4 space-y-3">
        <p className="text-start text-slate-800 dark:text-white">
          UNEX & Associates is a renowned consultancy firm in Dhaka, Bangladesh.
          We are providing and dealing with all sorts of legal and professional
          services and matters to operate and run in connection with the
          Companies Act, Trade Organization Act, Societies Registration Act,
          Trust Act, Income Tax Ordinance, Sales Tax, Gift Tax, Customs Act,
          Value Added Tax Act, Estate Duty Act, Patent-Design and Trademark
          Registration Act, Copyright Act, Bangladesh Accounting Standard (BSA),
          International Accounting Standard (IAS) and any other Acts which are
          prevailing and operative in Bangladesh.
        </p>
        <p className="text-start text-slate-800 dark:text-white">
          We provide Income Tax Consultancy, Accounting Services, Company Law &
          Corporate Affairs, Value Added Tax (VAT), Bangladesh Investment
          Development Authority Affairs (BIDA), ERC, IRC, Project Profile and
          local & international Accountings Outsourcing and any other services
          as the company as well as individual may think fit and proper. We are
          committed to provide the best services to our clients.
        </p>
      </div>
      <h2 className="text-4xl font-semibold text-center text-orange-700 dark:text-white">
        Massage from CEO
      </h2>
    </Container>
  );
};

export default MoreAboutUs;
