import React from "react";

const Container = ({ children }) => {
  return (
    <div className="dark:bg-slate-900 dark:text-white max-w-[2520px] mx-auto px-3 py-3 md:px-10 md:py-8">
      {children}
    </div>
  );
};

export default Container;