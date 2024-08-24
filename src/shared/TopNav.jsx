import React, { useEffect, useState } from "react";
import { FaClock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const TopNav = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDateTime = currentTime.toLocaleString();

  return (
    <div className="bg-[#C2410C] text-white py-[6px] px-2 lg:px-20 flex justify-between items-center ">
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-white" />
          <span className="text-sm tracking-[2px]">01893972509 | 01761573171</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-white" />
          <span className="text-sm tracking-[1px]">kmssassociates52@gmail.com</span>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-2">
          <FaClock className="text-white" />
          <span className="text-sm lg:text-[15px]">Time & Date:</span>
          <span className="text-[13px] lg:text-sm">{formattedDateTime}</span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
