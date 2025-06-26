const ResentTransaction = ({
  bgColor = String,
  icon = String,
  title = String,
  date = String,
  amount = String,
  amountColor = String,
}) => {
  return (
    <div className="flex items-center xl:gap-[17px] gap-2">
      <div
        style={{ backgroundColor: bgColor }}
        className="xl:p-[14px] p-[10px] rounded-full"
      >
        {icon}
      </div>
      <div className="flex items-center  justify-between w-full">
        <div className="flex flex-col xl:gap-[7px] gap-[3px]">
          <span className="xl:text-base text-[13px] font-medium text-[#232323] overflow-hidden whitespace-nowrap md:max-w-[103px] xl:max-w-full  max-w-full">
            {title}
          </span>
          <span className="xl:text-[15px] text-[12px] font-normal text-[#718EBF]">
            {date}
          </span>
        </div>
        <span
          style={{ color: amountColor }}
          className=" xl:text-base font-medium text-[11px]"
        >
          {amount}
        </span>
      </div>
    </div>
  );
};

export default ResentTransaction;
