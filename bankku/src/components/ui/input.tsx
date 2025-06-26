import * as React from "react"

import { cn } from "../../../src/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "!text-[#718EBF] placeholder:text-[#b2c7eb] selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-[#DFEAF2] rounded-[15px] flex h-10 xl:h-[50px] w-full min-w-0 border bg-transparent px-[15px] xl:px-5 py-3 xl:py-6 xl:text-[15px] text-xs shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
