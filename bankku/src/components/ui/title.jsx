const title = ({ title = String }) => {
  return (
    <span className="text-[#343C6A] font-semibold xl:text-[22px] md:text-lg flex items-center ">
      {title}
    </span>
  );
};

export default title;
