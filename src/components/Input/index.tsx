"use client";
import React from "react";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[20px]",
} as const;

const variants = {
  fill: {
    white_A700: "bg-white-a700 text-gray-900_01",
    gray_100: "bg-gray-100",
  },
  outline: {
    indigo_A200_33: "border-indigo-a200_33 border-[5px] border-solid text-blue_gray-200",
    gray_300: "border-gray-300 border-[0.5px] border-solid text-gray-500",
  },
} as const;

const sizes = {
  lg: "h-[68px] px-3 text-[14px]",
  xs: "h-[30px] px-2.5 text-[12px]",
  sm: "h-[34px] px-2.5 text-[14px]",
  md: "h-[42px] px-4 text-[16px]",
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> & 
Partial<{
  label: string;
  prefix: React.ReactNode;
  suffix: React.ReactNode;
  shape: keyof typeof shapes;
  variant: keyof typeof variants | null;
  size: keyof typeof sizes;
  color: string;
}>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "md",
      color = "gray_100",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text ${shape && shapes[shape]} ${variant && (variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);

export { Input };