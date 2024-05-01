import { useState } from "react";

const FAQs = () => {
  const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    {title: "What legal and professional services do you provide?",
    description: 'We offer a wide range of legal and professional services including Income Tax Consultancy, Accounting Services, Company Law & Corporate Affairs, Value Added Tax (VAT), and assistance with Bangladesh Investment Development Authority Affairs (BIDA), ERC, IRC, and Project Profile.',},
    {title: "How do you ensure compliance with Bangladeshi laws and regulations?",
    description:"Our team stays updated with the latest laws and regulations in Bangladesh, including the Companies Act, Trade Organization Act, and more. We work closely with clients to ensure their operations adhere to all legal requirements.",},
    {title: "Do you offer international accounting outsourcing services?",
    description:"Yes, we provide local and international accounting outsourcing services, ensuring efficient and accurate financial management for businesses of all sizes.",},
    {title: "How do you assist with tax-related matters?",
    description: "We provide comprehensive Income Tax Consultancy, helping clients understand and navigate their tax obligations, optimize their tax positions, and comply with relevant tax laws.",},
    {title: "What sets UNEX & Associates apart from other consultancy firms?",
    description:"Our commitment to excellence, broad expertise, and personalized services make us stand out. We aim to provide the best possible services to our clients, ensuring their satisfaction and success.",},];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
  };
  
  return (
    <section
      className="bg-cover md:bg-fixed h-full md:h-[450px] lg:h-[500px] py-6 px-3 md:px-4 lg:px-10 flex justify-center items-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)), url("https://i.ibb.co/tzJ3q9F/kms-banner.jpg")',
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="rounded-lg font-sans">
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white mb-4'>Frequently Asked Questions</h2>
        {accordionsData.map((PerAccordion, idx) => (
          <div key={idx} className="border-b border-gray-500 last-of-type:border-none">
            <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between py-4 font-medium text-white">
              <span className="text-base lg:text-xl text-start">{PerAccordion.title}</span>
              <span className="rounded-full p-2 ">
                <svg className="ml-8 mr-7 shrink-0 fill-[#fff]" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                </svg>
              </span>
            </button>
            <div className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden text-white text-sm text-start">{PerAccordion.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
