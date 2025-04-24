import React from "react";

const sizes = {
  textxs: "text-[11px] font-normal",
  texts: "text-[12px] font-normal",
  textmd: "text-[14px] font-normal",
  text2xl: "text-[20px] font-normal sm:text-[17px]",
  text3xl: "text-[24px] font-normal md:text-[22px] sm:text-[20px]",
  text4xl: "text-[32px] font-normal md:text-[30px] sm:text-[27px]",
  text5xl: "text-[48px] font-normal md:text-[44px] sm:text-[40px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "textmd",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700 font-inter ${className} ${sizes[size as keyof typeof sizes]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };