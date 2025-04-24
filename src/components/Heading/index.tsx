import React from "react";

const sizes = {
  textlg: "text-[16px] font-medium sm:text-[13px]",
  textxl: "text-[18px] font-medium sm:text-[15px]",
  headingxs: "text-[14px] font-bold",
  headings: "text-[16px] font-bold sm:text-[13px]",
  headingmd: "text-[20px] font-bold sm:text-[17px]",
  headinglg: "text-[24px] font-bold md:text-[22px] sm:text-[20px]",
  headingxl: "text-[32px] font-bold md:text-[30px] sm:text-[27px]",
  heading2xl: "text-[40px] font-bold md:text-[38px] sm:text-[34px]",
  heading3xl: "text-[48px] font-bold md:text-[44px] sm:text-[40px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> & 
React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingxs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-gray-900_01 font-archivo ${className} ${sizes[size] as keyof typeof sizes} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };