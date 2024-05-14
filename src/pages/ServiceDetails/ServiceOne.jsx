import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
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
                  <li>
                    <h2 className="text-lg md:text-xl text-blue-600 dark:text-white font-semibold mt-2">
                      3. Post Registration | Company Incorporation in
                      Bangladesh:
                    </h2>
                    <ul className="list-disc ms-8 text-base">
                      <li>
                        Promoter shall open a temporary bank account in the name
                        of the proposed company with any scheduled bank with the
                        condition that the account shall be regularized once the
                        company is duly registered with RJSC;
                      </li>
                      <li>Capital contribution into the bank account;</li>
                      <li>
                        Obtain encashment certificate from the bank which states
                        that the amount required for capital contribution has
                        been duly remitted in the temporary bank account of the
                        proposed company;
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2 className="text-lg md:text-xl text-blue-600 dark:text-white font-semibold mt-2">
                      4. Banking Formalities | Company Incorporation in
                      Bangladesh:
                    </h2>
                    <p className="text-md lg:text-lg">
                      Post registration formalities include obtaining the
                      following certificates/ licenses:
                    </p>
                    <ul className="list-disc ms-8 text-base">
                      <li>Tax Identification Number;</li>
                      <li>Value Added Tax (VAT) Certificate;</li>
                      <li>Trade License;</li>
                    </ul>
                  </li>
                  <li>
                    <h2 className="text-lg md:text-xl text-blue-600 dark:text-white font-semibold mt-2">
                      5. Return Filing | Company Incorporation in Bangladesh:
                    </h2>
                    <p className="text-md lg:text-lg">
                      Registered entities are under an obligation to file
                      returns in prescribed forms and schedules, and the RJSC
                      upon satisfaction approves and preserves such records.
                      There are two types of returns:
                    </p>
                    <span className="text-md mt-2">
                      <strong>a) Annual Return:</strong> Every year the company
                      must submit the following documents to the RJSC-
                    </span>
                    <ul className="list-disc ms-8 text-base">
                      <li>
                        Schedule X: It is an annual summary of share capital and
                        list of shareholders; S.36;
                      </li>
                      <li>
                        Balance Sheet within 30 days from the date of Annual
                        General Meeting (AGM);
                      </li>
                      <li>
                        Profit and Loss Account within 30 days from the date of
                        AGM;
                      </li>
                      <li>
                        Form 23B: It is a letter of approval by the auditor to
                        be submitted within 30 days since the date of
                        appointment;
                      </li>
                    </ul>
                    <span className="text-md mt-2">
                      <strong>b) Return for any change in entity:</strong> In
                      case of any change made in the company, a relevant return
                      in prescribed form must be filed with the RJSC. If you
                      need a company consultant to help register your company,
                      get an appointment with our Company lawyer for further
                      details.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Tax ID (TIN)*/}
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-5 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(3)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-white font-semibold">
                  3. Tax ID (TIN)
                </h2>
                <p className="text-md lg:text-lg text-blue-600 dark:text-white font-medium">
                  Understanding the basics of Tax Identification Numbers
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
                      isOpen == 3 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 3 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 3
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-blue-600 dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  Documents Required for obtaining TIN for Company in
                  Bangladesh:
                </p>
                <ul className="list-disc ms-8 text-base">
                  <li>Photocopy of Trade License</li>
                  <li>Personal Details (If Person)</li>
                  <li>
                    Copy of Memorandum and Articles of Association (If Company)
                  </li>
                  <li>
                    Bank Solvency Certificate (If Company or Proprietorship)
                  </li>
                  <li>
                    Three copies of photograph of Owner (If Proprietorship)
                  </li>
                  <li>
                    Three copies of photograph of Managing Director (If Company)
                  </li>
                  <li>Three copies of photograph (If Person)</li>
                  <li>National ID/ Passport copy of Entrepreneur</li>
                  <li>Mobile phone number</li>
                  <li>Incorporation number of the company</li>
                  <li>Date of incorporation of the company</li>
                  <li>Name of authorized person</li>
                </ul>
                <div className="ms-7 lg:ms-10">
                  <p className="flex items-center gap-1">
                    <BsFillArrowRightCircleFill />{" "}
                    <span>Official Time limit - 5 hours</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <BsFillArrowRightCircleFill />{" "}
                    <span>Government fees - NILL</span>
                  </p>
                </div>
                <div className="space-y-4 ms-2 lg:ms-4">
                  <h2 className="text-lg md:text-xl text-blue-600 dark:text-white font-semibold mt-2">
                    Tax Identification Number (TIN)
                  </h2>
                  <p className="text-md lg:text-lg">
                    TIN means Tax Identification Number (TIN). Where e-TIN means
                    Electronic Tax Identification Number (e-TIN). In Bangladesh,
                    The only authority to provide the Tax Identification Number
                    (TIN) is National Board of Revenue (NBR).{" "}
                    <br className="md:hidden" /> <br className="md:hidden" /> To
                    obtain Tax Identification Number, one can apply either in
                    manually or electrically through National Board of Revenue
                    (NBR).
                  </p>
                  <p className="text-md lg:text-lg">
                    Tax is the main source of revenue for the government of any
                    country. The current government, which is aimed to
                    digitalization the nations have pursued the Electronic tax
                    identification number (E-TIN) with the aim of enhancing the
                    effectiveness and efficiency of tax collection procedure.{" "}
                    <br className="md:hidden" /> <br className="md:hidden" />
                    Under this scenario, Taxpayer's Identification Number (TIN)
                    Certificate is very important documents for Bangladeshi
                    personnel and companies.
                  </p>
                  <p className="text-md lg:text-lg">
                    As per The Income Tax Ordinance, 1984, Under section 124A,
                    without reasonable cause, if any person uses other persons
                    Tax Identification number (TIN), or use fake tax
                    identification number (TIN) during the time of submitting
                    return of income then Deputy Commissioner of Taxes (DCT) may
                    impose penalty upto BDT 20,000.
                  </p>
                  <p className="text-md lg:text-lg">
                    Under section 124AA, without reasonable cause, if a person
                    fails the verification of the authenticity of twelve-digit
                    tax identification Number (TIN) then the Deputy Commissioner
                    of Taxes (DCT) or any other income tax authority authorized
                    by the Board for this purpose, may impose a penalty upto
                    BDT. 50,000.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Value Added Tax (BIN)*/}
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-5 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(4)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-white font-semibold">
                  4. Value Added Tax (BIN)
                </h2>
                <p className="text-md lg:text-lg text-blue-600 dark:text-white font-medium">
                  Understanding Value Added Tax (VAT)
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
                      isOpen == 4 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 4 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 4
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-blue-600 dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  KMSS & Associates has a very significant practice and
                  experience in VAT related services in Bangladesh. UNEX &
                  Associates provides the best VAT Consultant in Bangladesh who
                  is the experts in VAT Law which are in generally divided to
                  Value Added Tax.
                </p>
                <p className="text-md lg:text-lg font-semibold underline text-center">
                  VAT Certificate require to submit following documents:
                </p>
                <div>
                  <p className="text-md lg:text-lg">
                    Requirement for VAT registration
                  </p>
                  <ul className="ms-4 text-base">
                    <li>1. eTIN Certificate</li>
                    <li>2. Trade Licence</li>
                    <li>3. Bank Solvency Certificate</li>
                    <li>4. Old VAT (if Any)</li>
                    <li>5. NID (For Declaration)</li>
                    <li>6. eMail Address</li>
                    <li>7. Mobile No</li>
                  </ul>
                </div>
                <div>
                  <p className="text-md lg:text-lg">
                    For Company
                  </p>
                  <ul className="ms-4 text-base">
                    <li>1. Incorporation Certificate</li>
                    <li>2. MOA and AOA</li>
                    <li>3. Form XII</li>
                    <li>4. NID (All Directors)</li>
                    <li>5. Yearly Turn Over (Effective Date)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul>
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
