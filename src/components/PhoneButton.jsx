import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneButton = () => {
  return (
    <div className="fixed  bottom-2 left-2 md:bottom-3 md:left-3 lg:bottom-8 lg:left-8">
      <div className="relaive flex justify-center items-center cursor-pointer z-50 bg-[#e92c39] ps-7 md:ps-[40px] pe-3 py-[8px] rounded-full gap-2">
        <div className="absolute top-2 left-2">
          <div className="relative">
            <span className="absolute inset-0 bg-[#e08585] p-3 rounded-full animate-ping"></span>
            <span className="text-white absolute top-1 left-1">
              <FaPhoneAlt className="text-[15px] " />
            </span>
          </div>
        </div>
        <a
          href="tel:01893972509"
          className="text-[14px] font-semibold text-white px-4 tracking-[3px]"
        >
          01893972509
        </a>
      </div>
    </div>
  );
};

export default PhoneButton;
