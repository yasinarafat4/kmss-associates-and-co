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
    <div className="bg-[#C2410C]">
      <div className="container px-5 py-2 md:px-10 mx-auto text-white flex justify-between items-center">
        <div className="hidden md:flex flex-col lg:flex-row items-start gap-1 lg:gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" />
            <span className="text-xs lg:text-sm tracking-[2px]">
              +8801893972509 | +8801761573171
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white" />
            <span className="text-xs lg:text-sm tracking-[1px]">
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
