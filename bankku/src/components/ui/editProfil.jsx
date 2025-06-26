import React, { useState, useRef } from "react";
import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Calendar } from "./calendar";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export default function EditProfil() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(undefined);
  const [isSuccess, setIsSuccess] = useState(true);

  const handleSuccess = () => {
    setIsSuccess(true);
  };

  const [profilData, setProfilData] = useState({
    name: "Charlene Reed",
    userName: "charlenereed",
    email: "charlenereed@gmail.com",
    password: "charlenereed@gmail.com",
    dateOfBirth: "25-12-1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: 45962,
    country: "USA",
    pict: "/images/pict.png",
  });

  React.useEffect(() => {
    if (profilData.dateOfBirth) {
      const [day, month, year] = profilData.dateOfBirth.split("-").map(Number);
      setDate(new Date(year, month - 1, day));
    }
  }, [profilData.dateOfBirth]);

  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(profilData.pict);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <form className="w-full">
      <div className="flex flex-col md:gap-y-[30px] gap-y-5 md:px-[30px] xl:pt-[52px] md:pt-[41px] ">
        <div className=" bg-white flex  md:flex-row flex-col gap-x-[40px] w-full  ">
          <div className="md:px-0 md:py-0 pt-[25px] pb-[22px] w-full md:w-[110px] md:h-[110px] xl:w-[130px] xl:h-[130px] flex justify-center items-center md:justify-start md:items-start">
            <div className="w-[170px] h-[170px] md:w-[110px] md:h-[110px] xl:w-[130px] xl:h-[130px] rounded-full flex items-center ">
              <img
                src={profilData.pict}
                alt=""
                className="w-full h-full rounded-full object-cover object-center"
              />
              <div
                className="p-2 rounded-full bg-[#1814F3] absolute xl:top-[345px] xl:left-[450px] md:top-[305px] md:left-[400px] top-[370px] left-[260px] cursor-pointer"
                onClick={handleImageClick}
              >
                <svg
                  className="xl:w-[15px] xl:h-[15px] md:w-3 md:h-3 w-[18px] h-[18px] "
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_385)">
                    <path
                      d="M14.587 4.16321L13.2364 5.51379C13.0987 5.65149 12.876 5.65149 12.7383 5.51379L9.48637 2.26184C9.34867 2.12415 9.34867 1.90149 9.48637 1.76379L10.837 0.413208C11.3848 -0.134644 12.2754 -0.134644 12.8262 0.413208L14.587 2.17395C15.1377 2.7218 15.1377 3.61243 14.587 4.16321ZM8.32621 2.92395L0.632851 10.6173L0.011757 14.1769C-0.073204 14.6573 0.345741 15.0734 0.82621 14.9913L4.38578 14.3673L12.0791 6.67395C12.2168 6.53626 12.2168 6.3136 12.0791 6.1759L8.82719 2.92395C8.68656 2.78626 8.46391 2.78626 8.32621 2.92395ZM3.63578 9.95813C3.47465 9.797 3.47465 9.53918 3.63578 9.37805L8.1475 4.86633C8.30863 4.7052 8.56644 4.7052 8.72758 4.86633C8.88871 5.02747 8.88871 5.28528 8.72758 5.44641L4.21586 9.95813C4.05473 10.1193 3.79691 10.1193 3.63578 9.95813ZM2.57816 12.422H3.98441V13.4855L2.09476 13.8165L1.18363 12.9054L1.51469 11.0157H2.57816V12.422Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_385">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[36px] md:gap-y-[14px] gap-y-4 flex-1 w-full">
            <div className="flex flex-col md:gap-[7px] gap-[9px] w-full">
              <Label>Your Name</Label>
              <Input
                placeholder="Enter your name"
                value={profilData.name}
                onChange={(e) =>
                  setProfilData({ ...profilData, name: e.target.value })
                }
              ></Input>
            </div>
            <div className="flex flex-col md:gap-[7px] gap-[9px] w-full">
              <Label>User Name</Label>
              <Input
                placeholder="Enter your user name"
                value={profilData.userName}
                onChange={(e) =>
                  setProfilData({ ...profilData, userName: e.target.value })
                }
              ></Input>
            </div>
            <div className="flex flex-col md:gap-[7px] gap-[9px] w-full">
              <Label>Email</Label>
              <Input
                placeholder="Enter your email"
                value={profilData.email}
                onChange={(e) =>
                  setProfilData({ ...profilData, email: e.target.value })
                }
                type="email"
              ></Input>
            </div>
            <div className="flex flex-col md:gap-[7px] gap-[9px] w-full">
              <Label>Password</Label>
              <Input
                placeholder="Enter your password"
                value={profilData.password}
                onChange={(e) =>
                  setProfilData({ ...profilData, password: e.target.value })
                }
                type="password"
              ></Input>
            </div>
            <div className="flex flex-col md:gap-[7px] gap-[9px] w-full">
              <Label>Date of Birth</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="calendar"
                    id="date"
                    className="h-10 xl:h-[50px] w-full min-w-0 border bg-transparent px-[15px] xl:px-5 py-3 xl:py-6 xl:text-[15px] text-xs"
                  >
                    {date
                      ? date.toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : "Select date"}

                    {open ? (
                      <ChevronUpIcon size={16} />
                    ) : (
                      <ChevronDownIcon size={16} />
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-[250px] overflow-hidden p-0 "
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    className="w-full"
                    classNames={{
                      root: "w-full min-w-[250px]",
                    }}
                    onSelect={(selectedDate) => {
                      if (selectedDate) {
                        const safeDate = new Date(selectedDate);
                        setDate(safeDate);
                        const formatted = safeDate
                          .toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })
                          .split("/")
                          .join("-");
                        setProfilData({
                          ...profilData,
                          dateOfBirth: formatted,
                        });
                      }
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col md:gap-[7px] gap-[9px] w-full">
              <Label>Present Address</Label>
              <Input
                placeholder="Enter your present address"
                value={profilData.presentAddress}
                onChange={(e) =>
                  setProfilData({
                    ...profilData,
                    presentAddress: e.target.value,
                  })
                }
              ></Input>
            </div>
            <div className="flex flex-col md:gap-[7px] gap-[9px] w-full">
              <Label>Permanent Address</Label>
              <Input
                placeholder="Enter your permanent address"
                value={profilData.permanentAddress}
                onChange={(e) =>
                  setProfilData({
                    ...profilData,
                    permanentAddress: e.target.value,
                  })
                }
              ></Input>
            </div>
            <div className="flex flex-col md:gap-[7px] gap-[9px] w-full">
              <Label>City</Label>
              <Input
                placeholder="Enter your city"
                value={profilData.city}
                onChange={(e) =>
                  setProfilData({ ...profilData, city: e.target.value })
                }
              ></Input>
            </div>
            <div className="flex flex-col md:gap-[7px] gap-[9px] w-full">
              <Label>Postal Code</Label>
              <Input
                placeholder="Enter your postal code"
                value={profilData.postalCode}
                onChange={(e) =>
                  setProfilData({ ...profilData, postalCode: e.target.value })
                }
                type="number"
                className="no-spinner"
              ></Input>
            </div>
            <div className="flex flex-col md:gap-[7px] gap-[9px] w-full">
              <Label>Country</Label>
              <Input
                placeholder="Enter your country"
                value={profilData.country}
                onChange={(e) =>
                  setProfilData({ ...profilData, country: e.target.value })
                }
              ></Input>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full  xl:w-[190px] xl:h-[50px] md:w-[130px] h-10 px-[30px]  xl:text-lg md:text-[15px]  font-normal rounded-[15px]">
                Save
              </Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-[425px] max-w-[300px] max-h-[300px]">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
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
                        Edit Profile Successful!
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
                  <Button
                    className="w-full"
                    variant={"default"}
                    onClick={handleSuccess}
                  >
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </form>
  );
}
