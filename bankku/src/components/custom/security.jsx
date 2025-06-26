import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
export function Security() {
  const [isSuccess, setIsSuccess] = useState(true);
  const handleSuccess = () => {
    setIsSuccess(true);
  };

  const [twoFactorAuthentication, setTwoFactorAuthentication] = useState({
    twoFA: true,
  });
  return (
    <form action="" className="w-full">
      <div className="xl:pt-[42px] md:pt-[31px] pt-[21px] flex flex-col xl:gap-[30px] md:gap-[25px] gap-5">
        <div className="flex flex-col gap-[27px]">
          <div className="flex flex-col gap-[19px]">
            <span className="text-[#333B69] font-medium xl:text-[17px] text-[14px]">
              Two-factor Authentication
            </span>
            <div className="flex flex-col xl:gap-[17px] md:gap-[15px]">
              <div className="flex items-center gap-5">
                <Switch
                  id="twoFA"
                  checked={twoFactorAuthentication.twoFA}
                  onCheckedChange={(checked) =>
                    setTwoFactorAuthentication((prev) => ({
                      ...prev,
                      twoFA: checked,
                    }))
                  }
                />
                <Label htmlFor="twoFA" className="xl:text-base text-[13px]">
                  Enable or disable two factor authentication
                </Label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[19px] w-full md:w-[50%]">
            <span className="text-[#333B69] font-medium xl:text-[17px] text-[14px]">
              Change Password
            </span>
            <div className="flex flex-col gap-[22px]">
              <div className="flex flex-col w-full gap-[11px]">
                <Label>Current Password</Label>
                <Input
                  type="password"
                  placeholder="Enter current password"
                ></Input>
              </div>
              <div className="flex flex-col w-full gap-[11px]">
                <Label>New Password</Label>
                <Input type="password" placeholder="Enter new password"></Input>
              </div>
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
                <DialogTitle>Security</DialogTitle>
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
                        Edit Security Successful!
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
