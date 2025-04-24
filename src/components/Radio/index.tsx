"use client";
import React from "react";

const variants = {
  primary: "border-gray-700 border border-solid checked:bg-indigo-a200 checked:focus:bg-indigo-a200",
} as const;
const sizes = {
  xs: "h-[8px] w-[8px] rounded",
  sm: "h-[16px] w-[16px]",
} as const;

export type RadioProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> & 
  Partial<{
    className: string;
    name: string;
    label: string;
    id: string;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;
const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className = "", name = "", label = "", id = "radio_id", variant = "primary", size = "xs", ...restProps }, ref) => {
    return (
      <label className={className + " flex items-center gap-[5px] cursor-pointer"}>
        <input
          className={`${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
          ref={ref}
          type="radio"
          name={name}
          {...restProps}
          id={id}
        />
        <span>{label}</span>
      </label>
    );
  },
);

export { Radio };