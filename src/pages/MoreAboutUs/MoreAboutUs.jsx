import ceoImg from "../../assets/ceo_img.png";

const MoreAboutUs = () => {
  return (
    <div>
      {/* About Us Banner */}
      <div className="bg-gradient-to-r from-blue-800 via-purple-700 to-purple-900 py-20 text-center dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 dark:text-gray-200">
          About Us
        </h2>
        <p className="text-lg lg:text-xl font-medium text-white opacity-90 dark:text-gray-300">
          We are committed to excellence and innovation in everything we do.
        </p>
      </div>

      {/* Top Section */}
      <section className="dark:bg-slate-800">
        <div className="container mx-auto p-5 md:p-10 xl:px-0 space-y-3 text-base lg:text-lg">
          <p className="text-start text-slate-800 dark:text-slate-200">
            KMSS Associates & Co., a renowned consultancy firm in Dhaka,
            Bangladesh, offers comprehensive legal and professional services
            covering various acts such as the Companies Act, Trade Organization
            Act, and Trust Act.
          </p>
          <p className="text-start text-slate-800 dark:text-slate-200">
            Their expertise extends to assisting clients with tax ordinances,
            accounting standards, and registration acts, ensuring compliance
            with prevailing laws in the country. <br className="md:hidden" />{" "}
            <br className="md:hidden" /> With a commitment to excellence, they
            provide tailored solutions for all legal and professional matters
            across different sectors in Bangladesh.
          </p>
          <p className="text-start text-slate-800 dark:text-slate-200">
            We provide Income Tax Consultancy, Accounting Services, Company Law
            & Corporate Affairs, Value Added Tax (VAT), Bangladesh Investment
            Development Authority Affairs (BIDA), <br className="md:hidden" />{" "}
            <br className="md:hidden" /> ERC, IRC, Project Profile and local &
            international Accountings Outsourcing and any other services as the
            company as well as individual may think fit and proper. We are
            committed to provide the best services to our clients.
          </p>
        </div>
      </section>

      {/* CEO Message Section*/}
      <section className="dark:bg-slate-800">
        <div className="container mx-auto p-5 md:p-10 xl:px-0 space-y-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-orange-700 dark:text-slate-200">
            Message from Founder & CEO
          </h2>
          <div className="xl:grid grid-cols-12 justify-between items-end gap-28">
            <div className="xl:col-span-7">
              <div className="lg:flex items-center gap-10 space-y-4">
                <img
                  className="w-full md:w-3/5 lg:w-4/5 mx-auto xl:hidden rounded-b-2xl mb-4 lg:mb-0"
                  src={ceoImg}
                  alt="CEO Image"
                />
                <div className="space-y-4 text-base lg:text-lg">
                  <p className="text-start text-slate-800 dark:text-slate-200">
                    By the grace of almighty Allah, I am grateful to lead this
                    company and express my words. Most service & consultant
                    companies, like most families, develop and live with a
                    common set of values communicated and shared over the
                    company&apos;s life.
                    <br className="md:hidden" /> <br className="md:hidden" />
                    We have been consulting and serving both public sector and
                    private sector clients for almost 5 years, delivering our
                    services in an integrated and team approach.
                  </p>

                  <p className="text-start text-slate-800 dark:text-slate-200">
                    KMSS Associates & Co., this family of chartered accountants,
                    associates, and staff, has been motivated by a desire to see
                    our clients succeed, grow, and prosper.{" "}
                    <br className="md:hidden" /> <br className="md:hidden" />{" "}
                    Our company is focused on providing the highest level of
                    client services, and our company culture reflects our goals
                    of passionate and ethical commitment to our client&apos;s
                    interests and goals.
                    <br className="md:hidden" /> <br className="md:hidden" /> We
                    are also committed to public and community service and most
                    of our private companies and associates hold leadership
                    positions in various communities.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:col-span-5">
              <img
                className="rounded-b-2xl hidden xl:block  w-8/12"
                src={ceoImg}
                alt="CEO Image"
              />
            </div>
          </div>
          <p className="w-full text-start text-slate-800 dark:text-slate-200 text-base lg:text-lg">
            Our company culture also demands that we create a work environment
            that stresses dignity and ethics and a commitment to client
            representation. <br className="md:hidden" />{" "}
            <br className="md:hidden" /> We have been recognized as one of the
            best places to work in Bangladesh for the last 5 years. I am proud
            to lead the company as its Chief Executive Officer and to work
            closely with some of the finest chartered accountants, associates,
            and staff in the country. <br className="md:hidden" />{" "}
            <br className="md:hidden" /> Their commitment to professionalism,
            ethics, and the highest ideals of client service is something that I
            find admirable. Our most valuable resource and I would like to wish
            the best of the future to them and the company.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MoreAboutUs;
