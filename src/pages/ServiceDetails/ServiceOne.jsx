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
      <div className="px-[15px] md:px-[60px] xl:px-[120px] 2xl:px-[350px] py-[16px] lg:py-[40px] dark:bg-slate-900">
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
        {/* Company Registration */}
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-4 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
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
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-4 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
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
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-4 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
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
                  <p className="text-md lg:text-lg">For Company</p>
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
        {/* ERC Registration*/}
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-4 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(5)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-white font-semibold">
                  5. ERC Registration
                </h2>
                <p className="text-md lg:text-lg text-blue-600 dark:text-white font-medium">
                  Understanding ERC Registration Process
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
                      isOpen == 5 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 5 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 5
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-blue-600 dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  Export Registration Certificate is one of the most essential
                  documents for starting international business.
                  <br className="md:hidden" /> <br className="md:hidden" /> At
                  present export business is the most profitable one of
                  Bangladesh business sector. Bangladesh holds a prominent
                  position in the global market as a leading exporter of
                  ready-made garments, frozen food, and potatoes.
                  <br />
                  <br /> Additionally, it maintains a strong presence in sectors
                  such as vegetable goods, handicrafts, seafood, jute products,
                  and agro-based items. Without having export registration
                  certificate (ERC) nobody can export Bangladesh goods to
                  foreign country.
                </p>
                <p className="text-md lg:text-lg">
                  Bangladesh Govt. cordially encourages to enthusiastic foreign
                  and local entrepreneur who wants to set up-export oriented
                  business to invest a lot of lucrative business sector into the
                  country.
                  <br />
                  <br /> The government has established export processing zones
                  to enhance Bangladesh's export industry globally.
                  <br className="md:hidden" /> <br className="md:hidden" /> To
                  initiate an export business, one must obtain a trade license
                  followed by an export registration certificate; without these,
                  conducting export operations is not feasible.
                  <br className="md:hidden" /> <br className="md:hidden" />{" "}
                  Typically, foreign investors begin their export ventures by
                  registering a limited company with the RJSC (Registrar of
                  Joint Stock Companies and Firms).
                </p>
                <div>
                  <p className="text-md lg:text-lg font-semibold underline">
                    Required Supporting Documents:
                  </p>
                  <ul className="ms-4 text-base">
                    <li>1. Owner/MD ID Card PhotoCopy</li>
                    <li>2. Owner/MD Photo - 5 Copies</li>
                    <li>3. Company eTIN</li>
                    <li>4. Trade License</li>
                    <li>5. Bank A/C (Financial Solvency Certificate)</li>
                    <li>
                      6. Membership (Business-related Association membership)
                    </li>
                    <li>7. Treasury Challan</li>
                  </ul>
                </div>
                <div>
                  <p className="text-md lg:text-lg">Add for Company</p>
                  <ul className="ms-4 text-base">
                    <li>1. M & A of Association</li>
                    <li>2. Incorporation</li>
                    <li>3. Form XII</li>
                  </ul>
                </div>
                <div>
                  <p className="text-md lg:text-lg font-semibold underline text-start">
                    PROCESS STEPS
                  </p>
                  <ul className="ms-4 text-base space-y-2">
                    <li>
                      <strong>Step 1:</strong> Collect ERC form from office of
                      Controller Import and Export.
                    </li>
                    <li>
                      <strong>Step 2:</strong> Deposit schedule fees at
                      Bangladesh Bank or any banking channel Fees should be
                      deposits under the head bKash, Nagad, Online Banking
                      Collect and complete 3 copies of A Challan Form and pay
                      the Schedule fee.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* IRC Registration*/}
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-4 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(6)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-white font-semibold">
                  6. IRC Registration
                </h2>
                <p className="text-md lg:text-lg text-blue-600 dark:text-white font-medium">
                  Grasping the Import Registration Certificate (IRC)
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
                      isOpen == 6 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 6 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 6
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-blue-600 dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  {" "}
                  Import Registration Certificate (IRC) is a mandatory document
                  for business entities who are desirous of importing raw
                  material or other special items to Bangladesh.
                  <br className="md:hidden" /> <br className="md:hidden" /> In
                  order to obtain Import Registration Certificate it is
                  expedient to know that The Office of the Chief Controller of
                  Imports & Exports (CCI&E) issues this certificate and the
                  legal basis for this permission is found in Import Policy
                  Order 2015-2018.
                </p>
                <div>
                  <p className="text-md lg:text-lg font-semibold underline">
                    Required Supporting Documents:
                  </p>
                  <ul className="ms-4 text-base">
                    <li>1. Attested photocopy of valid Trade License</li>
                    <li>2. Tax Identification Number (TIN)</li>
                    <li>
                      3. Attested photocopy of membership certificate from local
                      Chamber of Commerce and Industry or relevant Trade
                      Association
                    </li>
                    <li>4. Original copy of A Challan</li>
                    <li>
                      5. If a partnership business: Partnership Deed (certified
                      attested copy)
                    </li>
                    <li>
                      6. If a limited company: (certified attested copies)
                    </li>
                    <li>7. Certificate of Incorporation</li>
                    <li>8. Articles of Association</li>
                    <li>9. Memorandum of Association</li>
                  </ul>
                </div>
                <div>
                  <p className="text-md lg:text-lg">
                    (To facilitate verification of the submitted documents,
                    applicants are requested to submit the original documents as
                    well. The original copies of the documents will be returned
                    at the completion of the process).
                  </p>
                </div>
                <div>
                  <p className="text-md lg:text-lg font-semibold underline text-start">
                    PROCESS STEPS
                  </p>
                  <ul className="ms-4 text-base space-y-2">
                    <li>
                      <strong>Step 1:</strong> Collect IRC form from office of
                      Controller Import and Export.
                    </li>
                    <li>
                      <strong>Step 2:</strong> Deposit the scheduled fees at
                      Bangladesh Bank or through any banking channel. Fees can
                      be deposited via bKash, Nagad, or Online Banking. Collect
                      and complete three copies of the A Challan Form and pay
                      the scheduled fee.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fire Licenses*/}
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-4 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(7)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-white font-semibold">
                  7. Fire Licenses
                </h2>
                <p className="text-md lg:text-lg text-blue-600 dark:text-white font-medium">
                  Requirements for Obtaining a Fire License
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
                      isOpen == 7 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 7 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 7
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-blue-600 dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  {" "}
                  Fire License is an obligatory permit which is required by all
                  factories in Bangladesh as set out by the Fire Prevention and
                  Fire Fighting Act, 2003. <br className="md:hidden" />{" "}
                  <br className="md:hidden" /> This Act sets out regulatory
                  enactments in regards to the prevention, successful
                  extinguishing of fire and also reduction of damages and
                  consequences of fire. <br className="md:hidden" />{" "}
                  <br className="md:hidden" /> The Fire License in Bangladesh is
                  issued by Fire Service and Civil Defence (FSCD).
                </p>
                <div>
                  <p className="text-md lg:text-lg font-semibold">
                    The following documents are required for obtaining Fire
                    License:
                  </p>
                  <ul className="ms-6 text-base list-disc">
                    <li>Duly filled-in prescribed application form</li>
                    <li>Trade license</li>
                    <li>
                      Yearly Valuation Certificate from the relevant City
                      Corporation or Municipality's zonal office
                    </li>
                    <li>Deed of Agreement and receipt of rent</li>
                    <li>
                      Layout of the establishment authorized by RAJUK or City
                      Corporation or relevant municipality's zonal office
                    </li>
                    <li>
                      Certificate of Incorporation and Memorandum of Association
                    </li>
                    <li>
                      No-Objection-Certificate (NOC) from local representative
                    </li>
                    <li>Clearance certificate from the FSCD office</li>
                    <li>
                      Duly filled in additional form (in case of garment's
                      factories)
                    </li>
                    <li>Treasury Challan or Demand note</li>
                  </ul>
                </div>
                <div>
                  <p className="text-md lg:text-lg font-semibold text-start">
                    Procedure
                  </p>
                  <p className="text-sm lg:text-md">
                    {" "}
                    Applicant is required to submit the duly filled-in
                    prescribed application form to FSCD office along with
                    supporting documents. <br className="md:hidden" />{" "}
                    <br className="md:hidden" /> FSDC authority visits the
                    establishment and issues the demand note. The applicant is
                    required to pay the amount prescribed in the Demand note to
                    the bank. <br />
                    <br /> On submitting the bank receipt slip to the FSDC
                    office, the inspector shall re-inspect the establishment.{" "}
                    <br className="md:hidden" /> <br className="md:hidden" /> If
                    he is satisfied that the establishment fulfils the standard
                    requirement of fire safety, FSDC shall issue a fire
                    certificate.
                  </p>
                </div>
                <div>
                  <p className="text-md lg:text-lg font-semibold text-start">
                    Government Free Schedule and Time
                  </p>
                  <p className="text-sm lg:text-md">
                    {" "}
                    Fee varies according to the type of factory establishment
                    and assessment by the officer of FSCD.
                    <br className="md:hidden" /> <br className="md:hidden" />
                    The fire license is required to be renewed every year from
                    FSCD office. Estimated processing time for issuance of Fire
                    license is usually 90-120 working days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Factory / Establishment Registration*/}
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-4 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(8)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-white font-semibold">
                  8. Factory / Establishment Registration
                </h2>
                <p className="text-md lg:text-lg text-blue-600 dark:text-white font-medium">
                  Necessary Documentation for Factory Registration
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
                      isOpen == 8 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 8 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 8
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-blue-600 dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  {" "}
                  An authority of the factory shall apply to the District
                  offices of the Department of Inspection for factories and
                  Establishments for its construction, establishment or
                  expansion, obtaining license or renewing it.
                </p>
                <div>
                  <p className="text-md lg:text-lg font-semibold">
                    Documents Required
                  </p>
                  <ul className="ms-6 text-base list-disc">
                    <li>Construction design of the factory</li>
                    <li>Photocopy of the trade license</li>
                    <li>Duly filled in Form 1 and Form 2</li>
                    <li>Memorandum of Association (Limited Company only)</li>
                    <li>
                      Original copy of license fee or renewal fee or Treasury
                      Challan
                    </li>
                    <li>
                      Receipt of License and Renewal Fee payment according to
                      the number of workers
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm lg:text-md">
                    {" "}
                    Please note that factory license is required to be renewed
                    by 31st December of each year by paying the scheduled
                    renewal fee.
                    <br className="md:hidden" /> <br className="md:hidden" /> If
                    the application for factory construction, expansion,
                    registration or license is refused for any reason, the
                    applicant has the right to appeal to the government within
                    30 (thirty) days of the refusal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Environment Clearance Certificate*/}
        <div className=" rounded-lg border-2 border-blue-600 dark:border-white mb-4 lg:mb-8 bg-blue-100 dark:bg-slate-700 dark:text-slate-200">
          <div>
            <button
              onClick={() => toggle(9)}
              className="flex flex-col md:flex-row h-full w-full items-center justify-between space-y-4 md:space-y-0 lg:pt-6 md:pt-4 md:px-8 py-3 md:py-6 px-5 text-black dark:text-white font-medium"
            >
              <div className="space-y-3  text-start">
                <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-white font-semibold">
                  9. Environment Clearance Certificate (ECC)
                </h2>
                <p className="text-md lg:text-lg text-blue-600 dark:text-white font-medium">
                  Requirements for Obtaining an Environment Clearance
                  Certificate{" "}
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
                      isOpen == 9 && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen == 9 && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out rounded-b-lg ${
                isOpen == 9
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 p-4 md:py-4 lg:py-6 md:px-8 lg:px-12 text-blue-600 dark:text-white space-y-6">
                {" "}
                <p className="text-md lg:text-lg">
                  {" "}
                  Industrialization is an important step towards sustainable
                  economic development. However, industrialization may also
                  inflict environmental degradation like air, water and soil
                  pollution.
                  <br className="lg:hidden" /> <br className="lg:hidden" />{" "}
                  Therefore, the government of Bangladesh advocates for
                  environmental management to reduce the harsh impacts of
                  industrialization. It enacted the Bangladesh Environmental
                  Conservation Act 1995 and Environment Conservation Rules 1997
                  for protection of the environment and reduce pollution. <br />
                  <br /> Article 18A of the Constitution of Bangladesh mandates
                  the state to protect and improve the environment, while also
                  preserving natural resources, biodiversity, wetlands, forests,
                  and wildlife.
                  <br className="md:hidden" /> <br className="md:hidden" /> This
                  commitment is aimed at ensuring their sustainability for
                  present and future citizens.
                </p>
                <div>
                  <p className="text-md lg:text-lg font-semibold">
                    All industrial sites are categorized into one of the
                    following with respect to their project and impact on the
                    environment:
                  </p>
                  <ul className="ms-6 text-base list-disc">
                    <li>Green</li>
                    <li>Orange A</li>
                    <li>Orange B</li>
                    <li>Red</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm lg:text-md">
                    {" "}
                    The frequency of license renewal varies based on the
                    industry category: those in the green category renew every
                    three years, while others renew annually.
                    <br className="md:hidden" /> <br className="md:hidden" />
                    The Environment Clearance Certificate, necessary for
                    renewal, is issued by the Ministry of Environment and
                    Forests.
                  </p>
                </div>
                <div>
                  <p className="text-md lg:text-lg font-semibold">
                    Documents Required
                  </p>
                  <ul className="ms-6 text-base list-disc">
                    <li>Original NOC from local Authority</li>
                    <li>Project profile containing project details</li>
                    <li>Layout plan</li>
                    <li>Cadastral/Cadastre map with Daag and Khotiyan</li>
                    <li>BIDA registration</li>
                    <li>
                      Rent Agreement or Document of Land ownership (whichever
                      applies)
                    </li>
                    <li>Treasury Challan for fee payment</li>
                    <li>Time Required</li>
                  </ul>
                </div>
                <div>
                  <p className="text-md lg:text-lg">
                    {" "}
                   Estimated processing time for issuance of Environment Clearance certificate is 1-5 months.
                  </p>
                  <div className="ms-2">
                  <p className="text-md lg:text-lg font-semibold text-start">
                    Government Fees
                  </p>
                  <ul className="text-base space-y-2">
                    <li>
                      If the total investment of the project is between BDT 1 (one) to BDT 50 (fifty) crore the fee shall be between BDT 1500 (fifteen hundred) to BDT 50000 (fifty thousand). If the total investment is above 50 (fifty) crore the fee shall be BDT 100000 (one Lac).
                    </li>
                  </ul>
                </div>
                  <div className="ms-2">
                  <p className="text-md lg:text-lg font-semibold text-start">
                    Renewal Fee
                  </p>
                  <ul className="text-base space-y-2">
                    <li>
                      If the total investment of the project is between BDT 1 (one) to BDT 50 (fifty) crore the fee shall be between BDT 375 (three hundred & seventy five) to BDT 12500 (twelve thousand five hundred). If the total investment is above 50 (fifty) crore the fee shall be BDT 25000 (twenty five thousand).
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceOne;
