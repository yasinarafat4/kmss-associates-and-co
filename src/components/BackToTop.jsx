import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when the user scrolls down 300 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-2 right-2 md:bottom-3 md:right-3 lg:bottom-8 lg:right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 rounded bg-[#046BD2] text-white hover:bg-[#C2410C] shadow-lg transition-all duration-300"
        >
          <IoIosArrowUp className="text-xl md:text-2xl" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;