"use client";

import { useState } from "react";
import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../../../src/lib/utils";
import { Button } from "./button";
import { Label } from "./label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Switch } from "./switch";
import { currencies } from "currencies.json";
import TimezoneSelect from "react-timezone-select";

const currencyOptions = currencies.map((currency) => ({
  code: currency.code,
  label: `${currency.code}`,
}));

// Default preferences
const preferences = {
  currency: {
    name: "US Dollar",
    code: "USD",
  },
  timeZone: {
    value: "Etc/GMT+12",
    label: "(GMT-12:00) International Date Line West",
  },
};

export function Preferences() {
  const [currencyOpen, setCurrencyOpen] = React.useState(false);
  const [selectedCurrency, setSelectedCurrency] = React.useState(
    preferences.currency
  );
  console.log(currencyOptions);
  const [isSuccess, setIsSuccess] = useState(true);
  const handleSuccess = () => {
    setIsSuccess(true);
  };

  const [selectedTimezone, setSelectedTimezone] = React.useState(
    preferences.timeZone
  );
  const [notificationSettings, setNotificationSettings] = useState({
    digitalCurrency: true,
    merchantOrder: false,
    recommendation: true,
  });

  const [isXL, setIsXL] = React.useState(false);

  React.useEffect(() => {
    const updateSize = () => {
      setIsXL(window.innerWidth >= 1280);
    };
    updateSize(); 
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <form action="" className="w-full">
      <div className="xl:pt-[42px] md:pt-[31px] pt-[22px] flex flex-col xl:gap-[72px] md:gap-[54px] gap-[17px]">
        <div className="flex flex-col gap-[27px] ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="flex flex-col gap-[11px]">
              <Label>Currency</Label>
              <Popover open={currencyOpen} onOpenChange={setCurrencyOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={currencyOpen}
                    className="text-[#718EBF] placeholder:text-[#b2c7eb] border-[#DFEAF2] rounded-[15px] flex h-10 w-full min-w-0 border bg-transparent md:px-[15px] xl:px-5 md:py-3 xl:py-6 xl:text-base text-xs shadow-xs hover:text-[#718EBF] bg-white font-normal justify-start"
                  >
                    {selectedCurrency?.code || "Select currency"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-full">
                  <Command>
                    <CommandInput placeholder="Search currency..." />
                    <CommandList>
                      <CommandEmpty>No currency found.</CommandEmpty>
                      <CommandGroup>
                        {currencyOptions.map((currency) => (
                          <CommandItem
                            key={currency.code}
                            value={currency.label}
                            onSelect={() => {
                              setSelectedCurrency(currency);
                              setCurrencyOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedCurrency?.code === currency.code
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {currency.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Timezone */}
            <div className="flex flex-col gap-[11px]">
              <Label>Time Zone</Label>
              <TimezoneSelect
                value={selectedTimezone}
                onChange={setSelectedTimezone}
                className="react-select-container "
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderRadius: "15px",
                    borderColor: "#DFEAF2",
                    padding: "0.375rem 0.75rem",
                    fontSize: isXL ? "1rem" : "12px",
                    boxShadow: "none",
                    backgroundColor: "#fff",
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "#718EBF",
                  }),
                  input: (base) => ({
                    ...base,
                    color: "#718EBF",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#718EBF",
                  }),
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[19px]">
            <span className="text-[#333B69] font-medium text-[17px]">
              Notification
            </span>
            <div className="flex flex-col xl:gap-[17px] md:gap-[15px] gap-[18px]">
              <div className="flex items-center gap-5">
                <Switch
                  id="digital-currency"
                  checked={notificationSettings.digitalCurrency}
                  onCheckedChange={(checked) =>
                    setNotificationSettings((prev) => ({
                      ...prev,
                      digitalCurrency: checked,
                    }))
                  }
                />
                <Label htmlFor="digita-curency" className="xl:text-base text-[13px]">
                  I send or receive digita currency
                </Label>
              </div>
              <div className="flex items-center gap-5">
                <Switch
                  id="merchant-order"
                  checked={notificationSettings.merchantOrder}
                  onCheckedChange={(checked) =>
                    setNotificationSettings((prev) => ({
                      ...prev,
                      merchantOrder: checked,
                    }))
                  }
                />
                <Label htmlFor="merchant-order" className="xl:text-base text-[13px]">
                  I receive merchant order
                </Label>
              </div>
              <div className="flex items-center gap-5">
                <Switch
                  id="recommendation"
                  checked={notificationSettings.recommendation}
                  onCheckedChange={(checked) =>
                    setNotificationSettings((prev) => ({
                      ...prev,

                      recommendation: checked,
                    }))
                  }
                />
                <Label htmlFor="recomendation" className="xl:text-base text-[13px]">
                  There are recommendation for my account
                </Label>
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
                <DialogTitle>Preferences</DialogTitle>
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
                        Edit Preferences Successful!
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
