// eslint-disable-next-line react/prop-types
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle math
  const radius = 30;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (scrollPercent / 100) * circumference;

  return (
    <div className="fixed bottom-9 lg:bottom-12 right-4 lg:right-8 z-10">
      <svg
        height={radius * 2}
        width={radius * 2}
        className={`${
          !isVisible ? "hidden" : "block"
        } absolute -left-[5px] -top-[5px]`}
      >
        <circle
          stroke="#E92C39"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
          className="transition-all duration-200"
        />
      </svg>
      <button
        onClick={scrollToTop}
        className={`${
          !isVisible ? "hidden" : ""
        } relative z-10 h-[50px] w-[50px] rounded-full drop-shadow-lg bg-white text-center text-xl`}
      >
        <IoIosArrowUp className="m-auto text-[#2563EB]" />
      </button>
    </div>
  );
};

export default BackToTop;
