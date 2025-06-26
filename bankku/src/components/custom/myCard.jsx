const MyCard = ({
  showTitle = true,
  showAction = true,
  fromColor = String,
  toColor = String,
  chipImage = String,
  dotColor1 = String,
  dotColor2 = String,
  cardHolder = String,
  validThru = String,
  balance = String,
  cardNumber = String,
  colorLabel = String,
  colorValue = String,
  showBorderTop = false,
}) => {
  return (
    <div className="flex flex-col gap-5">
      {(showTitle || showAction) && (
        <div className="flex justify-between">
          {showTitle ? (
            <span className="font-semibold text-[#343C6A] xl:text-[22px] text-lg flex items-center">
              My Cards
            </span>
          ) : (
            <span></span>
          )}
          {showAction && (
            <span className="font-semibold text-[#343C6A] flex items-center xl:text-[17px] text-[15px] h-7">
              See All
            </span>
          )}
        </div>
      )}
      <div
        className="md:w-full xl:h-[235px] w-[265px] h-[170px]  rounded-[25px] md:py-6 py-4 border "
        style={{
          backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
        }}
      >
        {/* Balance + Chip */}
        <div className="flex justify-between items-center xl:px-[26px] px-5">
          <div className="flex flex-col leading-[0.7]">
            <span
              style={{ color: colorLabel }}
              className="font-lato xl:text-[12px] text-[11px]"
            >
              Balance
            </span>
            <span
              style={{ color: colorValue }}
              className="text-white font-lato xl:text-xl text-base font-semibold"
            >
              {balance}
            </span>
          </div>
          <img
            src={chipImage}
            alt="chip"
            className="xl:w-[34.77px] xl:h-[34.77px] w-[29px] h-[29px]"
          />
        </div>

        {/* Holder + Valid */}
        <div className="xl:pt-[33px] pt-[23px] xl:pb-[35.1px] pb-4  grid grid-cols-5 xl:flex w-full xl:gap-[57px] xl:px-[26px] px-5">
          <div className="col-span-3">
            <div className="flex flex-col w-full">
              <span
                style={{ color: colorLabel }}
                className="font-lato xl:text-[12px] text-[10px] w-auto"
              >
                CARD HOLDER
              </span>
              <span
                style={{ color: colorValue }}
                className="font-lato xl:text-[15px] text-[13px] font-semibold w-full"
              >
                {cardHolder}
              </span>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col w-full">
              <span
                style={{ color: colorLabel }}
                className="font-lato  xl:text-[12px] text-[10px]"
              >
                VALID THRU
              </span>
              <span
                style={{ color: colorValue }}
                className="font-lato xl:text-[15px] text-[13px] font-semibold"
              >
                {validThru}
              </span>
            </div>
          </div>
        </div>

        {/* Card Number + Dots */}
        <div
          className={`w-full xl:h-[64px] md:h-[39px] h-[47px] bg-white/10 ${
            showBorderTop ? "border-t" : ""
          }`}
        >
          <div className="flex items-center justify-between xl:px-[26px] px-5 w-full h-full">
            <span
              style={{ color: colorValue }}
              className="font-lato xl:text-[22px] md:text-[15px]"
            >
              {cardNumber}
            </span>
            <div className="relative flex items-center justify-center">
              <div
                className="xl:w-[30px] xl:h-[30px] w-[18.45px] h-[18.5px] rounded-full z-10"
                style={{ backgroundColor: dotColor1 }}
              ></div>
              <div
                className="xl:w-[30px] xl:h-[30px] w-[18.45px] h-[18.5px] rounded-full xl:-ml-4 -ml-[10px] z-20"
                style={{ backgroundColor: dotColor2 }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
