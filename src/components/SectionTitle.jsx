// eslint-disable-next-line react/prop-types
const SectionTitle = ({ heading }) => {
  return (
    <div className="inline-block group mb-4">
      <h2 className="text-2xl lg:text-3xl font-semibold">{heading}</h2>
      <div className="h-[5px] lg:h-[6px] w-10 lg:w-14 bg-[#2563EB] transform origin-left transition-all duration-500 group-hover:w-24 lg:group-hover:w-full mt-1"></div>
    </div>
  );
};

export default SectionTitle;
