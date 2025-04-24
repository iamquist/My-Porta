import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[16px]",
  square: "rounded-[0px]",
} as const;
const variants = {
  fill: {
    gray_100_02: "bg-gray-100_02 text-indigo-a200",
    pink_300: "bg-pink-300 text-white-a700",
    white_A700: "bg-white-a700 text-blue_gray-900",
    gray_100_06: "bg-gray-100_06 shadow-7xl",
    gray_300: "bg-gray-300 text-gray-500",
    indigo_A200: "bg-indigo-a200 text-white-a700",
    gray_50: "bg-gray-50 text-gray-700",
    yellow_50: "bg-yellow-50 text-lime-900",
    gray_100: "bg-gray-100 text-gray-700",
    gray_100_01: "bg-gray-100_01 text-deep_purple-400",
  },
  outline: {
    gray_100: "border-gray-100 border-[0.5px] border-solid text-gray-900_01",
    gray_300: "border-gray-300 border border-solid text-gray-900_01",
    gray_500: "border-gray-500 border border-solid",
    red_100: "border-red-500 border border-solid",
    blue_100: "border-blue-500 border border-solid"
  },
} as const;
const sizes = {
  "6xl": "h-[52px] px-3.5",
  "10xl": "h-[64px] px-5",
  "3xl": "h-[44px] px-[34px] text-[16px]",
  "7xl": "h-[52px] px-5 text-[18px]",
  sm: "h-[24px] px-1",
  "8xl": "h-[56px] px-3.5 text-[12px]",
  "11xl": "h-[68px] pl-3 pr-[34px] text-[14px]",
  lg: "h-[32px] px-2.5",
  xs: "h-[24px] px-2 text-[11px]",
  "9xl": "h-[60px] px-3.5 text-[12px]",
  "12xl": "h-[68px] px-[22px]",
  "4xl": "h-[48px] px-3",
  "5xl": "h-[52px] pl-3 pr-[18px] text-[14px]",
  md: "h-[28px] pl-2 pr-0.5 text-[12px]",
  xl: "h-[36px] px-2",
  "2xl": "h-[36px] px-2.5 text-[14px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> & 
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "2xl",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`} 
        {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};
export { Button };