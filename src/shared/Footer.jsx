import React from "react";
import callImg from "../assets/call.png";
import emailImg from "../assets/email.png";
import locaionImg from "../assets/location.png";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="bg-slate-950 dark:bg-slate-950 text-white pt-8 px-4 text-base lg:text-lg">
      <div className="lg:grid grid-cols-3 gap-6 pb-8  md:px-10 xl:px-3">
        <div className="col-span-1 pb-3 lg:pb-0">
          <p>
          Providing exceptional legal and professional services with integrity and excellence. Tailored solutions to meet your unique needs. Contact us for expert advice and personalized support.
          </p>
        </div>
        <div className="col-span-2">
          <div className="md:flex justify-start items-center gap-4">
            <div class="flex items-center pt-3">
              <img
                src={emailImg}
                alt=""
                class="w-6 h-auto mr-2"
              />
              <p>kmss@gmail.com</p>
            </div>
            <div class="flex items-center pt-3">
              <img
                src={callImg}
                alt=""
                class="w-6 h-auto mr-2"
              />
              <p>+880 18 93 97 25 09</p>
            </div>
          </div>
          <div class="flex items-center pt-3">
            <img
              src={locaionImg}
              alt=""
              class="w-6 h-auto mr-2"
            />
            <p>
              Block: k, Road: 1, House: 19 Eastern Housing, Pallabi 2nd Phase,
              Mirpur 1216
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center md:flex items-center justify-between py-4 md:px-10 xl:px-3">
        <p class="mt-4 text-base lg:text-lg">© {currentYear} All rights reserved by KMSS Associates.</p>
        {/* Social Icons */}
        <div className="flex justify-center items-center pt-3 gap-2">
          <a href="https://www.facebook.com">
            <img
              src="https://i.ibb.co/3d2ygD0/facebook-4.png"
              alt="Facebook"
              className="w-6 h-auto mr-2"
            />
          </a>
          <a href="https://www.linkedin.com">
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
