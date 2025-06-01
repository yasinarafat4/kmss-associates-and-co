import { useEffect, useState } from "react";
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
    <div className="bg-[#C2410C] py-[6px] px-4 xl:px-0">
      <div className="container mx-auto text-white flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-white" />
            <span className="text-sm tracking-[2px]">
              01893972509 | 01761573171
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-white" />
            <span className="text-sm tracking-[1px]">
              kmssassociates52@gmail.com
            </span>
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
    </div>
  );
};

export default TopNav;
