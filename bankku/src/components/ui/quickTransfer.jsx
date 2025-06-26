import React, { useState } from "react";
import AccountSlider from "./accountSlider";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";

function QuickTransfer() {
  const [isSuccess, setIsSuccess] = useState(true);

  const handleSuccess = () => {
    setIsSuccess(true);
  };
  return (
    <div className="bg-white rounded-[25px] xl:px-[26px] xl:py-[35px] md:px-[15px] md:py-[30px] px-[18px] py-5 flex flex-col xl:gap-y-[29px] md:gap-y-[26px] gap-y-[22px] w-full">
      <AccountSlider></AccountSlider>
      <div className="flex justify-between items-center">
        <span className="text-[#718EBF] xl:text-base text-[12px]">
          Write Amount
        </span>
        <div className=" bg-[#EDF1F7] rounded-[50px] flex items-center justify-between w-fit gap-2">
          <input
            type="number"
            placeholder="0.00"
            step="any"
            className=" flex-1 xl:max-w-20 max-w-10  xl:ml-[30px] ml-[15px] placeholder-[#718EBF] text-[#718EBF] bg-[#EDF1F7] outline-none no-spinner !box-border xl:text-base text-[13px]"
            onInput={(e) => {
              const value = parseFloat(e.target.value);
              if (value <= 0 && e.target.value !== "") {
                e.target.value = "";
              }
            }}
          />
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="flex bg-[#1814F3] xl:px-6 xl:py-4 py-2 px-[18px] gap-[11px] rounded-[50px] items-center hover:opacity-90 transition"
              >
                <span className="text-white font-medium xl:text-base text-[13px]">
                  Send
                </span>
                <svg
                  className="xl:w-[26px] xl:h-[23px] w-4 h-[14px]"
                  viewBox="0 0 26 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9824 0.923369C26.1091 0.333347 25.5307 -0.164153 24.9664 0.0511577L0.490037 9.39483C0.195457 9.50731 0.000610804 9.78965 1.43342e-06 10.105C-0.000607937 10.4203 0.193121 10.7034 0.487294 10.817L7.36317 13.4726V21.8369C7.36317 22.1897 7.60545 22.4963 7.94873 22.5779C8.28972 22.659 8.64529 22.4967 8.80515 22.1796L11.6489 16.5364L18.5888 21.6868C19.011 22.0001 19.6178 21.8008 19.7714 21.2974C26.251 0.0528342 25.9708 0.97674 25.9824 0.923369ZM19.9404 3.60043L8.01692 12.092L2.88664 10.1106L19.9404 3.60043ZM8.8866 13.3428L19.2798 5.94118C10.3366 15.3758 10.8037 14.8792 10.7647 14.9317C10.7067 15.0096 10.8655 14.7058 8.8866 18.6327V13.3428ZM18.6293 19.8197L12.5206 15.2862L23.566 3.63395L18.6293 19.8197Z"
                    fill="white"
                  />
                </svg>
              </button>
            </DialogTrigger>
            <DialogContent className="md:max-w-[425px] max-w-[300px] max-h-[300px]">
              <DialogHeader>
                <DialogTitle>Transfer</DialogTitle>
              </DialogHeader>
              {isSuccess && (
                <>
                  <div className="grid gap-4 w-full h-full">
                    <div className="flex flex-col items-center justify-center  w-full h-full py-5">
                      <svg className="w-[84px] h-[84px]" viewBox="0 0 52 52">
                        <circle
                          className="stroke-current text-green-500 animate-draw-circle"
                          cx="26"
                          cy="26"
                          r="23"
                          fill="none"
                          strokeWidth="3"
                        />
                        <path
                          className="stroke-current text-green-500 animate-draw-check"
                          fill="none"
                          strokeWidth="4"
                          d="M14 27 l10 10 l15 -15"
                        />
                      </svg>
                      <p className="text-green-600 font-semibold mt-4">
                        Transfer Successful!
                      </p>
                    </div>
                  </div>
                  <style jsx>{`
                    @keyframes drawCircle {
                      0% {
                        stroke-dasharray: 0, 157;
                      }
                      100% {
                        stroke-dasharray: 157, 0;
                      }
                    }

                    @keyframes drawCheck {
                      0% {
                        stroke-dasharray: 0, 45;
                      }
                      100% {
                        stroke-dasharray: 45, 0;
                      }
                    }

                    .animate-draw-circle {
                      stroke-dasharray: 157;
                      stroke-dashoffset: 157;
                      animation: drawCircle 0.6s ease-out forwards;
                    }

                    .animate-draw-check {
                      stroke-dasharray: 45;
                      stroke-dashoffset: 45;
                      animation: drawCheck 0.3s ease-out 0.4s forwards;
                    }
                  `}</style>
                </>
              )}
              <DialogFooter>
                <DialogClose asChild>
                  <Button className="w-full" variant={"default"} onClick={handleSuccess}>
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
export default QuickTransfer;
