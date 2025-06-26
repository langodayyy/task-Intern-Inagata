import React, { useState } from "react";
import { motion } from "framer-motion";

const account = [
  { Name: "Livia Bator", Positon: "CEO", profile: "/images/livia.png" },
  { Name: "Randy Press", Positon: "Director", profile: "/images/rendy.png" },
  { Name: "Workman", Positon: "Designer", profile: "/images/workman.png" },
  { Name: "John De", Positon: "HR", profile: "/images/john.jpg" },
  { Name: "Zelensky", Positon: "PM", profile: "/images/Zelensky.jpg" },
];

const itemsPerPage = 3;

export default function AccountSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0); // default pilih Livia

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % account.length);
  };

  const getVisibleAccounts = () => {
    const result = [];
    for (let i = 0; i < itemsPerPage; i++) {
      result.push(account[(startIndex + i) % account.length]);
    }
    return result;
  };

  const visibleAccounts = getVisibleAccounts();

  return (
    <div className="flex items-center  overflow-hidden w-full md:max-w-[460px] max-w-full">
      <div className="relative w-full overflow-hidden">
        <motion.div
          key={startIndex}
          className="flex xl:gap-4"
          initial={{ x: 40 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4, ease: "linear" }}
        >
          {visibleAccounts.map((item, index) => {
            const realIndex = (startIndex + index) % account.length;
            const isSelected = realIndex === selectedIndex;

            return (
              <div
                key={index}
                className="flex flex-col xl:gap-[15px] gap-4 items-center xl:min-w-[100px] md:min-w-[80px] min-w-[90px] cursor-pointer"
                onClick={() => setSelectedIndex(realIndex)}
              >
                <img
                  src={item.profile}
                  alt="profile"
                  className="xl:w-[70px] xl:h-[70px] w-[50px] h-[50px] rounded-full"
                />
                <div className="flex flex-col items-center xl:gap-[5px]">
                  <span
                    className={`xl:text-base text-[12px] text-[#232323] ${
                        isSelected ? "font-black" : ""
                    }`}
                  >
                    {item.Name}
                  </span>
                  <span
                    className={`xl:text-[14px] text-[12px] text-[#718EBF] ${
                      isSelected ? "font-black" : ""
                    }`}
                  >
                    {item.Positon}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <button
        onClick={nextSlide}
        className="shrink-0 xl:w-[50px] xl:h-[50px] w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden p-0"
      >
        <svg
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[9px] h-[15px]"
        >
          <path d="M1 1L7.5 7.5L1 14" stroke="#718EBF" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}
