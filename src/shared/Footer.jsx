import { Link } from "react-router-dom";
import logo from "../../src/assets/kmss_logo.png";
import emailImg from "../assets/email.png";
import locaionImg from "../assets/location.png";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="bg-slate-950 dark:bg-slate-950 text-white text-base lg:text-lg">
      <footer className="footer pb-4">
        <aside>
          <Link to="/">
            <img className="w-20 md:w-28 pb-2" src={logo} alt="footer logo" />
          </Link>
          <p>
            {" "}
            Providing exceptional legal and professional services
            <br className="hidden lg:block" /> with integrity and excellence.
            Tailored solutions to meet your <br className="hidden lg:block" />{" "}
            unique needs. Contact us for expert advice and personalized support.
          </p>
          <div>
            <div className="xl:flex justify-start items-center gap-4">
              <div className="flex items-center pt-3">
                <img
                  src={emailImg}
                  alt="email icon"
                  className="w-6 h-auto mr-2"
                />
                <p>kmssassociates52@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <img
                src={locaionImg}
                alt="location icon"
                className="w-6 h-auto mr-2"
              />
              <p>19/1, BL-K, Eastern Housing, Mirpur-12, Dhaka-1216</p>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">
            <Link to={"/licencing-service"}>Licencing</Link>
          </a>
          <a className="link link-hover">
            <Link to={"/entity-formation-service"}>Entity Formation</Link>
          </a>
          <a className="link link-hover">
            <Link to={"/accounting-service"}>Accounting</Link>
          </a>
          <a className="link link-hover">
            <Link to={"/tax-advisory-service"}>Tax Advisory</Link>
          </a>
          <a className="link link-hover">
            <Link to={"/audit-and-assurance-service"}>Audit & Assurance</Link>
          </a>
          <a className="link link-hover">
            <Link to={"/ipo-capital-market-service"}>IPO & Capital Market</Link>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a href="#faqs" className="link link-hover">
            FAQs
          </a>
          <a  className="link link-hover">
            
            <Link to={"/more-about-us"}>About us</Link>
          </a>
          <a className="link link-hover">
            
            <Link to={"/contact-us"}>Contact</Link>
          </a>
          <a className="link link-hover">
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
          </a>
          <a className="link link-hover">
            <Link to={"/terms-and-conditions"}>Terms & Conditions</Link>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Important Links</h6>
          <a href="https://nbr.gov.bd" target="_blank" className="link link-hover" rel="noreferrer">
            National Board Of Revenue
          </a>
          <a href="https://bida.gov.bd" target="_blank" className="link link-hover" rel="noreferrer">
            BIDA
          </a>
          <a href="https://www.bepza.gov.bd" target="_blank" className="link link-hover" rel="noreferrer">
            BEPZA
          </a>
          <a href="https://dsebd.org" target="_blank" className="link link-hover" rel="noreferrer">
            Dhaka Stock Exchange(DSE)
          </a>
          <a href="https://roc.gov.bd" target="_blank" className="link link-hover" rel="noreferrer">
            RJSC
          </a>
          <a href="https://mincom.gov.bd" target="_blank" className="link link-hover" rel="noreferrer">
            Ministry of Commerce
          </a>
        </nav>
      </footer>
      <hr />
      <div className="text-center md:flex items-center justify-between py-4 md:px-10 xl:px-3">
        <p className="mt-4 text-base lg:text-lg">
          © {currentYear} All rights reserved by KMSS Associates.
        </p>
        {/* Social Icons */}
        <div className="flex justify-center items-center pt-3 gap-2">
          <a target="_blank" href="https://www.facebook.com/jewel.finix" rel="noreferrer">
            <img
              src="https://i.ibb.co/3d2ygD0/facebook-4.png"
              alt="Facebook"
              className="w-6 h-auto mr-2"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/k-m-saiful-islam" rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/pRp6105/linkedin-2.png
                "
              alt="LinkedIn"
              className="w-6 h-auto mr-2"
            />
          </a>
          <a href="https://twitter.com">
            <img
              src="https://i.ibb.co/MGRThhw/twitter-2.png"
              alt="Twitter"
              className="w-6 h-auto mr-2"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
