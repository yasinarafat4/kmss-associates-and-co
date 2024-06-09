import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-semibold">{heading}</h2>
      <hr className="h-[5px] lg:h-[6px] w-10 lg:w-14 bg-[#2563EB] mb-4" />
    </div>
  );
};

export default SectionTitle;
