import React from "react";
import ceoImg from "../assets/ceo_img.png";
import Container from "./Container";

const MoreAboutUs = () => {
  return (
    <Container>
      <h2 className="text-3xl lg:text-4xl font-semibold text-center text-orange-700 dark:text-white">
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
      <h2 className="text-3xl lg:text-4xl font-semibold text-center text-orange-700 dark:text-white">
        Massage from CEO
      </h2>
      <div className="px-2 lg:px-10 py-4 space-y-3">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10">
          <div>
            <div className="lg:flex items-center gap-10 space-y-4">
              <img
                className="w-full md:w-3/5 mx-auto xl:hidden rounded-b-2xl mb-4 lg:mb-0"
                src={ceoImg}
                alt="CEO Image"
              />
             <div className="space-y-4">
             <p className="text-start text-slate-800 dark:text-white">
                By the grace of almighty Allah, I am grateful to lead this
                company and express my words. Most service & consultant
                companies, like most families, develop and live with a common
                set of values communicated and shared over the company's life.
                We have been consulting and serving both public sector and
                private sector clients for almost 5 years, delivering our
                services in an integrated and team approach.
              </p>

              <p className="text-start text-slate-800 dark:text-white">
                UNEX & Associates, this family of chartered accountants,
                associates, and staff, has been motivated by a desire to see our
                clients succeed, grow, and prosper. Our company is focused on
                providing the highest level of client services, and our company
                culture reflects our goals of passionate and ethical commitment
                to our client's interests and goals. We are also committed to
                public and community service and most of our private companies
                and associates hold leadership positions in various communities.
              </p>
             </div>
            </div>
          </div>
          <img
            className="rounded-b-2xl hidden xl:block"
            src={ceoImg}
            alt="CEO Image"
          />
        </div>
        <p className="w-full xl:w-10/12 text-start text-slate-800 dark:text-white">
          Our company culture also demands that we create a work environment
          that stresses dignity and ethics and a commitment to client
          representation. We have been recognized as one of the best places to
          work in Bangladesh for the last 5 years. I am proud to lead the
          company as its Chief Executive Officer and to work closely with some
          of the finest chartered accountants, associates, and staff in the
          country. Their commitment to professionalism, ethics, and the highest
          ideals of client service is something that I find admirable. Our most
          valuable resource and I would like to wish the best of the future to
          them and the company.
        </p>
      </div>
    </Container>
  );
};

export default MoreAboutUs;
